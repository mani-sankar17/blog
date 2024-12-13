import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   

    return(
        <div className="navbar">
            <div>
            <h1> <span>K</span>isi<span>K</span></h1>
            </div>
            <div className="hamburger-menu hide">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="sections">
                <NavLink className={({ isActive }) => isActive ? "color" : ""} to="/" >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "color" : ""} to="/post">New Post</NavLink>
                <NavLink className={({ isActive }) => isActive ? "color" : ""} to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Navbar;