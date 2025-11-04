import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { updatePageMeta, updateStructuredData } from '../lib/seo';
import { getServiceSchema } from '../lib/schema';
import { serviceCategories } from '../data/services';

function Testing() {
  useEffect(() => {
    updatePageMeta({
      title: 'Environmental Testing Services - EnviroTech Solutions',
      description: 'NABL-accredited environmental testing for air quality, water, wastewater, food, and building materials with rapid turnaround times.',
    });
    updateStructuredData(getServiceSchema('Environmental Testing Services'));
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Testing Services' },
  ];

  const testingCategory = serviceCategories.find(cat => cat.id === 'testing');

  return (
    <>
      <PageHeader
        title="Environmental Testing Services"
        description="Comprehensive laboratory testing with ISO/IEC 17025:2017 and NABL accreditation"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-accent-600 leading-relaxed mb-6">
            Our state-of-the-art laboratory facilities provide accurate, reliable testing services for a wide range of environmental parameters. With NABL accreditation under ISO/IEC 17025:2017, our reports are recognized by regulatory authorities and legally defensible in court.
          </p>
          <p className="text-lg text-accent-600 leading-relaxed">
            We employ advanced analytical instruments, validated methodologies, and experienced technical staff to ensure the highest quality results. From routine monitoring to complex investigations, we deliver timely reports that enable informed decision-making.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section
        title="Testing Services"
        subtitle="Comprehensive analysis across multiple environmental media"
        background="gray"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testingCategory?.services.map((service, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-accent-900 mb-3">
                {service.name}
              </h3>
              <p className="text-accent-600 mb-4">
                {service.description}
              </p>
              <h4 className="font-semibold text-accent-800 mb-2">Key Parameters:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-accent-700">
                    <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Laboratory Capabilities */}
      <Section
        title="Laboratory Capabilities"
        subtitle="Advanced instrumentation and quality assurance systems"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-accent-900 mb-4">
              Analytical Instruments
            </h3>
            <ul className="space-y-2">
              {[
                'Gas Chromatography (GC)',
                'High Performance Liquid Chromatography (HPLC)',
                'Atomic Absorption Spectroscopy (AAS)',
                'UV-Visible Spectrophotometry',
                'Ion Chromatography (IC)',
                'Microbiological Incubators',
                'Environmental Monitoring Systems',
              ].map((instrument, index) => (
                <li key={index} className="flex items-center text-accent-700">
                  <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {instrument}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-accent-900 mb-4">
              Quality Assurance
            </h3>
            <ul className="space-y-2">
              {[
                'ISO/IEC 17025:2017 accredited procedures',
                'Calibrated and validated instruments',
                'Regular proficiency testing',
                'Internal quality control checks',
                'Documented standard operating procedures',
                'Trained and certified analysts',
                'Controlled laboratory environment',
              ].map((qa, index) => (
                <li key={index} className="flex items-center text-accent-700">
                  <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {qa}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testing Process */}
      <Section
        title="Our Testing Process"
        background="pattern"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              {
                title: 'Sample Collection',
                description: 'Proper sampling techniques following standard protocols. We provide sampling kits and can conduct onsite sampling if required.',
              },
              {
                title: 'Chain of Custody',
                description: 'Documented sample tracking from collection to analysis, ensuring sample integrity and traceability.',
              },
              {
                title: 'Laboratory Analysis',
                description: 'Testing performed using validated methods by qualified analysts in controlled laboratory conditions.',
              },
              {
                title: 'Quality Control',
                description: 'Multiple QC checks including blanks, duplicates, and spiked samples to ensure result accuracy.',
              },
              {
                title: 'Report Generation',
                description: 'Comprehensive reports with results, methods used, compliance status, and expert interpretations.',
              },
              {
                title: 'Technical Support',
                description: 'Post-report consultation to explain results and recommend corrective actions if needed.',
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-md">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-accent-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Need Environmental Testing?"
        description="Contact us for sample collection, laboratory analysis, or consultation on testing requirements."
        primaryText="Request Testing Quote"
        primaryLink="/enquiry"
        secondaryText="View All Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default Testing;