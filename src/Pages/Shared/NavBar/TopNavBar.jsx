import { Link} from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const TopNavBar = () => {
  const navLinks = <>
   <li><Link className="text-purple-300 font-bold hover:bg-purple-950">Deep Dive</Link></li>
   <li><Link className="text-purple-300 font-bold hover:bg-purple-950">News & Insights </Link></li>
   <li><Link className="text-purple-300 font-bold hover:bg-purple-950">Gallery  </Link></li>

  </>
    return (
        <div className="h-10 navbar bg-purple-700">
        <div className="navbar-start">
          <div className="dropdown text-purple-300 font-bold">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow z-30 bg-orange-200 rounded-box w-52">
              
             {navLinks}
            </ul>
          </div>
          <div className="btn btn-ghost text-xl lg:flex hidden">
            <h1 className="text-sm text-purple-300 font-bold text-start">01643989705</h1>
            <p className="text-sm text-purple-300 font-bold">jrtushar@gmail.com</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end text-purple-300 gap-4 px-4">
         <FaFacebook></FaFacebook>
         <FaYoutube></FaYoutube>
         <FaTwitter></FaTwitter>
         <FaLinkedinIn></FaLinkedinIn>
          
        </div>
      </div>
    );
};


export default TopNavBar;