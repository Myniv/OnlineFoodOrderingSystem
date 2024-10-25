import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import OrderForm from "../component/order/OrderForm";

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
