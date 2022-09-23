import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const greeting = "Bienvenido";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
