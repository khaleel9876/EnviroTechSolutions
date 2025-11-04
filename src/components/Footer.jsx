import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import { socialLinks, contactMethods } from '../data/social';
import { locations } from '../data/locations';

function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryLocation = locations.find((loc) => loc.isPrimary);

  return (
    <footer className="bg-accent-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className="font-bold text-lg">EnviroTech Solutions</div>
                <div className="text-sm text-accent-400">Environmental Excellence</div>
              </div>
            </div>
            <p className="text-accent-300 text-sm mb-4">
              Leading provider of environmental testing, consultancy, and waste management solutions with ISO/NABL accreditation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-accent-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <span className="text-lg">{social.icon === 'linkedin' ? '💼' : social.icon === 'twitter' ? '🐦' : social.icon === 'facebook' ? '📘' : '📷'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-accent-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/testing"
                  className="text-accent-300 hover:text-white transition-colors text-sm"
                >
                  Environmental Testing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consultancy"
                  className="text-accent-300 hover:text-white transition-colors text-sm"
                >
                  Consultancy Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/management"
                  className="text-accent-300 hover:text-white transition-colors text-sm"
                >
                  Waste Management
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-accent-300 hover:text-white transition-colors text-sm"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            {primaryLocation && (
              <div className="space-y-3 text-sm text-accent-300">
                <div>
                  <p className="font-medium text-white mb-1">Head Office</p>
                  <p>{primaryLocation.address.line1}</p>
                  <p>{primaryLocation.address.line2}</p>
                  <p>
                    {primaryLocation.address.city}, {primaryLocation.address.state} {primaryLocation.address.pincode}
                  </p>
                </div>
                {contactMethods.map((method) => (
                  <a
                    key={method.type}
                    href={method.href}
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <span>{method.icon}</span>
                    <span>{method.value}</span>
                  </a>
                ))}
                <div>
                  <p className="font-medium text-white mb-1">Business Hours</p>
                  <p>{primaryLocation.hours.weekdays}</p>
                  <p>{primaryLocation.hours.weekend}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-400 text-sm text-center md:text-left">
              © {currentYear} Terra Environ Labs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-accent-400">
              <Link to="/enquiry" className="hover:text-white transition-colors">
                Get Quote
              </Link>
              <span>•</span>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <span>•</span>
              <span>ISO 9001:2015 | ISO 45001:2018 | ISO 17025:2017 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;