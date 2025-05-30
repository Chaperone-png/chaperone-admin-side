"use client";
import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { Plant } from "@/types/MasterData";
import { executeApiCall } from "@/utils/APIResponseHandling";
import {
  addPlant,
  allPlants,
  deletePlant,
  editPlant,
} from "@/services/apis/masterDataAPIs/plantMasterAPIs";
import { useDispatch } from "react-redux";
import PlantFormModal from "./PlantFormModel";
import { FaChevronDown } from "react-icons/fa";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import "./PlantTable.scss";
import { showToast } from "@/store/slices/toastSlice";
import DeleteModal from "./PlantFormModel/DeleteModal";
import Button from "@/components/common/UI/Button";

const PlantMaster = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [plants, setPlants] = useState<Partial<Plant>[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Partial<Plant>[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [totalPlants, setTotalPlants] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templateHeaders, setTemplateHeaders] = useState<string[]>([]);
  const [templateDefaultData, setTemplateDefaultData] = useState<
    Partial<Plant>
  >({});
  const [showDropdown, setShowDropdown] = useState(false);

  const [editPlantData, setEditPlantData] = useState<Partial<Plant> | null>(
    null
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number>();
  const [havePrevious, setHavePrevious] = useState(false);
  const [haveNext, setHaveNext] = useState(false);

  const formattedColumns = useMemo(() => templateHeaders, [templateHeaders]);

  useEffect(() => {
    const debounceTimeout = 500;
    let handler: NodeJS.Timeout;

    const fetchPlants = async () => {
      await executeApiCall(
        dispatch,
        () => allPlants({ itemsPerPage, page: currentPage, searchText }),
        (data) => {
          const { data: plantData, totalCount } = data;
          const transformedData = plantData.map((plant: any) => ({
            ...plant,
            created_at: new Date(plant.created_at).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
            updated_at: new Date(plant.updated_at).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
            category: plant.category ? JSON.parse(plant.category) : [],
            tags: plant.tags ? JSON.parse(plant.tags) : [],
            faqs: plant.faqs
              ? JSON.parse(plant.faqs)
                  ?.map(
                    (f: any, i: number) =>
                      `${i + 1}. Q: ${f?.question} A: ${f?.answer}`
                  )
                  .join(" | ")
              : [],
            plant_benefits: plant.plant_benefits
              ? JSON.parse(plant.plant_benefits)
                  ?.map(
                    (b: any, i: number) =>
                      `${i + 1}. ${b.title}: ${b.description}`
                  )
                  .join(" | ")
              : [],
            plant_care_tips: plant.plant_care_tips
              ? JSON.parse(plant.plant_care_tips)
                  ?.map(
                    (c: any, i: number) =>
                      `${i + 1}. ${c.title}: ${c.description}`
                  )
                  .join(" | ")
              : [],
          }));

          if (transformedData.length > 0) {
            setTemplateHeaders(Object.keys(transformedData[0]));
            setTemplateDefaultData(transformedData[0]);
          }

          setHaveNext(itemsPerPage * currentPage < totalCount);
          setHavePrevious(currentPage > 1);

          setPlants(plantData);
          setFilteredPlants(transformedData);
          setTotalPlants(totalCount);
        },
        "Successfully fetched the plants."
      );
    };

    handler = setTimeout(() => {
      fetchPlants();
    }, debounceTimeout);

    return () => {
      clearTimeout(handler);
    };
  }, [currentPage, itemsPerPage, searchText]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchText(val);
    const filtered = plants.filter((plant) =>
      plant.name?.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredPlants);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Plants");
    XLSX.writeFile(wb, "plants_data.xlsx");
  };

  const handleTemplateDownload = () => {
    if (!templateHeaders.length || !Object.keys(templateDefaultData).length)
      return;

    const ws = XLSX.utils.json_to_sheet([templateDefaultData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "plant_upload_template.xlsx");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(sheet);

        if (!jsonData.length) return;

        const uploadedHeaders = Object.keys(jsonData[0]);
        const isValid = templateHeaders.every((header) =>
          uploadedHeaders.includes(header)
        );

        if (!isValid) return;

        console.log("Uploaded valid data:", jsonData);
      } catch (error) {
        console.error("Upload Error", error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleEdit = (plant: Partial<Plant>) => {
    const finalPlant =
      plants.filter((plantData) => plantData.id == plant.id)?.[0] || null;
    setEditPlantData(finalPlant);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number | undefined) => {
    if (!id) {
      dispatch(
        showToast({ type: "error", message: "Cannot delete as iD is missing" })
      );
      return;
    }
    setDeleteItemId(id);
    setShowDeleteModal(true);
  };
  const deleteItem = (id: number) => {
    const plant_id = id;
    executeApiCall(
      dispatch,
      () => deletePlant(plant_id),
      () => {
        const updatedPlants = plants.filter((plant) => plant.id !== id);
        setPlants(updatedPlants);
        setFilteredPlants(updatedPlants);
        setTotalPlants(totalPlants - 1);
      },
      "Deleted Successfully",
      () => setShowDeleteModal(false)
    );
  };

  const isEqual = (obj1: Partial<Plant> | null, obj2: Partial<Plant>) => {
    return obj1 === obj2;
  };

  const onSubmitHandler = (payload: Partial<Plant>) => {
    
    if (editPlantData && isEqual(editPlantData, payload)) {
      dispatch(
        showToast({ type: "error", message: "No Data has been changed." })
      );
      return;
    }
    const apiCall = editPlantData
      ? editPlant({ payload, plant_id: payload.id })
      : addPlant(payload);
    const successMessage = editPlantData
      ? "Successfully Updated the plant"
      : "Successfully Added the plant";
    executeApiCall(
      dispatch,
      () => apiCall,
      (data) => {
        let updatedPlants = [...plants];
        if (editPlantData) {
          updatedPlants = plants.map((plant) =>
            plant.id === payload.id ? { ...plant, ...payload } : plant
          );
        } else {
          const { plant_id: id } = data;
          updatedPlants = [ { ...payload, id }, ...plants.slice(0, -1)];
        }
        setPlants(updatedPlants);
        setTotalPlants(editPlantData ? totalPlants : totalPlants + 1);
        setFilteredPlants(updatedPlants);
      },
      successMessage,
      () => setIsModalOpen(false)
    );
    setIsModalOpen(false);
  };

  return (
    <div className="plant-master p-4">
      <div className="plant-manager-top-bar">
        <input
          type="text"
          placeholder="Search by plant name"
          value={searchText}
          onChange={handleSearch}
          className="plant-search-input"
        />
        <div className="plant-dropdown-wrapper">
          <button
            className="btn btn-green"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Templates <FaChevronDown />
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleDownload}>Download Data</button>
              <button onClick={handleTemplateDownload}>
                Download Template
              </button>
              <label>
                Bulk Upload
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setEditPlantData(null);
            setIsModalOpen(true);
          }}
          className="btn btn-green"
        >
          Add Plant
        </button>
      </div>

      <span>
        <h3 className="font-bold ">{filteredPlants.length}</h3> results found.
      </span>

      <div className="plant-table-wrapper">
        <div className="table-scroll-container">
          <table className="plant-table">
            <thead>
              <tr>
                {formattedColumns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlants.map((plant, idx) => (
                <tr key={plant.id || idx}>
                  {formattedColumns.map((col) => (
                    <td key={col}>
                      {typeof plant[col as keyof Plant] === "object"
                        ? JSON.stringify(plant[col as keyof Plant])
                        : (plant[col as keyof Plant] as string)}
                    </td>
                  ))}
                  <td>
                    <Button
                      content="Edit"
                      rightIcon={<PencilIcon className="size-6 stroke-blue" />}
                      onClick={() => handleEdit(plant)}
                      className="action-btn edit-btn"
                    />
                    <Button
                      content="Delete"
                      rightIcon={<TrashIcon className="size-6 stroke-red" />}
                      onClick={() => handleDelete(plant.id)}
                      className="action-btn delete-btn"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="plant-pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`${
            !havePrevious ? "pointer-events-none opacity-50" : ""
          } btn btn-green`}
          disabled={!havePrevious}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`${
            !haveNext ? "pointer-events-none opacity-50" : ""
          } btn btn-green`}
          disabled={!haveNext}
        >
          Next
        </button>
      </div>

      <PlantFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={onSubmitHandler}
        editData={editPlantData}
      />

      <DeleteModal
        id={deleteItemId}
        open={showDeleteModal}
        setOpen={setShowDeleteModal}
        submitHandler={deleteItem}
      />
    </div>
  );
};

export default PlantMaster;
