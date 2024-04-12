import { Link, useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoLocationSharp } from 'react-icons/io5';
import { BsCalendarDate } from "react-icons/bs";
import { FaUserLarge } from 'react-icons/fa6';
import { BiCategory } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { IoIosArrowRoundBack } from 'react-icons/io';
const BlogCard = () => {
    const blog = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const matchedBlog = blog.find(blogId=>blogId.id === idInt);
    console.log(matchedBlog)
    const {title, author, date, content, tags, image, category, location} = matchedBlog;
    return (
        <HelmetProvider>
            <Helmet>
                <title>Blog Details: {id} || Radiant Residences</title>
            </Helmet>
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="mt-16 flex flex-col lg:flex-row items-center gap-10 mx-3 lg:mx-0">
                <div className="flex-1 relative">
                    <img className="w-full object-cover h-[550px] flex-1 rounded-lg" src={image} alt="" />
                </div>
                <div className="flex-1 mx-auto lg:mx-0">
                    <h2 className="text-4xl font-bold ">{title}</h2>
                    <div className='flex flex-col lg:flex-row lg:gap-6'>
                        <div className=" flex gap-2 items-center my-4 text-orange-600 rounded-lg">
                            <FaUserLarge className="text-xl text-[#FF5A3D]"></FaUserLarge>
                            <p className="">{author}</p>
                        </div>
                        <div className='flex gap-2 items-center mb-4 lg:mb-0 lg:my-4 text-orange-600'>
                            <BsCalendarDate className="text-xl"></BsCalendarDate>
                            <h2 className="text-[#FF5A3D]">{date}</h2>
                        </div>
                    </div>
                    <div className='font-bold flex gap-2 items-center text-[#FF5A3D]'>
                        <BiCategory></BiCategory>
                        <p>{category}</p>
                    </div>
                    <hr className="my-6" />
                    <p className="text-gray-500 "><span className="font-semibold text-black">Description: </span>{content}</p>
                    <div className='flex gap-6 my-5 '>
                        <div className='flex gap-2 items-center text-[#FF5A3D] font-semibold'>
                            <IoLocationSharp></IoLocationSharp>
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-2 items-center font-bold text-[#FF5A3D] '>
                            <FcRating className='text-lg'></FcRating>
                            <p>4.5</p>
                        </div>
                    </div>
                    <h4 className="mt-6 mb-4 font-semibold">Tags:</h4>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 font-semibold">
                    {
                        tags.map((facility, idx)=><p key={idx} className="text-white bg-[#FF5A3D] p-2 rounded-lg">{facility}</p>)
                    }
                    </div>
                    <div className="my-8 ">
                            <Link className="btn bg-[#FF5A3D] text-white" to={-1}>
                                <IoIosArrowRoundBack className="text-xl font-extrabold"></IoIosArrowRoundBack>
                                Go Back
                            </Link>
                    </div>
                    {/* <hr className="my-6" /> */}
                    {/* <div>
                        <p className="font-bold ">Estate Details:</p>
                        <div className="flex gap-8 mt-4">
                            <div className="flex gap-2 items-center bg-[#FF5A3D] text-white px-4 py-2 rounded-lg font-semibold">
                            <FiSquare className="text-lg" />
                            <p>{area}</p>
                            </div>
                            <div className="flex gap-2 items-center bg-[#FF5A3D] text-white px-4 py-2 rounded-lg font-semibold">
                            <IoBedOutline className="text-xl"></IoBedOutline>
                            <p>{house.bedrooms} Bedrooms</p>
                            </div>
                            <div className="flex gap-2 items-center bg-[#FF5A3D] text-white px-4 py-2 rounded-lg font-semibold">
                                <LuBath className="text-xl"></LuBath>
                                <p>{house.bathrooms} Bathrooms</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        <Footer></Footer>
        </div>
        </HelmetProvider>
    );
};

export default BlogCard;