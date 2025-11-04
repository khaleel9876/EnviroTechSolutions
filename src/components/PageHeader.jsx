function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg className="w-4 h-4 mx-2 text-accent-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-primary-600 hover:text-primary-700">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-accent-600">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-accent-900 mb-4 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-accent-600 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default PageHeader;