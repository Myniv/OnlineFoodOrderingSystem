/* eslint-disable react/prop-types */

import { useState } from "react";
import { AddCustomerForm } from "../component/customer/CustomerForm";

import { CustomerTable } from "../component/customer/CustomerTable";

function CustomerPage({customer, setCustomer}) {

  const [isEditingCustomer, setIsEditingCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  return (
    <>
      <div className="container">
        <CustomerTable
          customer={customer}
          setCustomer={setCustomer}
          setIsEditingCustomer={setIsEditingCustomer}
          setSelectedCustomer={setSelectedCustomer}
        />
        <AddCustomerForm
          customer={customer}
          setCustomer={setCustomer}
          isEditingCustomer={isEditingCustomer}
          setIsEditingCustomer={setIsEditingCustomer}
          selectedCustomer={selectedCustomer}
        />
      </div>
    </>
  );
}

export default CustomerPage;
