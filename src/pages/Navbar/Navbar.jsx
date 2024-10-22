import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TbBuildingEstate } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    console.log(user)
    const lists = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {user && <>
            <li><NavLink to={'/profile'}>User Profile</NavLink></li>
            <li><NavLink to={'/profileUpdate'}>Update Profile</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li></>
        }
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-6 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 lg:z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-10">
                    {lists}
                </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost  lg:text-3xl font-bold text-[#FF5A3D] pl-0 md: pl-4 lg:pl-4">
                    <TbBuildingEstate className="hidden lg:flex"></TbBuildingEstate>
                    Radiant Residences
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div className="dropdown dropdown-end">
                        <div className="tooltip" data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <Link to={'/profile'}>
                                    <img referrerpolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={signOutUser} className="btn text-white lg:ml-4 bg-[#FF5A3D]">Log Out</button>
                </> :
                <div>
                    <Link to={'/login'} className="btn text-white ml-4 bg-[#FF5A3D]">Log In</Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;