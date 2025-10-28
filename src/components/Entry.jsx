function Main(props) {
  return (
    <main>
      <article className="destination-container">
        {/* Left column */}
        <div className="destination-img-container">
          <img
            src={props.img.src}
            alt={props.img.alt}
            className="destination-img"
          />
        </div>
        {/* Right cloumn */}
        <div className="destination-details">
          {/* Location name and link */}
          <div className="destination-location">
            <div className="destination-marker-container">
              <img
                src="/images/marker.png"
                alt="destination marker icon"
                className="destination-marker"
              />
              <span className="country-name">{props.country}</span>
            </div>

            <a href="#" className="destination-maps-link">
              View on Google Maps
            </a>
          </div>
          {/* Destination details */}
          <div>
            <div>
              <h1 className="destination-name">{props.destinationName}</h1>
            </div>
            <div>
              <h4 className="travel-date">{props.date}</h4>

              <p className="destination-description">{props.description}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Main;
