import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

function CTA({ title, description, primaryText = 'Get Started', primaryLink = '/enquiry', secondaryText, secondaryLink }) {
  const handleClick = (type) => {
    trackEvent('cta_click', { cta_type: type });
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-primary-100 mb-8">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryLink}
              onClick={() => handleClick('primary')}
              className="btn bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl"
            >
              {primaryText}
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                onClick={() => handleClick('secondary')}
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;