import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Home page intro</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;