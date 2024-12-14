import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;