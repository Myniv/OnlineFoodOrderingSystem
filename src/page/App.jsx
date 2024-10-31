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

  const [menu, setMenu] = useState(menuList);
  

  const [view, setView] = useState("/MenuPage");
  const renderView = () => {
    switch (view) {
      case "/MenuPage":
        return (
          <MenuPage
            menu={menu}
            setMenu={setMenu}
          />
        );
      case "/CustomerPage":
        return (
          <CustomerPage
            customer={customer}
            setCustomer={setCustomer}
          />
        );
      case "/OrderPage":
        return <OrderPage menuList={menu} customerList={customer}/>;

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
