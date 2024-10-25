/* eslint-disable react/prop-types */
// import { customerList } from "./CustomerList";
const CustomerTable = ({customerList}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Customer Table</h2>
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
          {customerList.map((customerList) => (
            <tr scope="row" key={customerList.id}>
              <td key={customerList.name}>{customerList.name}</td>
              <td key={customerList.email}>{customerList.email}</td>
              <td key={customerList.phonenumber}>{customerList.phonenumber}</td>
              <td key={customerList.address}>{customerList.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CustomerTable };
