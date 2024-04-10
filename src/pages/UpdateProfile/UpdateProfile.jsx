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
    const [passwordState, setPasswordState] = useState(false);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, updateUserInfo, user, updateUserEmail, updateUserPassword} = useContext(AuthContext);
    const [newName, setNewName] = useState(user.displayName);
    const [newImage, setNewImage] = useState(user.photoURL);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState(user.password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photoURL;
        console.log(name, email, photoURL);
        if(passwordRegex.test(password)){
                updateUserInfo(name, photoURL)
                .then(()=>{
                    toast.success("Successful");
                })
                .catch(()=>{   
                    toast.error("Something wrong happended!");
                })

                updateUserEmail(email)
                .then(()=>{
                    toast.success("Successful");
                })
                .catch(()=>{   
                    toast.error("Something wrong happended!");
                })

                updateUserPassword(password)
                .then(()=>{
                    toast.success("Successful");
                })
                .catch(()=>{   
                    toast.error("Something wrong happended!");
                })
        }
        else{
            toast.error("Password must have uppercase, lowercase and at least 6 characters!");
        }
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
                    <div className="hero bg-base-200 mt-32">
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
                                        <input type="email" placeholder="email" className="input input-bordered" value={newEmail} {...register("email", { required: true })} onChange={(e) => setNewEmail(e.target.value)}/>
                                        {errors.email && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type={passwordState ? 'text' : 'password'} placeholder="password" className="input input-bordered" value={newPassword} {...register("password", { required: true })} onChange={(e) => setNewPassword(e.target.value)}/>
                                        <div onClick={()=>setPasswordState(!passwordState)} className="absolute right-5 top-[50px]">
                                            {
                                                passwordState ? <FaRegEye className="text-xl"/> : <FaRegEyeSlash className="text-xl" />
                                            }
                                        </div>
                                        {errors.password && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
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