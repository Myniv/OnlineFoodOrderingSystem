import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MenuTable } from "./MenuTable";
import { AddMenuForm } from "./MenuForm";
import { CustomerTable } from "./CustomerTable";
import { AddCustomerForm } from "./CustomerForm";
import OrderForm from "./OrderForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        {/* <MenuTable /> */}
        {/* <AddMenuForm /> */}
        {/* <CustomerTable /> */}
        {/* <AddCustomerForm /> */}
        <OrderForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
