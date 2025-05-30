"use client";

import { allNurseriesForInventory } from "@/services/apis/admin/nurseryAPIs";
import { allPlantsForInventory } from "@/services/apis/masterDataAPIs/plantMasterAPIs";
import { executeApiCall } from "@/utils/APIResponseHandling";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select, { MultiValue, SingleValue } from "react-select";
import { ValidationErrors } from "../../multiStepConfigTypes";
import { PlantNurserySection } from "./StepTypes";

interface apiDataType {
  id: number;
  name: string;
}

interface OptionType {
  id: number;
  label: string;
  value: string;
}

interface SelectNurseriesAndPlantsProps {
  data: PlantNurserySection;
  errors: ValidationErrors<PlantNurserySection>;
  onChangeHandler: (fields: PlantNurserySection) => void;
}

const SelectNurseriesAndPlants: React.FC<SelectNurseriesAndPlantsProps> = ({
  data,
  errors,
  onChangeHandler,
}) => {
  const dispatch = useDispatch();

  const [plantOptions, setPlantOptions] = useState<OptionType[]>();
  const [nurseryOptions, setNurseryOptions] = useState<OptionType[]>();
  const [selectedPlant, setSelectedPlant] =
    useState<SingleValue<OptionType>>(null);
  const [selectedNurseries, setSelectedNurseries] = useState<
    MultiValue<OptionType>
  >([]);

  useEffect(() => {
    const fetchPlants = async () => {
      await executeApiCall(
        dispatch,
        () => allPlantsForInventory(),
        (data) => {
          const { data: plantData } = data;
          var updatedList: OptionType[] = plantData.map(
            (plant: apiDataType) => {
              return {
                id: plant.id,
                value: plant.name,
                label: plant.name,
              };
            }
          );

          setPlantOptions(updatedList);
        },
        "Successfully fetched all the plants."
      );
    };

    const fetchNurseries = async () => {
      await executeApiCall(
        dispatch,
        () => allNurseriesForInventory(),
        (data) => {
          const { data: nurseryData } = data;
          var updatedList: OptionType[] = nurseryData.map(
            (nursery: apiDataType) => {
              return {
                id: nursery.id,
                value: nursery.name,
                label: nursery.name,
              };
            }
          );

          setNurseryOptions(updatedList);
        },
        "Successfully fetched all the nurseries."
      );
    };

    fetchPlants();
    fetchNurseries();
  }, []);

  const handlePlantChange = (option: SingleValue<OptionType>) => {
    setSelectedPlant(option);
  };

  const handleNurseryChange = (options: MultiValue<OptionType>) => {
    setSelectedNurseries(options);
  };

  const handleNext = () => {
    const stepFields: PlantNurserySection = {
      selectedPlant: selectedPlant || null,
      selectedNurseries: [...selectedNurseries],
    };

    onChangeHandler(stepFields);
  };

  return (
    <div>
      <h3>Select Nurseries</h3>
      <Select
        options={nurseryOptions}
        value={selectedNurseries}
        onChange={handleNurseryChange}
        placeholder="Search or select nurseries..."
        isMulti
        isSearchable
      />

      <h3 className="mt-4">Select Plant</h3>
      <Select
        options={plantOptions}
        value={selectedPlant}
        onChange={handlePlantChange}
        placeholder="Search or select a plant..."
        isSearchable
        isMulti={false}
      />

      <div className="footer">
        <button className="buttonNext" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectNurseriesAndPlants;
