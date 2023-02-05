import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import StoreScreen from "./screens/StoreScreen";
import CategoryView from "./screens/CategoryView";
import ProductViewScreen from "./screens/ProductViewScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/cart" element={<CartScreen />} />
          <Route path="/store" element={<StoreScreen />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="/category/product" element={<ProductViewScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
