/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import { customerList } from "./CustomerList";
// import { CustomerTable } from "./CustomerTable";

const AddCustomerForm = ({
  customer,
  setCustomer,
  isEditingCustomer,
  setIsEditingCustomer,
  selectedCustomer,
}) => {
  //Customer data
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phonenumber: "",
  });

  //another way to change ttitle and button text beside using
  const addOrEditTitle = useRef("Form Add Customer");
  const addOrEditButton = useRef("Add Customer");

  //To autofocus on name input
  const focusNameInputCustomer = useRef(null);

  useEffect(() => {
    if (isEditingCustomer && selectedCustomer) {
      setFormData(selectedCustomer);
      addOrEditTitle.current = "Form Edit Customer";
      addOrEditButton.current = "Edit Customer";
    }

    if (focusNameInputCustomer.current) {
      focusNameInputCustomer.current.focus();
    }
  }, [isEditingCustomer, selectedCustomer]);

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

  const onUpdateCustomer = () => {
    const editedCustomer = customer.map((customer) => {
      if (formData.id === customer.id) {
        return {
          ...customer,
          id: formData.id,
          name: formData.name,
          email: formData.email,
          address: formData.address,
          phonenumber: formData.phonenumber,
        };
      } else {
        return customer;
      }
    });

    setCustomer(editedCustomer);
    alert("The Customer has been Editted!!");
  };

  const onAddCustomer = () => {
    const newCustomer = { ...formData, id: customer.length + 1 };
    setCustomer([...customer, newCustomer]);
    alert("The new Customer has been Added!!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    //If no errors, reset data to empty
    if (Object.keys(validationErrors).length === 0) {
      if (isEditingCustomer) {
        onUpdateCustomer();
        setIsEditingCustomer(false);
        onEndEdit();
      } else {
        onAddCustomer();
      }

      //To reset form to empty
      setFormData({
        name: "",
        email: "",
        address: "",
        phonenumber: "",
      });

      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const onCancelEdit = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      address: "",
      phonenumber: "",
    });

    setIsEditingCustomer(false);
    addOrEditButton.current = "Add Customer";
    addOrEditTitle.current = "Form Add Customer";
  };

  const onEndEdit = () => {
    addOrEditButton.current = "Add Customer";
    addOrEditTitle.current = "Form Add Customer";
  };

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
                  required
                  placeholder="Name"
                  ref={focusNameInputCustomer}
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
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="col-md-6">
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
                  placeholder="Phone Number"
                />
                {errors.phonenumber && (
                  <div className="invalid-feedback">{errors.phonenumber}</div>
                )}
              </div>

              <div className="mb-1">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Address"
                />
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-1 right text-right"
          >
            {addOrEditButton.current}
          </button>
          {isEditingCustomer && (
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

export { AddCustomerForm };
