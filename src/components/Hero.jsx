import { Link } from 'react-router-dom';
import img1 from "../assets/home/img6.jpeg"

function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/enquiry',
  showCTA = true,
  backgroundPattern = true,
}) {
 
  const backgroundImage = img1;

  return (
    <section
      className={`relative py-20 md:py-32 h-[100vh] overflow-hidden `}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-white/60 md:bg-white/70 backdrop-blur-[0px]"></div>

      {backgroundPattern && (
        <div
          className="absolute inset-0 bg-grid-pattern opacity-0"
          aria-hidden="true"
        ></div>
      )}

      {/* Content */}
      <div className="container mx-auto mt-[20vh] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {subtitle}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-900 mb-6 tracking-tight animate-fade-in">
            {title}
          </h1>

          {description && (
            <p className="text-xl text-accent-700 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
              {description}
            </p>
          )}

          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-200 rounded-full opacity-30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary-200 rounded-full opacity-30 blur-3xl"
        aria-hidden="true"
      ></div>
    </section>
  );
}

export default Hero;
