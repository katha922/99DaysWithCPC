

const Navbar = () => {
    return (
        <div className="flex justify-around items-center mx-auto px-20 h-24">
            <h1 className="text-4xl font-bold w-full text-blue-500">Logo</h1>
            <ul className="flex">
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Home</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;