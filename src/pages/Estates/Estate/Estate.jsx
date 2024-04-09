import { IoLocationSharp } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
const Estate = ({estate}) => {
    const {estate_title, status, image, location, price, description, area, house} = estate;
    return (
        <div className="card bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300 relative">
            <figure><img className="w-full h-[280px]" src={image} alt="Shoes" /></figure>
            <div className={`absolute right-3 top-3 ${status === 'rent' ? 'bg-[#389b2f]' : 'bg-[#FF5A3D]'} px-2 py-1 text-white uppercase`}>For {status}</div>
            <div className="absolute left-2 top-[240px] flex gap-2 items-center text-white bg-[#CC5500] px-2 py-1 rounded-lg">
                <IoLocationSharp className="text-xl" />
                <p>{location}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title text-[#FF5A3D]">{price}</h2>
                <h2 className="text-xl font-bold">{estate_title}</h2>
                {description.length>100 ? <p>{description.slice(0,100)}...</p> : <p>{description}</p>}
                <hr className="mt-4" />
                <div className="flex gap-7">
                    <div className="flex gap-2 items-center my-3">
                        <FiSquare className="text-lg" />
                        <p>{area}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IoBedOutline className="text-xl"></IoBedOutline>
                        <p>{house.bedrooms} Bedrooms</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LuBath className="text-xl"></LuBath>
                        <p>{house.bathrooms} Bathrooms</p>
                    </div>
                </div>
                <hr />
                <div className="card-actions justify-end my-6">
                    <button className="btn bg-[#FF5A3D] text-white w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Estate;