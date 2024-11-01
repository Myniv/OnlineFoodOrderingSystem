/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const MenuTable = ({ menu, setMenu, setIsEditingMenu, setSelectedMenu }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filteredMenus, setFilteredMenu] = useState(menu);

  const categorys = Array.from(new Set(menu.map((menu) => menu.category)));

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredMenu(
      menu.filter((menu) => {
        return (
          (!category || category === menu.category) &&
          (search === "" ||
            menu.name.toLowerCase().includes(search.toLowerCase()) ||
            menu.price.toString().includes(search) ||
            menu.rating.toString().includes(search))
          //If u want to add more filter category, add here with &&
        );
      })
    );
    //dont forget this below too
  }, [category, search, menu]);

  const onDeleteMenu = (id) => {
    const confirmMessage = "Are you sure you want to delete this menu?";
    if (confirm(confirmMessage)) {
      setMenu(menu.filter((b) => b.id !== id));
    }
  };

  const onEditingMenu = (id) => {
    const selectMenu = menu.find((menu) => menu.id === id);
    setSelectedMenu(selectMenu);
    setIsEditingMenu(true);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Menu Table</h2>
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
        &ensp;
        <select
          className="form-select form-select-sm mb-3"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" defaultValue="">
            Select Category
          </option>
          {categorys.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rating</th>
            <th scope="col">Is Available</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenus.map((menuList) => (
            <tr scope="row" key={menuList.id}>
              <td key={menuList.name}>{menuList.name}</td>
              <td key={menuList.price}>{menuList.price}</td>
              <td key={menuList.category}>{menuList.category}</td>
              <td key={menuList.rating}>{menuList.rating}</td>
              <td key={menuList.isAvailable}>
                {menuList.isAvailable ? "Yes" : "No"}
              </td>
              <td>
                <div className="d-grid gap-2 d-md-flex justify-content-md">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onEditingMenu(menuList.id)}
                    value={"edit"}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteMenu(menuList.id)}
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

export { MenuTable };
