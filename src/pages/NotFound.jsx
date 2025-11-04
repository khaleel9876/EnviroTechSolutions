import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { updatePageMeta } from '../lib/seo';

function NotFound() {
  useEffect(() => {
    updatePageMeta({
      title: '404 - Page Not Found | EnviroTech Solutions',
      description: 'The page you are looking for does not exist.',
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-6xl font-bold text-accent-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-accent-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-accent-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/services" className="btn-outline">
            View Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-200">
          <h3 className="text-lg font-semibold text-accent-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Testing Services', href: '/services/testing' },
              { label: 'Certifications', href: '/certifications' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;