import { useEffect, useState } from "react";
import CropCard from "./CropCard";

function CropFetch() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/crops")
      .then(res => res.json())
      .then(data => setCrops(data));
  }, []);

  return (
      <div>
        {crops.map(crop => (
          <div key={crop._id}>
            <CropCard pName={crop.plantname} 
            fName={crop.fertilizername} 
            plantType= {crop.planttype} 
            fDelivery={crop.fertilizermethod} 
            type={crop.fertilizertype}
            quantity ={crop.fertilizerquantity}
            />
          </div>
        ))}
      
      </div>
  );
}

export default CropFetch;
