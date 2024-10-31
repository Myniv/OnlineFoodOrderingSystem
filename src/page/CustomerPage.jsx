
import { AddCustomerForm } from "../component/customer/CustomerForm";
import { useState } from "react";
import { customerList } from "../component/customer/CustomerList";
import { CustomerTable } from "../component/customer/CustomerTable";

function CustomerPage() {
  const [customer, setCustomer] = useState(customerList);
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
