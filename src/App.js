import { Routes, Route } from "react-router-dom";

// page components
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";

// css
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
