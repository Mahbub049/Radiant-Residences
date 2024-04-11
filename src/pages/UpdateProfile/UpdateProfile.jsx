import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from './../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {updateUserInfo, user, setUser} = useContext(AuthContext);
    const [newName, setNewName] = useState(user.displayName);
    const [newImage, setNewImage] = useState(user.photoURL);
    const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
                updateUserInfo(name, photoURL)
                .then(()=>{
                    setUser({
                        displayName: name,
                        photoURL: photoURL,
                        email: user.email
                    })
                    toast.success("Successfully Updated!");
                })
                .catch(()=>{   
                    toast.error("Something went wrong!");
                })
    }
    return (
        <div className="container mx-auto">
                <HelmetProvider>
                <Helmet>
                    <title>Update Profile || Radiant Residences</title>
                </Helmet>
                <ToastContainer />
                <div className='container mx-auto'>
                <Navbar></Navbar>
                <div>
                    <div className="hero bg-base-200 mt-16">
                        <div className="hero-content flex-col w-[800px] h-[600px]">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold mb-6">Update Your Profile</h1>
                            </div>
                            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                                    <div className="form-control mb-3">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="Name" placeholder="Your Name" value={newName} className="input input-bordered" {...register("name", { required: true })} onChange={(e) => setNewName(e.target.value)}/>
                                        {errors.name && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    </div>
                                    <div className="form-control mb-3">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="photourl" placeholder="Photo URL" value={newImage} className="input input-bordered" {...register("photoURL", { required: true })} onChange={(e) => setNewImage(e.target.value)}/>
                                        {errors.photoURL && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    </div>
                                    <div className="form-control mb-3">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" value={user.email} className="input input-bordered" {...register("email")}/>
                                        {errors.email && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#FF5A3D] text-lg text-white">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            </HelmetProvider>
        </div>
    );
};

export default UpdateProfile;