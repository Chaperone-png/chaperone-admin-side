import React, { useState, useRef, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import FAQFields from "./FAQFields";
import { Plant } from "@/types/MasterData";
import "./PlantFormModel.scss";

const defaultFaq = { question: "", answer: "" };

interface TagsOption {
  label: string;
  value: string;
}

const categoryOptions: TagsOption[] = [
  { value: "ceramic-pot", label: "Ceramic Pot" },
  { value: "plastic-pot", label: "Plastic Pot" },
  { value: "railing-planter", label: "Railing Planter" },
  { value: "planter", label: "Planter" },
  { value: "teracotta-pot", label: "Teracotta Pot" }
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
      category: category.map((category) => category.value),
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
              placeholder="Enter Category"
              classNamePrefix="react-select"
            />
          </div>

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
