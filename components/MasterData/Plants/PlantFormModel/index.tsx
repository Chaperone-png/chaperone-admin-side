import React, { useState, useRef, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import BenefitFields from "./BenefitFields";
import TipFields from "./TipFields";
import FAQFields from "./FAQFields";
import { Plant } from "@/types/MasterData";
import "./PlantFormModel.scss";

const defaultBenefit = { title: "", description: "" };
const defaultTip = { title: "", description: "" };
const defaultFaq = { question: "", answer: "" };

interface TagsOption {
  label: string;
  value: string;
}

const categoryOptions: TagsOption[] = [
  { value: "indoor-plants", label: "Indoor Plants" },
  { value: "outdoor-plants", label: "Outdoor Plants" },
  { value: "flower-plants", label: "Flower Plants" },
  { value: "monsoon-plants", label: "Monsoon Plants" },
  { value: "air-purifying-plants", label: "Air Purifying Plants" },
  { value: "low-maintenance-plants", label: "Low Maintenance Plants" },
  { value: "hanging-plants", label: "Hanging Plants" },
  { value: "summer-plants", label: "Summer Plants" },
];

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onSubmit: (plant: Partial<Plant>) => void;
  editData: Partial<Plant> | null;
};

export default function PlantFormModal({
  isModalOpen,
  setIsModalOpen,
  onSubmit,
  editData,
}: Props) {
  const [formData, setFormData] = useState<Partial<Plant>>({});
  const [plantBenefits, setPlantBenefits] = useState([defaultBenefit]);
  const [plantCareTips, setPlantCareTips] = useState([defaultTip]);
  const [faqs, setFaqs] = useState([defaultFaq]);
  const [tags, setTags] = useState<TagsOption[]>([]);
  const [category, setCategory] = useState<TagsOption[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const nameRef = useRef<HTMLInputElement>(null);

  function isJsonString(str: string) {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  }

  useEffect(() => {
    if (editData) {
      setFormData(editData);

      setTags(
        editData.tags &&
          typeof editData.tags === "string" &&
          isJsonString(editData.tags)
          ? JSON.parse(editData.tags).map((tag: string) => ({
              label: tag,
              value: tag,
            }))
          : Array.isArray(editData.tags)
          ? editData.tags.map((tag: string) => ({ label: tag, value: tag }))
          : []
      );

      setCategory(
        editData.category &&
          typeof editData.category === "string" &&
          isJsonString(editData.category)
          ? JSON.parse(editData.category).map((cat: string) => ({
              label: cat,
              value: cat,
            }))
          : Array.isArray(editData.category)
          ? editData.category.map((cat: string) => ({ label: cat, value: cat }))
          : []
      );

      setPlantBenefits(
        editData.plant_benefits &&
          typeof editData.plant_benefits === "string" &&
          isJsonString(editData.plant_benefits)
          ? JSON.parse(editData.plant_benefits)
          : Array.isArray(editData.plant_benefits) &&
            editData.plant_benefits.length > 0
          ? editData.plant_benefits
          : [defaultBenefit]
      );

      setPlantCareTips(
        editData.plant_care_tips &&
          typeof editData.plant_care_tips === "string" &&
          isJsonString(editData.plant_care_tips)
          ? JSON.parse(editData.plant_care_tips)
          : Array.isArray(editData.plant_care_tips) &&
            editData.plant_care_tips.length > 0
          ? editData.plant_care_tips
          : [defaultTip]
      );

      setFaqs(
        editData.faqs &&
          typeof editData.faqs === "string" &&
          isJsonString(editData.faqs)
          ? JSON.parse(editData.faqs)
          : Array.isArray(editData.faqs) && editData.faqs.length > 0
          ? editData.faqs
          : [defaultFaq]
      );
    } else {
      setFormData({});
      setTags([]);
      setCategory([]);
      setPlantBenefits([defaultBenefit]);
      setPlantCareTips([defaultTip]);
      setFaqs([defaultFaq]);
    }
  }, [editData, isModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[e.target.name];
        return copy;
      });
    }
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Plant name is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        nameRef.current.focus();
      }
      return;
    }

    onSubmit({
      ...formData,
      tags: tags.map((tag) => tag.value),
      category: category.map((tag) => tag.value),
      plant_benefits: plantBenefits,
      plant_care_tips: plantCareTips,
      faqs,
    });
  };

  if (!isModalOpen) return null;

  const inputClass = (field: string) =>
    `input ${errors[field] ? "input-error" : ""}`;
  const textareaClass = (field: string) =>
    `textarea ${errors[field] ? "input-error" : ""}`;
  const selectClass = (field: string) =>
    `select ${errors[field] ? "input-error" : ""}`;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">{editData ? "Edit Plant" : "Add Plant"}</h2>
        <form
          className="plant-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="form-group">
            <label htmlFor="name">
              Plant Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              className={inputClass("name")}
              value={formData.name || ""}
              ref={nameRef}
              autoComplete="off"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="scientific_name">Scientific Name</label>
            <input
              type="text"
              name="scientific_name"
              id="scientific_name"
              onChange={handleChange}
              className={inputClass("scientific_name")}
              value={formData.scientific_name || ""}
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              className={textareaClass("description")}
              value={formData.description || ""}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              onChange={handleChange}
              className={textareaClass("about")}
              value={formData.about || ""}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="care_instructions">Care Instructions</label>
            <textarea
              name="care_instructions"
              id="care_instructions"
              onChange={handleChange}
              className={textareaClass("care_instructions")}
              value={formData.care_instructions || ""}
              rows={3}
            />
          </div>

          {/* Light and Water schedule */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="light_effeciency_value">
                Light Efficiency Value
              </label>
              <select
                name="light_effeciency_value"
                id="light_effeciency_value"
                onChange={handleChange}
                value={formData.light_effeciency_value || ""}
                className={selectClass("light_effeciency_value")}
              >
                <option value="">Select light efficiency</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group half-width">
              <label htmlFor="light_effeciency_description">
                Light Efficiency Description
              </label>
              <input
                type="text"
                name="light_effeciency_description"
                id="light_effeciency_description"
                onChange={handleChange}
                value={formData.light_effeciency_description || ""}
                className={inputClass("light_effeciency_description")}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="water_schedule_value">Water Schedule Value</label>
              <select
                name="water_schedule_value"
                id="water_schedule_value"
                onChange={handleChange}
                value={formData.water_schedule_value || ""}
                className={selectClass("water_schedule_value")}
              >
                <option value="">Select water schedule</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group half-width">
              <label htmlFor="water_schedule_description">
                Water Schedule Description
              </label>
              <input
                type="text"
                name="water_schedule_description"
                id="water_schedule_description"
                onChange={handleChange}
                value={formData.water_schedule_description || ""}
                className={inputClass("water_schedule_description")}
                autoComplete="off"
              />
            </div>
          </div>

          {/* Tags and Category */}
          <div className="form-group">
            <label>Tags</label>
            <CreatableSelect
              isMulti
              value={tags}
              onChange={(selected) => setTags(selected as TagsOption[])}
              placeholder="Enter tags"
              classNamePrefix="react-select"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <CreatableSelect
              isMulti
              options={categoryOptions}
              value={category}
              onChange={(selected) => setCategory(selected as TagsOption[])}
              placeholder="Enter tags"
              classNamePrefix="react-select"
            />
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="zodiac_sign">Zodiac Sign</label>
              <select
                name="zodiac_sign"
                id="zodiac_sign"
                onChange={handleChange}
                value={formData.zodiac_sign || ""}
                className={selectClass("zodiac_sign")}
              >
                <option value="">Select zodiac sign</option>
                {[
                  "Aries",
                  "Taurus",
                  "Gemini",
                  "Cancer",
                  "Leo",
                  "Virgo",
                  "Libra",
                  "Scorpio",
                  "Sagittarius",
                  "Capricorn",
                  "Aquarius",
                  "Pisces",
                ].map((sign) => (
                  <option key={sign} value={sign}>
                    {sign}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group half-width">
              <label htmlFor="maintenance_type">Maintenance Type</label>
              <select
                name="maintenance_type"
                id="maintenance_type"
                onChange={handleChange}
                value={formData.maintenance_type || ""}
                className={selectClass("maintenance_type")}
              >
                <option value="">Select maintenance type</option>
                {["low", "medium", "high"].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="plant_benefits_summary">
              Plant Benefit Summary
            </label>
            <input
              type="text"
              name="plant_benefits_summary"
              id="plant_benefits_summary"
              onChange={handleChange}
              value={formData.plant_benefits_summary || ""}
              className={inputClass("plant_benefits_summary")}
              autoComplete="off"
            />
          </div>

          <BenefitFields
            benefits={plantBenefits}
            setBenefits={setPlantBenefits}
          />

          <div className="form-group">
            <label htmlFor="plant_care_tips_summary">
              Plant Care Tips Summary
            </label>
            <input
              type="text"
              name="plant_care_tips_summary"
              id="plant_care_tips_summary"
              onChange={handleChange}
              value={formData.plant_care_tips_summary || ""}
              className={inputClass("plant_care_tips_summary")}
              autoComplete="off"
            />
          </div>

          <TipFields tips={plantCareTips} setTips={setPlantCareTips} />
          <FAQFields faqs={faqs} setFaqs={setFaqs} />
   
          <div className="form-group">
            <label htmlFor="name">Meta Title</label>
            <input
              type="text"
              name="meta_title"
              id="meta_title"
              onChange={handleChange}
              className={inputClass("name")}
              value={formData.meta_title || ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Meta Description</label>
            <input
              type="text"
              name="meta_description"
              id="meta_description"
              onChange={handleChange}
              className={inputClass("name")}
              value={formData.meta_description || ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Meta Keywords</label>
            <input
              type="text"
              name="meta_keywords"
              id="meta_keywords"
              onChange={handleChange}
              className={inputClass("name")}
              value={formData.meta_keywords || ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Meta H1</label>
            <input
              type="text"
              name="meta_h1"
              id="meta_h1"
              onChange={handleChange}
              className={inputClass("name")}
              value={formData.meta_h1 || ""}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {editData ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
