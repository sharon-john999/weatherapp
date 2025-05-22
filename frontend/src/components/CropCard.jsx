function CropCard(props){
    return(
        <div>
            <div>
                <div>
                    <div className={`${props.cClass}`}>
                        <h1 className="plant-name">{props.pName}</h1>
                        <h4 className="fertilizer-name">{props.fName}</h4>
                        <img className="circle-img" src={`/images/${props.plantType}.jpg`} alt={props.plantType} />
                        <div className="description-card"> 
                            <p className="plant-description">Fertilizer Type - {props.type}</p>
                            <p className="plant-description">Delivery - {props.fDelivery}</p>
                            <p className="plant-description">Quantity - {props.quantity} Kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CropCard;
