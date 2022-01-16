import { Routes, Route } from "react-router-dom";

// components
import HomePage from "../src/pages/homepage/homepage.component";

// css
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
