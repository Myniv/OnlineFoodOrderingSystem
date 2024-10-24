import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import OrderForm from "./OrderForm";

function OrderPage() {

  return (
    <>
      <Header />
      <div className="container">
        <OrderForm />
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
