function Weather(props) {
    return (
        <div className="background-video">
            <video autoPlay muted loop id="background-video">
                <source src={props.bg} type="video/mp4" />
            </video>
        </div>
    );
}

export default Weather;