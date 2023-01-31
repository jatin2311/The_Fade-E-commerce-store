import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import CartScreen from "./screens/CartScreen";
import CollectionScreen from "./screens/CollectionScreen";
import StoreScreen from "./screens/StoreScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/cart/checkout" element={<CheckoutScreen />} />
          <Route path="/store" element={<StoreScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
