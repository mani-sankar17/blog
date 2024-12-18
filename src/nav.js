import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div>
            <h1> <span>K</span>isi<span>K</span></h1>
            </div>
            <div className="sections">
                <Link className="color" to="/" >Home</Link>
                <Link className="color" to="/post">New Post</Link>
                <Link className="color" to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;