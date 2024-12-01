

const Navbar = (props) => {
    return (
        <div className="nav">
            <div className="logo">{props.logoText}</div>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;