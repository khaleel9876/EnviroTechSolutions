import Badge from './Badge';

function AccreditationGrid({ certifications }) {
  const colorMap = {
    primary: 'from-primary-500 to-primary-600',
    secondary: 'from-secondary-500 to-secondary-600',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="card p-6 hover:scale-105 transition-transform"
        >
          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorMap[cert.color]} flex items-center justify-center text-3xl mb-4`}>
            {cert.icon}
          </div>
          <h3 className="text-xl font-bold text-accent-900 mb-1">
            {cert.title}
          </h3>
          <Badge variant={cert.color} size="sm" className="mb-3">
            {cert.subtitle}
          </Badge>
          <p className="text-accent-600 text-sm mb-4">
            {cert.description}
          </p>
          {cert.benefits && cert.benefits.length > 0 && (
            <ul className="space-y-2">
              {cert.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-accent-700">
                  <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccreditationGrid;