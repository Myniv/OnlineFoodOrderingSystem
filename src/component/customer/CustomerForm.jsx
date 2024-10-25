import { useState } from "react";

const AddCustomerForm = () => {
  //Customer data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phonenumber: "",
  });

  //To set errors for validation
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

    //email validation like this
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Email must be a valid email format";
    }

    //Phone validation like this
    //Still doesnt work, idk
    const phoneRegex = /^[0-9]{10,15}$/;
    if (
      !formData.phonenumber ||
      (formData.phonenumber && !phoneRegex.test(formData.phonenumber))
    ) {
      newErrors.phonenumber = "Phone number must be between 10 and 15 digits";
    }

    if (!formData.address || formData.address.length > 200) {
      newErrors.address = "Address must not exceed 200 characters";
    }
    return newErrors;
  };

  //To change when user type in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    //If no errors, reset data to empty
    if (Object.keys(validationErrors).length === 0) {
      //To reset form to empty
      setFormData({
        name: "",
        email: "",
        address: "",
        phonenumber: "",
      });

      alert("The new customer has been submitted!!");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <h2>Form Customer Input</h2>
      <div className="container border">
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
              required
            />
            {/* If name error, show <div> */}
            {/* This is the same as the rest*/}
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              className={`form-control ${
                errors.phonenumber ? "is-invalid" : ""
              }`}
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
            {errors.phonenumber && (
              <div className="invalid-feedback">{errors.phonenumber}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Add Customer
          </button>
        </form>
      </div>
    </>
  );
};

export { AddCustomerForm };
