import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MenuTable } from "./MenuTable";
import { AddMenuForm } from "./MenuForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <MenuTable />
        <AddMenuForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
