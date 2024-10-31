import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import MenuPage from "./MenuPage";
import CustomerPage from "./CustomerPage";
import OrderPage from "./OrderPage";
import { useState } from "react";
import { customerList } from "../component/customer/CustomerList";
import { menuList } from "../component/menu/MenuList";

function App() {
  const [customer, setCustomer] = useState(customerList);
  const [isEditingCustomer, setIsEditingCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [menu, setMenu] = useState(menuList);
  const [isEditingMenu, setIsEditingMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const [view, setView] = useState("/MenuPage");
  const renderView = () => {
    switch (view) {
      case "/MenuPage":
        return (
          <MenuPage
            menu={menu}
            setMenu={setMenu}
            isEditingMenu={isEditingMenu}
            setIsEditingMenu={setIsEditingMenu}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        );
      case "/CustomerPage":
        return (
          <CustomerPage
            customer={customer}
            setCustomer={setCustomer}
            isEditingCustomer={isEditingCustomer}
            setIsEditingCustomer={setIsEditingCustomer}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
          />
        );
      case "/OrderPage":
        return <OrderPage />;

      default:
        break;
    }
  };
  return (
    <>
      <Header setView={setView} />
      <div className="container">{renderView()}</div>
      <Footer />
    </>
  );
}

export default App;
