import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { updatePageMeta } from '../lib/seo';
import { serviceCategories, serviceBenefits } from '../data/services';
import img1 from "../assets/ourServices/img1.avif"
import img2 from "../assets/ourServices/img2.avif"
import img3 from "../assets/ourServices/img3.avif"

function Services() {
  useEffect(() => {
    updatePageMeta({
      title: 'Our Services - EnviroTech Solutions',
      description:
        'Comprehensive environmental testing, consultancy, and waste management services for industries, institutions, and government bodies.',
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ];

  // 🌿 Add default fallback images for services
  const defaultImages = {
    testing:
    img1,
   
      consultancy:img2,
    waste: img3,  
     // 'https://images.unsplash.com/photo-1622322977885-8ee6d45ea016?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074', // waste management
    air:
      'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80', // air quality
    water:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80', // water testing
  };

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive environmental solutions backed by technical expertise and ISO/NABL accreditation"
        breadcrumbs={breadcrumbs}
        image="https://images.unsplash.com/photo-1599058917214-7a38d8d8c7f7?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Service Categories */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <ServiceCard
              key={category.id}
              title={category.title}
              description={category.description}
              // icon={category.icon}
              href={category.href}
              features={category.services.slice(0, 5).map((s) => s.name)}
              image={
                category.id === 'testing'
                  ? defaultImages.testing
                  : category.id === 'consultancy'
                  ? defaultImages.consultancy
                  : category.id === 'waste'
                  ? defaultImages.waste
                  : defaultImages.air
              }
            />
          ))}
        </div>
      </Section>

      {/* Service Benefits */}
      <Section
        title="Why Choose Our Services"
        subtitle="Quality, expertise, and commitment to your environmental needs"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceBenefits.map((benefit, index) => (
            <div key={index} className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-accent-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-accent-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Service Process">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'Understand your requirements and recommend appropriate testing or services.',
              },
              {
                step: '02',
                title: 'Sampling',
                description:
                  'Collect samples using proper protocols or provide onsite testing.',
              },
              {
                step: '03',
                title: 'Analysis',
                description:
                  'Conduct testing using validated methods in our accredited laboratory.',
              },
              {
                step: '04',
                title: 'Reporting',
                description:
                  'Deliver comprehensive reports with interpretations and recommendations.',
              },
            ].map((phase, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-accent-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-accent-600">{phase.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section
        title="Industries We Serve"
        subtitle="Tailored solutions for diverse sectors"
        background="pattern"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'Manufacturing', icon: '🏭' },
            { name: 'Healthcare', icon: '🏥' },
            { name: 'Construction', icon: '🏗️' },
            { name: 'Hospitality', icon: '🏨' },
            { name: 'Education', icon: '🎓' },
            { name: 'Government', icon: '🏛️' },
            { name: 'Food & Beverage', icon: '🍽️' },
            { name: 'Pharmaceuticals', icon: '💊' },
          ].map((industry, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:shadow-xl transition-shadow bg-white/80"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-accent-900">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            We understand that every project has unique requirements. Contact
            us to discuss your specific environmental needs and we'll develop a
            tailored solution.
          </p>
          <Link
            to="/enquiry"
            className="btn bg-white text-primary-600 hover:bg-primary-50"
          >
            Request Custom Quote
          </Link>
        </div>
      </Section>
    </>
  );
}

export default Services;
