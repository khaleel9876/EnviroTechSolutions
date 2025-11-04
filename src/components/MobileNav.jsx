import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';

function MobileNav({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  if (!isOpen) return null;

  const isActive = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const toggleExpand = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <div className="lg:hidden border-t border-accent-200 bg-white animate-slide-down">
      <div className="container mx-auto px-4 py-4 space-y-2">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpand(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-accent-700 hover:bg-accent-50'
                  }`}
                  aria-expanded={expandedItem === item.name}
                >
                  {item.name}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedItem === item.name ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItem === item.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={onClose}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-accent-600 hover:bg-accent-50'
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href}
                onClick={onClose}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-accent-700 hover:bg-accent-50'
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <Link
          to="/enquiry"
          onClick={onClose}
          className="block w-full btn-primary text-center mt-4"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;