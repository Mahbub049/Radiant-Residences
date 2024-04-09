import { useEffect, useState } from "react";
import Estate from "./Estate/Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(()=>{
        fetch('/estates.json')
        .then(res=>res.json())
        .then(data=>setEstates(data))
    },[])
    return (
        <div id="estates" className="mt-16">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">Premier Estates Selection</h2>
                <p className="px-80 leading-7 mt-6">Explore our curated collection of premier real estate properties, each meticulously categorized to suit your preferences. Whether it&apos;s a cozy residential retreat or a luxurious seaside villa, find your ideal estate here.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    estates.map(estate=><Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;