import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./style/materialUI.scss";
import "./style/main.scss";
import EditForm from "./components/form/EditForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
