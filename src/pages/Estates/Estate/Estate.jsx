import { IoLocationSharp } from "react-icons/io5";
const Estate = ({estate}) => {
    const {estate_title, status, image, location} = estate;
    return (
        <div className="card bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300 relative">
            <figure><img className="w-full h-[280px]" src={image} alt="Shoes" /></figure>
            <div className={`absolute right-3 top-3 ${status === 'rent' ? 'bg-[#389b2f]' : 'bg-[#FF5A3D]'} px-2 py-1 text-white uppercase`}>For {status}</div>
            <div className="absolute left-2 top-[240px] flex gap-2 items-center text-white bg-[#CC5500] px-2 py-1 rounded-lg">
                <IoLocationSharp className="text-xl" />
                <p>{location}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Estate;