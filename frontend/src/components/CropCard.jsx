function CropCard(props){
    return(
        <div>
            <div className="crop-card">
                <div>
                    <h1 className="plant-name">{props.pName}</h1>
                    <h4 className="fertilizer-name">{props.fName}</h4>
                    <img className="circle-img" src="/images/foodCrop.jpg"alt="food-crop" />
                    <div className="description-card"> 
                        <p className="plant-description">Delivery - {props.fDelivery}</p>
                        <p className="plant-description">Today - {props.condition}</p>
                        <p className="plant-description">Quantity - {props.quantity} Kg</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CropCard;
