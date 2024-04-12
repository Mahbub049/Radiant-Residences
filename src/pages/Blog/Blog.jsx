import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from 'react-router-dom';
import BlogDetails from "./BlogDetails/BlogDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <HelmetProvider>
            <Helmet>
                <title>Blog || Radiant Residences</title>
            </Helmet>
            <div className="container mx-auto">
            <Navbar></Navbar>
            <div>
                <div className="bg-[#ff5a3d20] py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold">Blog</p>
                </div>
                <div className="mx-3 lg:mx-0">
                    {
                        blogs.map(blog=><BlogDetails key={blog.id} blog={blog}></BlogDetails>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
        </HelmetProvider>
    );
};

export default Blog;