import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import MenuPage from "./MenuPage";
import CustomerPage from "./CustomerPage";
import OrderPage from "./OrderPage";
import { useState } from "react";

function App() {
  const [view, setView] = useState("/MenuPage")
  const renderView = () => {
    switch (view) {
      case "/MenuPage":
        return <MenuPage/>
      case "/CustomerPage":
        return <CustomerPage/>
      case "/OrderPage":
        return <OrderPage/>
    
      default:
        break;
    }
  }
  return (
    <>
      <Header setView={setView}/>
      <div className="container">
          {renderView()}
      </div>
      <Footer />
    </>
  );
}

export default App;
