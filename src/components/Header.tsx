import { Carrito } from "./Carrito";

export const Header = () => {
  return (
    <header className="py-3 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/Mustang-LOGO.svg"
                alt="imagen-logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito-container">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="./public/img/carrito.png"
                  alt="imagen-carrito"
                />
                <Carrito />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
