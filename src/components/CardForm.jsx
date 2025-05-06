import React from "react";

const fertilizerType = [
  {id: 1, name: "Organic"},
  {id: 2, name: "Inorganic"}
];

function CardForm(){
  return(
    <div>
      <h3>Add One</h3>
      <br />
      <form action="">
        <label htmlFor="fname">Plant Name</label>
        <input type="text" id="" name=""/>
        <label htmlFor="type">Type</label>
        <input type="" id="" name=""/>
        
      </form>
    </div>
  );
}

export default CardForm;