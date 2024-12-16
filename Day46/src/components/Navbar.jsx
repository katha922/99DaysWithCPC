import {Link} from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            
        </div>
    );
};

export default Navbar;