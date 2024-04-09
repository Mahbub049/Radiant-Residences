import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
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
            </div>
        </HelmetProvider>
    );
};

export default Home;