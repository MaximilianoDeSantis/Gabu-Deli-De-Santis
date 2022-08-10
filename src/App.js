import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from "./context/CartContext";
import { Checkout } from './components/Checkout';

import { BrowserRouter,Outlet, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>     
      <>  
        <div className="App">
          <NavBar />  
        </div>
        <div>
          <Outlet />  
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/producto/:itemSelected" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </>
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;




/*
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
*/