import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const [gyms,setGym]=useState([])
    useEffect(()=>{
        fetch('gym.json')
        .then(res=>res.json())
        .then(data => setGym(data.membershipPlans || []));
    },[])
    return (
        
        <div className=" ">
         <h3 className='text-3xl text-center'>Best price Ever</h3>
<div className="grid md:grid-cols-3 gap-6 mt-6">
           {gyms.map(gym => (
                <PriceOption key={gym.id} option={gym} />
            ))}
           </div>
            
            
        </div>
    );
};

export default PriceOptions;