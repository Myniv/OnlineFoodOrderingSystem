import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
// import { MenuTable } from "../component/menu/MenuTable";
import { AddMenuForm } from "../component/menu/MenuForm";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* <MenuTable /> */}
        <AddMenuForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
