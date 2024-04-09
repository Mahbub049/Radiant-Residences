import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;