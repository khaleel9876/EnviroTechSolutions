function MapEmbed({ location }) {
  const { name, coordinates } = location;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}`;

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full bg-accent-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-5xl mb-4">📍</div>
          <h3 className="text-xl font-semibold text-accent-900 mb-2">{name}</h3>
          <p className="text-accent-600 mb-4">
            Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Open in Google Maps
            <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MapEmbed;