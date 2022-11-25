import "./App.css";

import ItemListContainer from "./componets/itemsListContainer/ItemListContainer";
import Navbar from "./componets/navBar/Navbar";

function App() {
  return (
    <div className="App">
      <header className=" ">
        <Navbar></Navbar>
      </header>
      <ItemListContainer greeting="Mundo"></ItemListContainer>
    </div>
  );
}

export default App;
