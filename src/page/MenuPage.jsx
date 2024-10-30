import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
// import { MenuTable } from "../component/menu/MenuTable";
import { AddMenuForm } from "../component/menu/MenuForm";
import { menuList } from "../component/menu/MenuList";
import { useState } from "react";
import { MenuTable } from "../component/menu/MenuTable";

function MenuPage() {
  const [menu, setMenu] = useState(menuList);
  const [isEditingMenu, setIsEditingMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  return (
    <>
      <Header />
      <div className="container">
        <MenuTable
          menu={menu}
          setMenu={setMenu}
          setIsEditingMenu={setIsEditingMenu}
          setSelectedMenu={setSelectedMenu}
        />
        {/* <AddMenuForm
          menu={menu}
          setMenu={setMenu}
          isEditingMenu={isEditingMenu}
          setIsEditingMenu={setIsEditingMenu}
          selectedMenu={selectedMenu}
        /> */}
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
