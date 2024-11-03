/* eslint-disable react/prop-types */

import OrderForm from "../component/order/OrderForm";

function OrderPage({menuList, customerList}) {
  return (
    <>
        <OrderForm menuList={menuList} customerList={customerList}/>
    </>
  );
}

export default OrderPage;
