import { Routes, Route } from "react-router-dom";

// page components
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";

// css
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInUp />} />
      </Routes>
    </>
  );
}

export default App;
