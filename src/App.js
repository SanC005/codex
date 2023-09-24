import "./App.css";
// import Feed from './component/feed/feed';
import Home from "./pages/HomePage/home";
import Login from "./pages/LoginPage/login";
import Signup from "./pages/SignupPage/signup";
import User from "./pages/UserPage/user";
import { Route, Routes, Navigate } from "react-router-dom";
import CommonLayout from "./component/commonLayout/commonLayout";
import Cart from "./pages/UserPage/cart";
import SearchResults from "./pages/Search/search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
      <Route index element={<Home />} />
        {/* <Route path="home" element={<Home />} /> */}
        <Route path="user" element={<User />} />
        <Route path="cart" element={<Cart />} />
        <Route path='/search/:searchTerm' element={<SearchResults />} />
        {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/user" element={<User />} /> */}
    </Routes>
  );
}

export default App;

function Test() {
  return <div>App</div>;
}
