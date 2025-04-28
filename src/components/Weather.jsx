import React from "react";

function Weather() {
    return (
        <div className="background-video">
            <video autoPlay muted loop id="background-video">
                <source src="images/summer.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Weather;