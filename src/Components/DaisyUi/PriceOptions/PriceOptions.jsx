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
        <div>
        
            <h3 className='text-3xl'>Best price Ever</h3>
            {gyms.map(gym => (
                <PriceOption key={gym.id} option={gym} />
            ))}
            
            
        </div>
    );
};

export default PriceOptions;