import './App.css';
import Feed from './component/feed/feed';
import Home from './pages/HomePage/home';
import Login from './pages/LoginPage/login';
function App() {
  return (
    <div className="bg-white-600">
      <Home/>
      <Feed/>
      <Login/>
      {/* <Feed/> */}
    </div>
  );
}

export default App;

