import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/products" element={<Products />} /> */}
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        {/* {window.location.pathname !== ('/products' && '/register' && '/login') && <Products />} */}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
