import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import MenuDetail from "./components/MenuDetail";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

function App() {
  const [piatti, setPiatti] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setPiatti(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SiteHeader />
        <div className="menu-wrapper">
          <Routes>
            <Route exact path="/" element={<Menu piatti={piatti} />} />
            <Route exact path="/menu" element={<Menu piatti={piatti} />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
