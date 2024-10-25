import { useState } from "react";
import { customerList } from "../customer/CustomerList";
import { menuList } from "../menu/MenuList";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    menus: [], //to show the menu after selected
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  //To select customer
  const handleCustomerChange = (e) => {
    const selectedCustomer = customerList.find(
      (customer) => customer.id === parseInt(e.target.value)
    );
    if (selectedCustomer) {
      setFormData({
        ...formData,
        customerName: selectedCustomer.name,
        address: selectedCustomer.address,
      });
    }
  };

  //To select list of menu
  const handleMenuChange = (e) => {
    const selectedMenu = menuList.find(
      (menu) => menu.id === parseInt(e.target.value)
    );
    if (selectedMenu && selectedMenu.isAvailable) {
      setFormData({
        ...formData,
        // Add selected menu to the menus[] so it can be showed up
        menus: [...formData.menus, selectedMenu],
      });
    }
  };

  // Remove a menu from the selected list
  const handleRemoveMenu = (menuId) => {
    setFormData({
      ...formData,
      menus: formData.menus.filter((menu) => menu.id !== menuId),
    });
  };

  //To check error
  const validateForm = () => {
    const newErrors = {};
    if (
      !formData.customerName ||
      formData.customerName.length < 2 ||
      formData.customerName.length > 100
    ) {
      newErrors.customerName = "Please select customer!";
    }

    if (formData.menus.length === 0) {
      newErrors.menus = "Please select minimal one menu item";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    //If there is no error
    if (Object.keys(validationErrors).length === 0) {
      //Submit order
      setOrderSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setOrderSubmitted(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Order Form</h3>

        {/* To select customer */}
        <div className="mb-3">
          <label htmlFor="customer" className="form-label">
            Select Customer
          </label>
          <select
            id="customer"
            className="form-control"
            onChange={handleCustomerChange}
            required
          >
            <option value="">-- Select Customer --</option>
            {customerList.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* If the customer have been selected, this field auto fill in */}
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className={`form-control ${
              errors.customerName ? "is-invalid" : ""
            }`}
            value={formData.customerName}
            readOnly
          />
          {errors.customerName && (
            <div className="invalid-feedback">{errors.customerName}</div>
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
            readOnly
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>

        {/* To select menuu */}
        <div className="mb-3">
          <label htmlFor="menu" className="form-label">
            Select Menu
          </label>
          <select
            id="menu"
            className="form-control"
            onChange={handleMenuChange}
          >
            <option value="">-- Select Menu --</option>
            {menuList.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {menu.name}
              </option>
            ))}
          </select>
        </div>

        {/* If the menu have been selected, it displayed it and  have button to remove it*/}
        {formData.menus.length > 0 && (
          <div>
            <h5>Selected Menus</h5>
            <ul className="list-group">
              {formData.menus.map((menu) => (
                <li key={menu.id} className="list-group-item">
                  {menu.name} - {menu.category} - {menu.price} IDR
                  <button
                    type="button"
                    className="btn btn-danger btn-sm float-end"
                    onClick={() => handleRemoveMenu(menu.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {errors.menus && (
          <div className="invalid-feedback d-block">{errors.menus}</div>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Submit Order
        </button>
      </form>

      {/* To show up the menu and customer that have been selected*/}
      {orderSubmitted && (
        <div className="mt-4">
          <h4>Order Summary</h4>
          <p>
            <strong>Customer Name:</strong> {formData.customerName}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <h5>Ordered Menus</h5>
          <ul>
            {formData.menus.map((menu) => (
              <li key={menu.id}>
                {menu.name} - {menu.category} - {menu.price} IDR
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
