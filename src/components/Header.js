
import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login")
    const onlineStatus= useOnlineStatus();
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus? "✅":"❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/Cart">cart</Link>
                    </li>
                    <button className="login-btn"
                    onClick={()=>{
                        btnNameReact=== "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;