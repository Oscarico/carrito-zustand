import { useCartStore } from "../stores/store";
import type { Automovil as AutomovilType } from "../types";

type AutomovilProps = {
  automovil: AutomovilType;
};

export const Automovil = ({ automovil }: AutomovilProps) => {
  const { addToCart } = useCartStore();

  const { name, brand, image, year, topSpeed, price } = automovil;

  return (
    <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">
      <div className="col-10 row align-items-center mx-auto">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen automóvil"
        />
        <h3 className="fw-bold text-center">{name}</h3>
        <p>
          <span className="fw-bold">Marca: </span>
          {brand}
        </p>
        <p>
          <span className="fw-bold">Velocidad máxima: </span>
          {topSpeed}
        </p>
        <p>
          <span className="fw-bold">Año de fabricación: </span>
          {year}
        </p>
        <p className="fw-black text-primary fs-3">
          U$S - {price.toLocaleString("es-MX")}
        </p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(automovil)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
