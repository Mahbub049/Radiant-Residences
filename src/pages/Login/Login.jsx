import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login || Radiant Residences</title>
            </Helmet>
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <div>
                <div className="hero bg-base-200 mt-16">
                    <div className="hero-content flex-col w-[800px] h-[600px]">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form className="card-body w-full">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF5A3D] text-lg text-white">Login</button>
                                </div>
                            </form>
                           <div className='flex gap-4 mx-auto'>
                                <div className='mx-8 mb-8 flex justify-center'>
                                    <button className="btn text-lg">
                                        <FcGoogle></FcGoogle>
                                        Login with Google
                                    </button>
                                </div>
                                <div className='mx-8 mb-8 flex justify-center'>
                                    <button className="btn text-lg">
                                        <FaGithub></FaGithub>
                                        Login with Github
                                    </button>
                                </div>
                           </div>
                            <div className='mx-8 mb-8 flex justify-center'>
                                <p>Don&apos;t have an account? <Link className='link-primary' to={'/register'}>Register Now</Link></p>
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

export default Login;