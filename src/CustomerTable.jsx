import { customerList } from "./CustomerList";
const CustomerTable = () => {
  return (
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
  );
};

export {CustomerTable};