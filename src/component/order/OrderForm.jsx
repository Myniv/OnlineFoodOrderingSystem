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
  const [orderSended, setOrderSended] = useState(false);
  // const [orderTime, setOrderTime] = useState(0);

  //to countdown setOrder for changing orderStatus message, but still bug
  const orderStatus = () => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(setOrderSended(true));
    //   }, 5000);
    // });

    setTimeout(() => {
      return setOrderSended(true);
    }, 5000);
  };
  
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

    const confirmMessage =
      "Are you sure this is the right order? Once have been submitted, you just have a little time to cancel it!!";

    //If there is no error
    if (Object.keys(validationErrors).length === 0) {
      if (confirm(confirmMessage)) {
        //Submit order
        setOrderSubmitted(true);
        orderStatus();
        // getOrderStatus();
        setErrors({});
      }
    } else {
      setErrors(validationErrors);
      setOrderSubmitted(false);
    }
  };

  const totalPrice = formData.menus.reduce((add, menu) => add + menu.price, 0);

  const orderSendedMessage = orderSended ? "Is Ordered" : "Being Pickedup"

  const handleCancelOrder = () => {
    setFormData({
      customerName: "",
      address: "",
      menus: [],
    });

    setOrderSubmitted(false);
  };

  //to filter just the available menu to showup
  const checkAvailableCustomerMenu = menuList.filter(menuList => menuList.isAvailable)
  
  
  return (
    <div>
      <h3>Order Form</h3>
      <div className="container border">
        <form onSubmit={handleSubmit}>
          {/* To select customer */}
          <div className="mb-3">
            <label htmlFor="customer" className="form-label">
              Select Customer
            </label>
            <select
              id="customer"
              className="form-control"
              onChange={handleCustomerChange}
              value={formData.customerName}
              required
            >
              <option value="" disabled>
                Select Customer
              </option>
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
              placeholder="Customer Name"
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
              placeholder="Customer Address"
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
              value={formData.menus}
            >
              <option value="" disabled>
                Select Menu
              </option>
              {checkAvailableCustomerMenu.map((menu) => (
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
                    {orderSubmitted == false && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm float-end"
                        onClick={() => handleRemoveMenu(menu.id)}
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <h5 className="mt-3">Total Price - {totalPrice} IDR</h5>
            </div>
          )}

          {errors.menus && (
            <div className="invalid-feedback d-block">{errors.menus}</div>
          )}

          {orderSubmitted == false && (
            <div>
              <button type="submit" className="btn btn-primary m-3">
                Submit Order
              </button>

              <button
                type="submit"
                onClick={handleCancelOrder}
                className="btn btn-danger right text-right "
              >
                Cancel Order
              </button>
            </div>
          )}
        </form>
      </div>
      {/* To show up the menu and customer that have been selected*/}
      {orderSubmitted && (
        <div className="mt-5">
          <h4>Order Detail</h4>
          <div className="container border">
            <p>
              <strong>Customer Name:</strong> {formData.customerName}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <p>
              <strong>Order Status:</strong> {orderSendedMessage}
            </p>
            <h5>Ordered Menus</h5>
            <ul>
              {formData.menus.map((menu) => (
                <li key={menu.id}>
                  {menu.name} - {menu.category} - {menu.price} IDR
                </li>
              ))}
              <h6 className="mt-2">Total Price - {totalPrice} IDR</h6>
            </ul>
            {orderSended && (
              <button
                type="submit"
                onClick={handleCancelOrder}
                className="btn btn-primary mb-3"
              >
                Re-Order
              </button>
            )}
            {orderSended == false && (
              <button
                type="submit"
                onClick={handleCancelOrder}
                className="btn btn-danger mb-3"
              >
                Cancel Order
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
