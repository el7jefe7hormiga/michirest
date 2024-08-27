/* eslint-disable react/prop-types */
function Mesa(props) {
  const { mesa, ubicacion, pax, imagen, estado, observaciones } = props;

  const ocupada = "bg-red-400 text-red-900";
  const reservada = "bg-gray-300 text-gray-700";
  const disponible = "bg-green-400 text-green-900";
  const claseEstado =
    estado === "Reservada"
      ? reservada
      : estado === "Ocupada"
      ? ocupada
      : disponible;
  const accion =
    estado === "Ocupada"
      ? " Ver comanda"
      : estado === "Reservada"
      ? "Editar reservación"
      : "Abrir comanda";

  return (
    <article
      className="m-1 p-3 rounded-lg border shadow-md bg-gray-800 border-gray-700 
                          hover:scale-105 hover:bg-gray-700 hover:border-gray-500 
                          transition flex flex-col w-80"
    >
      <picture className="flex justify-center p-1">
        <img src={imagen} alt={imagen} width="64px" className="rounded-md" />
      </picture>

      <header className="p-1">
        <h2 className="my-2 text-2xl font-bold tracking-tight text-white">
          Mesa #{mesa}
        </h2>
        <pre className="text-xs text-gray-400">
          {ubicacion} / para {pax} personas
        </pre>
        <p className="mb-4 font-light text-gray-400">{observaciones}</p>

        <div className={`grid grid-cols-6 text-xs font-semibold`}>
          <span
            className={`col-span-4 content-center text-center m-1 py-1 
              hover:bg-gray-400 hover:text-gray-700 transition
              bg-gray-200 text-gray-700
              cursor-pointer rounded`}
          >
            {accion.toUpperCase()}
          </span>
          <span
            className={`col-span-2 content-center text-center m-1 ${claseEstado}`}
          >
            {estado}
          </span>
        </div>
      </header>
    </article>
  );
}

export default Mesa;
