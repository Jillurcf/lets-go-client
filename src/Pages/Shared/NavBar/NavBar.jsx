import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";
import logo from "../../../assets/Images/a12logo.png";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import { useEffect, useState } from "react";


const NavBar = () => {
 const [stickyClass, setStickyClass] = useState('relative');
  const { user, logOut } = useAuth();
  const [cart] = useCart()
  useEffect(()=> {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }

  },[]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative')
    }
  }

  const navLinks = (
    <>
      <li className="pr-4">
        <NavLink 
          to="/"
          className={({ isActive, isPending, }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-purple-300 text-purple-950 font-bold"
              : "text-purple-700 font-bold"
          }
        >
          <div className="">
            Home
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allContest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-purple-300 text-purple-950 font-bold"
              : "text-purple-700 font-bold"
          }
        >
          All Contest
        </NavLink>
      </li>
     <Link>
      <li>
        { user ? 
          <NavLink
          to="dashboard/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-purple-950 font-bold"
              : "text-purple-700 font-bold"
          }
        >
          {/* My Registration */}
          <button className="">
        <div className="flex gap-1"> 
          <FaCartShopping className="text-xl"></FaCartShopping>
            <div className="badge badge-secondary">+{cart.length}</div>
          </div>
          </button>
        </NavLink>
         : <Link t0="/singin">
        <NavLink
        to="/signin"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-purple-300 text-purple-950 font-bold"
            : "text-purple-700 font-bold"
        }
      >
        {/* My Registration */}
        <div className="">
      <div className="flex gap-1"> 
        <FaCartShopping className="text-xl"></FaCartShopping>
          <div className="badge badge-secondary">+{cart.length}</div>
        </div>
        </div>
      </NavLink>
      </Link>
        }
      </li>
     </Link>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
     <div className={`w-full flex justify-center ${stickyClass}`}>
    <div className="navbar h-24 fixed max-w-screen-xl z-50 bg-purple-50 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 "
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-[15%] pl-4 hidden md:block" src={logo} alt="" />
        <Link to="/" className="text-xl overflow-visible">
          <motion.h1
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-purple-950 md:text-4xl text-lg font-bold"
          >
            LETS GO
          </motion.h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end px-4">
        {user?.email ? (
          <div className="dropdown z-30 dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <h1 className="text-center text-blue-600 font-bold">User Profile</h1> */}

              <li>
                <button className="btn btn-sm btn-ghost">
                  {user.displayName}
                </button>
              </li>
              {/* <li>
                    <button className="btn btn-sm btn-ghost">
                    {user.email}
                    </button>
                  </li> */}
              <li>
                <button className="btn btn-sm btn-ghost">
                  <Link to="/dashboard"> Dashboard</Link>
                </button>
              </li>

              <li>
                <button
                  className="btn btn-sm btn-ghost mt-4"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">
            <button className="btn bg-purple-950 border-none rounded-7xl text-purple-100">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default NavBar;
