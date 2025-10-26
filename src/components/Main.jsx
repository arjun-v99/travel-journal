function Main() {
  return (
    <main>
      <div className="destination-container">
        {/* Left column */}
        <div>
          <img
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="destination image"
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
              <span className="country-name">JAPAN</span>
            </div>

            <a href="#" className="destination-maps-link">
              View on Google Maps
            </a>
          </div>
          {/* Destination details */}
          <div>
            <div>
              <h1 className="destination-name">Mount Fuji</h1>
            </div>
            <div>
              <h4 className="travel-date">12 Jan 2023 - 24, Jan 2023</h4>

              <p className="destination-description">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
