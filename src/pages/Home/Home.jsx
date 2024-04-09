import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home || Radiant Residences</title>
            </Helmet>
            <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Estates></Estates>
            <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default Home;