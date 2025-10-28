function Main({ entry }) {
  return (
    <article className="destination-container">
      {/* Left column */}
      <div className="destination-img-container">
        <img
          src={entry.img.src}
          alt={entry.img.alt}
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
            <span className="country-name">{entry.country}</span>
          </div>

          <a href="#" className="destination-maps-link">
            View on Google Maps
          </a>
        </div>
        {/* Destination details */}
        <div>
          <div>
            <h1 className="destination-name">{entry.destinationName}</h1>
          </div>
          <div>
            <h4 className="travel-date">{entry.date}</h4>

            <p className="destination-description">{entry.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Main;
