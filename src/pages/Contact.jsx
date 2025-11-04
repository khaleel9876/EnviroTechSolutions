import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import MapEmbed from '../components/MapEmbed';
import { updatePageMeta } from '../lib/seo';
import { locations, businessHours } from '../data/locations';
import { contactMethods } from '../data/social';

function Contact() {
  useEffect(() => {
    updatePageMeta({
      title: 'Contact Us - EnviroTech Solutions',
      description: 'Get in touch with our environmental testing and consultancy experts. Visit our offices in Bengaluru and Hyderabad.',
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for enquiries, quotations, or general information"
        breadcrumbs={breadcrumbs}
      />

      {/* Contact Methods */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-accent-900 mb-8 text-center">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="card p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="text-5xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-bold text-accent-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-primary-600 group-hover:text-primary-700">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-accent-600 mb-4">
              For detailed enquiries or service quotations, please use our enquiry form.
            </p>
            <a href="/enquiry" className="btn-primary">
              Submit Enquiry Form
            </a>
          </div>
        </div>
      </Section>

      {/* Office Locations */}
      <Section
        title="Our Locations"
        subtitle="Visit us at our offices across India"
        background="gray"
      >
        <div className="space-y-12">
          {locations.map((location) => (
            <div key={location.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="card p-8">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-3">📍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent-900 mb-1">
                      {location.name}
                    </h3>
                    {location.isPrimary && (
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        Head Office
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent-800 mb-2">Address</h4>
                    <p className="text-accent-600">
                      {location.address.line1}<br />
                      {location.address.line2}<br />
                      {location.address.city}, {location.address.state} - {location.address.pincode}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-accent-800 mb-2">Phone</h4>
                      <a href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`} className="text-primary-600 hover:text-primary-700">
                        {location.phone}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent-800 mb-2">Email</h4>
                      <a href={`mailto:${location.email}`} className="text-primary-600 hover:text-primary-700 break-all">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent-800 mb-2">Business Hours</h4>
                    <p className="text-accent-600">
                      {location.hours.weekdays}<br />
                      {location.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              <MapEmbed location={location} />
            </div>
          ))}
        </div>
      </Section>

      {/* Business Hours Table */}
      <Section
        title="Operating Hours"
      >
        <div className="max-w-2xl mx-auto">
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-accent-900">Day</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-accent-900">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent-200">
                {businessHours.map((day, index) => (
                  <tr key={index} className={day.hours === 'Closed' ? 'bg-accent-50' : ''}>
                    <td className="px-6 py-4 text-accent-900 font-medium">{day.day}</td>
                    <td className={`px-6 py-4 ${day.hours === 'Closed' ? 'text-accent-500' : 'text-accent-700'}`}>
                      {day.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-accent-600 mt-4">
            Emergency services available 24/7 by prior arrangement
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        background="pattern"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: 'What is your typical turnaround time for test results?',
              answer: 'Standard turnaround is 3-5 working days for most tests. Express services are available for urgent requirements with 24-48 hour delivery.',
            },
            {
              question: 'Do you provide onsite sample collection?',
              answer: 'Yes, we provide professional sample collection services across India. Our trained technicians follow standard protocols to ensure sample integrity.',
            },
            {
              question: 'Are your reports legally valid?',
              answer: 'Yes, our NABL-accredited reports under ISO/IEC 17025:2017 are legally valid and accepted by courts and regulatory authorities.',
            },
            {
              question: 'Do you offer consultation services?',
              answer: 'Yes, we provide expert consultancy for environmental compliance, clearances, safety audits, and waste management solutions.',
            },
            {
              question: 'What geographical areas do you serve?',
              answer: 'We serve clients across India with offices in Bengaluru and Hyderabad. Our mobile testing units and partner network enable pan-India coverage.',
            },
          ].map((faq, index) => (
            <details key={index} className="card p-6 group">
              <summary className="font-semibold text-accent-900 cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <svg className="w-5 h-5 text-primary-600 group-open:rotate-180 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-accent-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Contact;