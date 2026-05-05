import { useCartStore } from "../stores/store";

export const Carrito = () => {
  const { cart, deleteFromCart, clearCart, updateQuantity, totalPrice } = useCartStore();

  const total = totalPrice();

  return (
    <div id="carrito-content" className="carrito-content">
      {cart.length === 0 ? (
        <p className="text-center">El carrito esta vacío</p>
      ) : (
        <>
          <table className="w-100 table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ id, image, name, price, quantity }) => (
                <tr key={id}>
                  <td className="align-middle">
                    <img
                      className="img-fluid"
                      src={`img/${image}.jpg`}
                      alt={`Imagen de ${name}`}
                    />
                  </td>
                  <td className="align-middle">{name}</td>
                  <td className="fw-bold align-middle">
                    ${price.toLocaleString("es-MX")}
                  </td>
                  <td className="align-middle">
                    <div className="d-flex align-items-center gap-4">
                      <button onClick={() => updateQuantity(id, -1)} type="button" className="btn btn-dark">
                        -
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => updateQuantity(id, 1)} type="button" className="btn btn-dark">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="align-middle border-top-0">
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => deleteFromCart(id)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-end">
            Total a pagar: <span className="fw-bold">${total.toLocaleString("es-MX")}</span>
          </p>
        </>
      )}
      <button
        onClick={() => clearCart()}
        disabled={cart.length === 0}
        className="btn btn-dark w-100 mt-3 p-2"
      >
        Vaciar carrito
      </button>
    </div>
  );
};
