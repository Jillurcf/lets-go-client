import {
 
  FaHome,
  FaList,
 
  FaTrophy,
  FaUsers,
 
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value form data base
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className=" w-64 min-h-screen bg-purple-400">
        <ul className="menu p-4">
          {/* {
                isAdmin ? <>
                   <li>                  
                    <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                    Add Items
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                 Manage Bookins
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/users">
                   <FaUsers></FaUsers>
                  All users
                    </NavLink>
                </li>
                </> 
                : 
                <>
                   
                <li>                  
                    <NavLink to="/dashboard/history">
                   <FaCalendar></FaCalendar>
                 Not History
                    </NavLink>
                </li> */}

          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userWinning">
              <FaTrophy></FaTrophy>
             My winning Contest Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaList></FaList>
              My Participated Contest, cart ({cart.length})
            </NavLink>
          </li>
          <div className="divider">OR</div>
          <li>
            <NavLink to="/dashboard/userProfile">
              <FaUsers></FaUsers>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          {/* <li>                  
                    <NavLink to="/dashboard/review">
                   <FaAd></FaAd>
                  Ad a Review
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                  Real Payment History
                    </NavLink>
                </li>
                </>
             }
                {/* Shared navLink */}
          {/* <div className="divider">OR</div>
                <li>                  
                    <NavLink to="/">
                    <FaHome></FaHome>
                  Home
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                 Menu
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/contact">
                 <FaEnvelope></FaEnvelope>
                 Contact
                    </NavLink>
                </li> */}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
