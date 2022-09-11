import './App.css';
import {Routes , Route} from "react-router-dom" ;
import Login from './login/Login';
// import Home from './home/Home';
import Home1 from './home/Home1'
import Cart from './cart/Cart';
import Details from './details/Details';


function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        {/* <Route path="home" element={<Home/>}></Route> */}
        <Route path="home1"  element={<Home1/>}></Route>
        <Route path='cart'  element={<Cart/>}></Route>
        <Route path="detail/:id" element={<Details/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
