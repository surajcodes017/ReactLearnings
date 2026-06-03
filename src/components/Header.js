import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);


//   subscribing to the store using  useSelector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-8 py-3 bg-pink-100 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div>
        <img className="w-28 rounded-lg" src={LOGO_URL} alt="logo" />
      </div>

      {/* Nav Items */}
      <div className="flex items-center">
        <ul className="flex items-center gap-8 text-lg font-medium text-gray-700">
          <li className="hover:text-pink-600 transition duration-200">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>

          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/About">About Us</Link>
          </li>

          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/Contact">Contact Us</Link>
          </li>

          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/Grocery">Grocery</Link>
          </li>

          {/* <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
                <Link to="/Cart">🛒 Cart</Link>
            </li> */}
          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/Cart" className="flex items-center gap-2">
              <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
                {cartItems.length}
              </span>

              <span>Cart🛒</span>
            </Link>
          </li>

          {/* Login Button */}
          <button
            className="bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600 transition duration-300 shadow-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="hover:text-pink-600 hover:scale-105 transition duration-200">
            <Link to="/Grocery">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
