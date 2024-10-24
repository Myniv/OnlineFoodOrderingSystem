import { useState } from "react";
import { menuList } from "./MenuList";
const AddMenuForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    rating: "",
    isAvailable: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (
      !formData.name ||
      formData.name.length < 2 ||
      formData.name.length > 100
    ) {
      newErrors.name = "Name must be between 2 and 100 characters";
    }
    if (!formData.price || formData.price <= 0.01 || formData.price > 100000) {
      newErrors.price =
        "Price should be a positive number between 0.01 and 100000";
    }
    if (!["Makanan", "Minuman", "Cemilan"].includes(formData.category)) {
      newErrors.category = "Category must be Makanan, Minuman, or Cemilan";
    }
    if (formData.rating === "" || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        name: "",
        price: "",
        category: "",
        rating: "",
        isAvailable: "",
      });
      alert("The new menu has been submitted!!");

      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const unikCategorys = Array.from(
    new Set(menuList.map((bookList) => bookList.category))
  );

  return (
    <>
      <br></br>
      <br></br>
      <h2>Form Menu Input</h2>
      <div className="container border border-dark">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {/* If name error, show <div> */}
            {/* This is the same as the rest*/}
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              value={formData.price}
              onChange={handleChange}
              min="0.01"
              step="0.01"
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {unikCategorys.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className={`form-control ${errors.rating ? "is-invalid" : ""}`}
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
            />
            {errors.rating && (
              <div className="invalid-feedback">{errors.rating}</div>
            )}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="isAvailable"
              name="isAvailable"
              className="form-check-input"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
            <label htmlFor="isAvailable" className="form-check-label">
              Is Available
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Menu
          </button>
        </form>
      </div>
    </>
  );
};

export { AddMenuForm };
