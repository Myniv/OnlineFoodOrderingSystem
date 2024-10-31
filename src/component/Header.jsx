/* eslint-disable react/prop-types */
import { Nav } from "react-bootstrap";

//Import image immediately in html with //img/MynivLogo1.png
const Header = ({setView}) => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark text-white">
      <div className="col-md-3 mb-2 mb-md-0 mx-5">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img
            className="img-fluid"
            src="/img/MynivLogo1.png"
            alt="Myniv"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav nav-pills">
        <li className="nav-item">
          <Nav.Link
            onClick={() => setView('/MenuPage')}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            Menu
          </Nav.Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Promotion
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Nav.Link
            onClick={() => setView('/CustomerPage')}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            Customer
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            onClick={() => setView('/OrderPage')}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <img
              className="img-fluid"
              src="/img/cart.png"
              alt="Cart"
              style={{ width: "25px", height: "25px" }}
            />
          </Nav.Link>
        </li>
      </ul>

      <div className="col-md-3 text-end mx-5">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Register
        </button>
      </div>
    </header>
  );
};

export { Header };
