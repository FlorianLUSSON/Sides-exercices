import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./Components/Header/Header.jsx";
import Accueil from "./Components/Accueil/Accueil.jsx"
import Pension from "./Components/Pension/Pension.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/Pension" exact element={<Pension />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
