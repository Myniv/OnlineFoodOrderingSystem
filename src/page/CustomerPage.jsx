import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { CustomerTable } from "../component/customer/CustomerTable";
import { AddCustomerForm } from "../component/customer/CustomerForm";

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
