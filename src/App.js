import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const greeting = "Bienvenido";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={ItemListContainer} />
          <Route path={"/Nike"} element={<nike />} />
          <Route path={"/Adidas"} element={<adidas />} />
          <Route path={"/NikeDetail"} element={ItemDetailContainer} />
          <Route path={"/AdidasDetail"} element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>
      <Header />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
