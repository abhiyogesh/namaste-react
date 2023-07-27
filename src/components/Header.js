import {  useState, useContext } from "react"; // react hooks
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from  "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header Render");
  
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext); // we pass this because there will me many context. it is for reading the context

  //Three use case :
  //1. if there is no array dependenct then useEffect will be called every render.
  //2. if there is a empty array dependency then useEffect will be called after initial render.
  //3. if there is a dependency in the , then useEffect will be called when dependency changes.
  // ,useEffect(() => {});
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <Link to="/">
          <img className="w-56" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li  className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li  className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li  className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li  className="px-4">Cart</li>
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
            </button>
          </li>
          <li  className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; // standard practice to export component
