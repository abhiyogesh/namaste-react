import {  useState, useContext } from "react"; // react hooks
import { LOG_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from  "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { APP_URL } from "../utils/constants";
import {logo} from '../images/food.png';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header Render");
  
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext); // we pass this because there will me many context. it is for reading the context

  //subscribing to the store using a Selector
  // for subsrib use useSelector hook
  const cartItems = useSelector((store)=> store.cart.items);

  //Three use case :
  //1. if there is no array dependenct then useEffect will be called every render.
  //2. if there is a empty array dependency then useEffect will be called after initial render.
  //3. if there is a dependency in the , then useEffect will be called when dependency changes.
  // ,useEffect(() => {});
  return (
    <div className="flex justify-between shadow-md h-[75px]">
      <div className="logo-container w-[100px]">
      {/* <img src= {logo} className="w-56"/> */}
      {/* <img src="../images/food.png" className="w-56"/> */}
      {/* <Link to="/">
        <img src="../images/food.png" className="w-56"/>
        </Link> */}
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        {/* <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li> */}
          <li  className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li  className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li  className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li  className="px-4 font-bold">
          <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
           </li>
          <li  className="px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
             <span>{onlineStatus ? "🟢" : "🔴"}</span>
            </button>
          </li>
          <li  className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; // standard practice to export component
