

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-blue-900 text-white p-4 px-8 cursor-pointer">
            <div>
                <h1 className="font-bold">YTask</h1>
            </div>
            <div>
                <ul className="flex gap-10">
                    <li><a>Home</a></li>
                    <li><a>Your Task</a></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;