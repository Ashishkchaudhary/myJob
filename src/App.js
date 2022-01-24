import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Modules/login/Login";
import Signup from "./Modules/signup/Signup";
import Home from "./Modules/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
