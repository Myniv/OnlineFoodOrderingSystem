/* eslint-disable react/prop-types */

import { useState } from "react";
import { AddMenuForm } from "../component/menu/MenuForm";
import { MenuTable } from "../component/menu/MenuTable";

function MenuPage({ menu, setMenu }) {
  const [isEditingMenu, setIsEditingMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <>
      <div className="container">
        <MenuTable
          menu={menu}
          setMenu={setMenu}
          setIsEditingMenu={setIsEditingMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <AddMenuForm
          menu={menu}
          setMenu={setMenu}
          isEditingMenu={isEditingMenu}
          setIsEditingMenu={setIsEditingMenu}
          selectedMenu={selectedMenu}
        />
      </div>
    </>
  );
}

export default MenuPage;
