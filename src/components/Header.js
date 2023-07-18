import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from  "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");
  
  const onlineStatus = useOnlineStatus();

  //Three use case :
  //1. if there is no array dependenct then useEffect will be called every render.
  //2. if there is a empty array dependency then useEffect will be called after initial render.
  //3. if there is a dependency in the , then useEffect will be called when dependency changes.
  useEffect(() => {});
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
        </ul>
      </div>
    </div>
  );
};

export default Header; // standard practice to export component
