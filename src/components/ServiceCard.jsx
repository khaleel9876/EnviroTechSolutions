import { Link } from "react-router-dom";

function ServiceCard({ title, description, icon, href, features = [], image }) {
  // Fallback image if none provided or failed
  const fallbackImage =  " ";
    // "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="card overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col">
      <img
        src={image || fallbackImage}
        alt={title}
        className="w-full h-auto object-cover bg-gray-100"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackImage)} // fallback if fails
      />

      <div className="p-6 flex flex-col flex-grow">
        {icon && <div className="text-5xl mb-4">{icon}</div>}

        <h3 className="text-xl font-bold text-accent-900 mb-3">{title}</h3>
        <p className="text-accent-600 mb-4 flex-grow">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-accent-700">
                <svg
                  className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {href && (
          <Link
            to={href}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-auto group"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
