import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomerTable } from "./CustomerTable";
import { AddCustomerForm } from "./CustomerForm";

function CustomerPage() {

  return (
    <>
      <Header />
      <div className="container">
        <CustomerTable />
        <AddCustomerForm />
      </div>
      <Footer />
    </>
  );
}

export default CustomerPage;
