import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { updatePageMeta } from '../lib/seo';

function Enquiry() {
  useEffect(() => {
    updatePageMeta({
      title: 'Submit Enquiry - EnviroTech Solutions',
      description: 'Request a quote for environmental testing, consultancy, or waste management services. Our team will respond within 24 hours.',
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Enquiry' },
  ];

  return (
    <>
      <PageHeader
        title="Submit Enquiry"
        description="Request a quote or consultation for your environmental needs"
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-accent-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-accent-600 mb-6">
                Fill out the form below and our team will get back to you within 24 hours with a detailed response.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-accent-900 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {[
                  'ISO/NABL accredited laboratory',
                  'Experienced technical team',
                  'Rapid turnaround times',
                  'Competitive pricing',
                  'Pan-India service coverage',
                  'Comprehensive reporting',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-accent-700">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
              <h3 className="text-lg font-bold mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-primary-100 mb-4">
                For urgent enquiries, please call us directly.
              </p>
              <a
                href="tel:+918023456789"
                className="btn bg-white text-primary-600 hover:bg-primary-50 w-full justify-center"
              >
                📞 Call Now
              </a>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-accent-900 mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'We review your enquiry within 2 hours' },
                  { step: '2', text: 'Our expert contacts you for clarifications' },
                  { step: '3', text: 'You receive a detailed quotation' },
                  { step: '4', text: 'Upon approval, we initiate services' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold mr-3">
                      {item.step}
                    </div>
                    <p className="text-sm text-accent-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 bg-accent-50">
              <h3 className="text-lg font-bold text-accent-900 mb-2">
                Data Privacy
              </h3>
              <p className="text-sm text-accent-600">
                Your information is secure and will only be used to respond to your enquiry. We do not share data with third parties.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-accent-900 mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-accent-600 mb-6">
            Our experts can help you identify the right testing or consultancy services based on your specific requirements and regulatory obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-outline">
              Explore Services
            </a>
            <a href="/contact" className="btn-ghost">
              View Contact Options
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Enquiry;