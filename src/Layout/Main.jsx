import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import TopNavBar from "../Pages/Shared/NavBar/TopNavBar";



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
           {noHeaderFooter || <TopNavBar></TopNavBar>}
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;