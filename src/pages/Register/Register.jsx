import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser} = useContext(AuthContext);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        if(passwordRegex.test(password)){
            createUser(email, password)
            .then((result)=>{
                toast.success("Successful");
                console.log(result.user)
            })
            .catch(error=>{
                toast.error("Something wrong happended!");
            })
        }
        else{
            toast.error("Password must have uppercase, lowercase and at least 6 characters!");
        }
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Register || Radiant Residences</title>
            </Helmet>
            <ToastContainer />
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <div>
                <div className="hero bg-base-200 mt-32">
                    <div className="hero-content flex-col w-[800px] h-[600px]">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="Name" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })}/>
                                    {errors.name && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="photourl" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })}/>
                                    {errors.photoURL && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}/>
                                    {errors.email && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
                                    {errors.password && <span className="my-2 text-[#FF5A3D]">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/* {errors.email && toast('error')} */}
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF5A3D] text-lg text-white">Register</button>
                                </div>
                            </form>
                            <div className='mx-8 mb-8 flex justify-center'>
                                <p>Already have an account? <Link className="link-primary" to={'/login'}>Login Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </HelmetProvider>
    );
};

export default Register;