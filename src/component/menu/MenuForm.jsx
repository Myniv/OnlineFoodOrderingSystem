/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import { menuList } from "./MenuList";
const AddMenuForm = ({
  menu,
  setMenu,
  isEditingMenu,
  setIsEditingMenu,
  selectedMenu,
}) => {
  //Menu Data
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    rating: "",
    isAvailable: "",
  });

  //another way to change title and button text
  const addOrEditTitle = useRef("Form Add menu");
  const addOrEditButton = useRef("Add menu");

  //To make autofocus on name input
  const focusNameInputMenu = useRef(null);

  useEffect(() => {
    if (isEditingMenu && selectedMenu) {
      setFormData(selectedMenu);
      addOrEditTitle.current = "Form Edit menu";
      addOrEditButton.current = "Edit menu";
    }
    if(focusNameInputMenu.current){
      focusNameInputMenu.current.focus();
    }
  }, [isEditingMenu, selectedMenu]);
  //set error validation
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

  //To change when user type in
  const handleChange = (e) => {
    // the type checked is for when the menu available, it can be choose
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    //If no errors from validation, submit and reset form to empty
    if (Object.keys(validationErrors).length === 0) {
      if (isEditingMenu) {
        onUpdateMenu();
        setIsEditingMenu(false);
        onEndEdit();
      } else {
        onAddMenu();
      }
      //To reset form to empty after submitted
      setFormData({
        name: "",
        price: "",
        category: "",
        rating: "",
        isAvailable: "",
      });

      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const onUpdateMenu = () => {
    const editedMenu = menu.map((menu) => {
      if (menu.id === formData.id) {
        return {
          ...menu,
          id: formData.id,
          name: formData.name,
          price: formData.price,
          category: formData.category,
          rating: formData.rating,
          isAvailable: formData.isAvailable,
        };
      } else {
        return menu;
      }
    });
    setMenu(editedMenu);

    alert("The menu has been Editted!!");
  };

  const onAddMenu = () => {
    //To make new id from previous data
    const newMenu = { ...formData, id: menu.length + 1 };
    //to the menu table (from table list (menu)), Add newMenu array (from form) with id ((new menu))
    setMenu([...menu, newMenu]);
    alert("The new menu has been Added!!");
  };

  const onCancelEdit = () => {
    setFormData({
      id: "",
      name: "",
      price: "",
      category: "",
      rating: "",
      isAvailable: "",
    });

    setIsEditingMenu(false);
    addOrEditButton.current = "Add menu";
    addOrEditTitle.current = "Form Add menu";
  };

  const onEndEdit = () => {
    addOrEditButton.current = "Add menu";
    addOrEditTitle.current = "Form Add menu";
  };

  //To make category from menulist no duplicate
  const unikCategorys = Array.from(new Set(menu.map((menu) => menu.category)));

  return (
    <>
      <br></br>
      <br></br>
      <h2>{addOrEditTitle.current}</h2>
      <div className="container border">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col-md-6">
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
                  placeholder="Name"
                  ref={focusNameInputMenu}
                />
                {/* If name error, show <div> */}
                {/* This is the same as the rest*/}
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
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
            </div>

            <div className="col-md-6">
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
                  placeholder="Price"
                />
                {errors.price && (
                  <div className="invalid-feedback">{errors.price}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  className={`form-control ${
                    errors.rating ? "is-invalid" : ""
                  }`}
                  value={formData.rating}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="Rating"
                />
                {errors.rating && (
                  <div className="invalid-feedback">{errors.rating}</div>
                )}
              </div>
            </div>
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

          <button
            type="submit"
            className="btn btn-primary m-3 right text-right"
            // onClick={onEndEdit}
          >
            {addOrEditButton.current}
          </button>
          {isEditingMenu && (
            <button
              type="submit"
              onClick={onCancelEdit}
              className="btn btn-danger right text-right"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export { AddMenuForm };
