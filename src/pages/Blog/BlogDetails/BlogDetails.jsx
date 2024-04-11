import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
const BlogDetails = ({blog}) => {
    const {id, title, author, date, content, tags, image} = blog;
    return (
        <div className="border border-[#FF5A3D] p-8 rounded-xl flex items-center gap-8 mt-6">
            <div>
                <img src={image} className="w-[600px] h-[300px] object-cover" alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="mt-3 flex gap-3 items-center">
                    <FaUserLarge className="text-[#FF5A3D]"></FaUserLarge>
                    <p className=" text-[#b65746] font-semibold">{author}</p>
                </div>
                <hr className="my-4" />
                <p className="pr-6"><span className="font-bold">Description:</span> {content}</p>
                <hr className="my-4" />
                <Link className="btn bg-[#FF5A3D] text-white" to={`/blogdetails/${id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default BlogDetails;