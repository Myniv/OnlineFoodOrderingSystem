import { menuList } from "./MenuList";
const MenuTable = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Menu Table</h2>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rating</th>
            <th scope="col">Is Available</th>
          </tr>
        </thead>
        <tbody>
          {menuList.map((menuList) => (
            <tr scope="row" key={menuList.id}>
              <td key={menuList.name}>{menuList.name}</td>
              <td key={menuList.price}>{menuList.price}</td>
              <td key={menuList.category}>{menuList.category}</td>
              <td key={menuList.rating}>{menuList.rating}</td>
              <td key={menuList.isAvailable}>
                {menuList.isAvailable ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { MenuTable };
