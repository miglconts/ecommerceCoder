import "./App.css";
import ItemListContainer from "./componets/itemsListContainer/ItemListContainer";
import Navbar from "./componets/navBar/Navbar";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
    <Routes>
      <Route path="/"  element={<ItemListContainer greeting="Mundo"></ItemListContainer>}/>
    </Routes>
    <div className="App">
    </div>
    </BrowserRouter>
  );
}

export default App;
