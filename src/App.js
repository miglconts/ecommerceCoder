import "./App.css";
import ItemListContainer from "./componets/itemsListContainer/ItemListContainer";
import Navbar from "./componets/navBar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import ItemDetailContainer from "./componets/itemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./componets/Cart/CartContainer";
import { getProducts } from "./API/firebase";

function App() {
  getProducts();
  return (
    <div className="bg-blue-100">
      <CartContextProvider value={{ cart: [] }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productID"
              element={<ItemDetailContainer />}
            />
            {/* <Route path="/item/"  element={<ItemDetailContainer greeting="Mundo"></ItemDetailContainer>}/> */}
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="App"></div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
