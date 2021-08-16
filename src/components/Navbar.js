import { Link } from "react-router-dom";

function Navbar() {
    return <div className='navbar'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/shop' className='link'>Shop</Link>
    </div>
}

export default Navbar;