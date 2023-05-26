const Holidays = (props) => {
    return (
        <div className="cards">
            <img src={props.items.imageUrl} alt="mountain image" />
            <div className="card--innerbox">
                <div className="location--details">
                    <img src="../img/Fill219.png" alt="location icon" width={7} height={10}/>
                    <h2>{props.items.location}</h2>
                    <a href={props.items.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="location-name">{props.items.title}</h1>
                <p className="dates">{props.items.startDate} - {props.items.endDate}</p>
                <p className="mount--description">{props.items.description}</p>
            </div>
        </div>
    )
}


export default Holidays