import mynivLogo from "./img/MynivLogo1.png";
import cart from "./img/cart.png";
const Header = () => {
  return (
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-light">
        <div className="col-md-3 mb-2 mb-md-0 mx-5">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              className="img-fluid"
              src={mynivLogo}
              alt="Myniv"
              style={{ width: "50px", height: "50px" }}
            />{" "}
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Promotion
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              <img
                className="img-fluid"
                src={cart}
                alt="Cart"
                style={{ width: "25px", height: "25px" }}
              />
            </a>
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
