import { Automovil } from "./components/Automovil.js";
import { Header } from "./components/Header.js";
import { db } from "./data/db.js";

function App() {
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5">
          {db.map((automovil) => (
            <Automovil key={automovil.id} automovil={automovil} />
          ))}
        </div>
      </main>

      <footer className="mt-5 py-5">
        <div className="container-xl">
          <p className="text-center fs-6 mt-4 m-md-0 text-muted">
            r 2026 Super Carrito, Inc.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
