/* eslint-disable react/prop-types */

import { useState } from "react";
import OrderForm from "../component/order/OrderForm";
import OrderDetail from "../component/order/OrderDetail";

function OrderPage({ menuList, customerList }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    menus: [], 
  });

  const [orderDetail, setOrderDetail] = useState({
    customerName: "",
    address: "",
    menus: [],
  });
  return (
    <>
      <OrderForm
        menuList={menuList}
        customerList={customerList}
        formData={formData}
        setFormData={setFormData}
        setOrderPlaced={setOrderPlaced}
      />
      <OrderDetail
        orderDetail={orderDetail}
        setOrderDetail={setOrderDetail}
        orderPlaced={orderPlaced}
      />
    </>
  );
}

export default OrderPage;
