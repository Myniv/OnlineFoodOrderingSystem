/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

// import { customerList } from "./CustomerList";
const CustomerTable = ({
  customer,
  setCustomer,
  setIsEditingCustomer,
  setSelectedCustomer,
}) => {
  const [search, setSearch] = useState("");
  const [filteredCustomers, setFilteredCustomer] = useState(customer);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredCustomer(
      customer.filter((customer) => {
        return (
          search ===""||
          customer.name.toLowerCase().includes(search.toLowerCase()) ||
          customer.address.toLowerCase().includes(search.toLowerCase()) ||
          customer.email.toLowerCase().includes(search.toLowerCase()) ||
          customer.phonenumber.toString().includes(search)
        );
      })
    );
  }, [customer, search]);

  const onDeleteCustomer = (id) => {
    setCustomer(customer.filter((customer) => customer.id !== id));
  };

  const onEditingCustomer = (id) => {
    const selectCustomer = customer.find((customer) => customer.id === id);
    setSelectedCustomer(selectCustomer);
    setIsEditingCustomer(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Customer Table</h2>
      </div>

      <div className="d-flex justify-content-between align-items-center form-group">
        <label htmlFor="search" className="form-label mb-3">
          Search
        </label>
        &ensp;
        <input
          id="search"
          type="text"
          onChange={handleSearch}
          className="form-control form-control-sm mb-3"
          placeholder="Search Menu"
        />
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customerList) => (
            <tr scope="row" key={customerList.id}>
              <td key={customerList.name}>{customerList.name}</td>
              <td key={customerList.email}>{customerList.email}</td>
              <td key={customerList.phonenumber}>{customerList.phonenumber}</td>
              <td key={customerList.address}>{customerList.address}</td>
              <td>
                <div className="d-grid gap-2 d-md-flex justify-content-md">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onEditingCustomer(customerList.id)}
                    value={"edit"}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteCustomer(customerList.id)}
                    value={"delete"}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CustomerTable };
