import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import MenuDetail from "./components/MenuDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/menu/3">MenuDetail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
