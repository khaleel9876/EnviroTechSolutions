function StatCard({ value, label, description, icon }) {
  return (
    <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
      {icon && (
        <div className="text-4xl mb-3" aria-hidden="true">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-accent-900 mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-accent-600">
          {description}
        </div>
      )}
    </div>
  );
}

export default StatCard;