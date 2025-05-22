import { useEffect, useState } from "react";
import CropCard from "./CropCard";

function CropFetch() {
  const [crops, setCrops] = useState([]);

  const fetchCrops = () => {
    fetch("http://localhost:5000/api/crops")
      .then(res => res.json())
      .then(data => setCrops(data));
  };
  /*
  useEffect(() => {
    fetch("http://localhost:5000/api/crops")
      .then(res => res.json())
      .then(data => setCrops(data));
    }, [])
    */

  useEffect(() => {
    fetchCrops();
      const interval = setInterval(() => {
        fetchCrops();
      }, 8000);

      return() => clearInterval(interval);
  }, []);

  return(
    <div className="scroll-container">
      {crops.map(crop => {
        const cardClass = crop.fertilizertype == "organic" ? "organic-crop-card" : "inorganic-crop-card";

      return (
      <div key={crop._id}>
        <CropCard pName={crop.plantname} 
          fName={crop.fertilizername} 
          plantType= {crop.planttype} 
          fDelivery={crop.fertilizermethod} 
          type={crop.fertilizertype}
          quantity ={crop.fertilizerquantity}
          cClass = {cardClass}
        />
      </div>
      
      );  
      })}
    </div>
  );
}

export default CropFetch;
