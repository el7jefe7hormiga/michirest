import useFetch from "react-fetch-hook";
import Mesa from "./components/Mesa.jsx";

function App() {
  const { isLoading, error, data } = useFetch("http://192.168.1.87:1234/mesas");
  if (isLoading) return "Cargando..";
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }
  return (
    <>
      <ul className="flex flex-wrap">
        {data?.map((mesa) => (
          <li key={mesa.id}>
            <Mesa {...mesa}></Mesa>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
