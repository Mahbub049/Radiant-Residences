import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Profile = () => {
    const {user} = useContext(AuthContext);
    const {displayName, photoURL, email} = user;
    return (
        <HelmetProvider>
            <Helmet>
                <title>Profile || Radiant Residences</title>
            </Helmet>
                    <div className="container mx-auto">
                        <Navbar></Navbar>
                        <div className="p-10 flex flex-col items-center mt-16">
                            <h2 className="text-4xl font-bold mb-12 underline text-[#FF5A3D]">User Information</h2>
                            <img className="rounded-full w-36 md:w-40 lg:w-48 mb-4" src={photoURL} alt="" />
                            <h2 className="text-2xl text-center md:text-3xl lg:text-3xl font-bold mb-2">{displayName}</h2>
                            <h4 className="text-lg md:text-xl lg:text-xl font-semibold mb-6">{email}</h4>
                            <Link className="btn text-white lg:ml-4 bg-[#FF5A3D]" to={'/profileUpdate'}>Update Profile</Link>
                        </div>
                        <Footer></Footer>
                    </div>
        </HelmetProvider>
    );
};

export default Profile;