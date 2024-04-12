import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FiSquare } from "react-icons/fi";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from "../../../Footer/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";

const EstateDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estateId=>estateId.id === idInt);
    const {image, estate_title, location, description, price, facilities, house, area, status} = estate;
    return (
        <HelmetProvider>
            <Helmet>
                <title>Estate Details: {id} || Radiant Residences</title>
            </Helmet>
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="mt-8 gap-10">
                <div className=" mx-3 lg:mx-0 relative mb-12">
                    <div className={`absolute left-3 top-3 ${status === 'rent' ? 'bg-[#389b2f]' : 'bg-[#FF5A3D]'} px-2 mx-2 py-1 text-white uppercase`}>For {status}</div>
                    <img className="w-full h-[600px] object-cover flex-1 rounded-lg" src={image} alt="" />
                </div>
                <div className="flex lg:flex-row flex-col justify-between gap-3 lg:gap-32 mx-3">
                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold ">{estate_title}</h2>
                        <div className=" flex gap-2 items-center my-4 text-orange-600 rounded-lg">
                            <IoLocationSharp className="text-xl" />
                            <p className="font-semibold">{location}</p>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#FF5A3D]">{price}</h2>
                        <hr className="my-6" />
                        <p className="text-gray-500"><span className="font-semibold text-black">Description: </span>{description}</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="mt-6 mb-4 font-semibold">Facilities:</h4>
                        <div className="flex lg:flex-row flex-col gap-6 font-semibold">
                        {
                            facilities.map((facility, idx)=><p key={idx} className="text-white bg-[#FF5A3D] p-2 rounded-lg">{facility}</p>)
                        }
                        </div>
                        <hr className="my-8" />
                        <div>
                            <p className="font-bold ">Estate Details:</p>
                            <div className="flex lg:flex-row flex-col gap-8 mt-4">
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
                        </div>
                        <div className="my-8 ">
                            <Link className="btn bg-[#FF5A3D] text-white" to={-1}>
                                <IoIosArrowRoundBack className="text-xl font-extrabold"></IoIosArrowRoundBack>
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
        </HelmetProvider>
    );
};

export default EstateDetails;