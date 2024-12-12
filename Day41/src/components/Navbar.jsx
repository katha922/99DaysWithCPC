
import {Link} from "react-scroll"

const Navbar = () => {
    
    const navItems=[
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Services",
        },
        {
            id:4,
            text: "Contact",
        }
    ]
    return (
        <nav className="justify-around flex items-center shadow-md h-16">
            <div>
                <h1 className="font-serif font-bold text-xl">KATHA</h1>
            </div>
            <div>
                <ul className="flex gap-8 font-serif cursor-pointer">
                    {/* <a><li className="hover:text-blue-800">Home</li></a>
                    <a><li className="hover:text-blue-800">About Me</li></a>
                    <a><li className="hover:text-blue-800">Services</li></a>
                    <a><li className="hover:text-blue-800">My Work</li></a> */}

                    {navItems.map(({id,text})=>(
                        <li className="hover:text-blue-800" key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">{text}</Link>
                            </li>
                    ))}
                </ul>
            </div>
            <div>
                <button className="font-serif bg-blue-600 p-2 rounded-xl text-white">Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;