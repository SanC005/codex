import './App.css';
import Feed from './component/feed/feed';
import Home from './pages/HomePage/home';
import Login from './pages/LoginPage/login';
import Signup from './pages/SignupPage/signup';
import { Route, Routes } from "react-router-dom"

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={  <Login/>} />
      <Route path="/signup" element={   <Signup/>} />
    </Routes>
  
  );
}

export default App;

