import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from 'react-router-dom';
import BlogDetails from "./BlogDetails/BlogDetails";

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div>
                <div className="bg-[#ff5a3d20] py-20 text-center my-6 rounded-xl">
                    <p className="text-4xl  font-bold">Blog</p>
                </div>
                <div>
                    {
                        blogs.map(blog=><BlogDetails blog={blog}></BlogDetails>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;