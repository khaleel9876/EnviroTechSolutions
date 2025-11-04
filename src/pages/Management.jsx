import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { updatePageMeta, updateStructuredData } from '../lib/seo';
import { getServiceSchema } from '../lib/schema';
import { serviceCategories } from '../data/services';
import img29 from "../assets/wasteWastewaterManagement/img29.avif"
import img30 from "../assets/wasteWastewaterManagement/img30.avif"
import img31 from "../assets/wasteWastewaterManagement/img31.avif"
import img32 from "../assets/wasteWastewaterManagement/img32.avif"
import img33 from "../assets/wasteWastewaterManagement/img33.avif"
import img34 from "../assets/wasteWastewaterManagement/img34.avif"
import img35 from "../assets/wasteWastewaterManagement/img35.avif"
import img36 from "../assets/wasteWastewaterManagement/img36.avif"
import img37 from "../assets/wasteWastewaterManagement/img37.avif"
import img38 from "../assets/wasteWastewaterManagement/img38.avif"
import img39 from "../assets/wasteWastewaterManagement/img39.avif"
import img40 from "../assets/wasteWastewaterManagement/img40.avif"
import img41 from "../assets/wasteWastewaterManagement/img41.avif"
import img42 from "../assets/wasteWastewaterManagement/homeimg.avif"
 

function Management() {
  useEffect(() => {
    updatePageMeta({
      title: 'Waste & Wastewater Management - EnviroTech Solutions',
      description:
        'Turnkey solutions for wastewater treatment, solid waste management, and resource recovery with eco-friendly technologies.',
    });
    updateStructuredData(getServiceSchema('Waste & Wastewater Management Services'));
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Waste Management' },
  ];

  const managementCategory = serviceCategories.find(cat => cat.id === 'management');

  // const defaultServiceImages = [
  //   'https://images.unsplash.com/photo-1581092334434-1d7d3b8b6f8f?auto=format&fit=crop&w=800&q=80', // Water treatment
  //   'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80', // Wastewater plant
  //   'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80', // Air/water quality
  //   'https://images.unsplash.com/photo-1599058917214-7d9b3db5f71e?auto=format&fit=crop&w=800&q=80', // Industrial setup
  // ];

  // const technologyImages = {
  //   'Biological Treatment':
  //     'https://images.unsplash.com/photo-1621605818385-5739e5f9e667?auto=format&fit=crop&w=800&q=80',
  //   'Physical-Chemical Treatment':
  //     'https://images.unsplash.com/photo-1581091012184-5c5b1b235aa7?auto=format&fit=crop&w=800&q=80',
  //   'Membrane Technology':
  //     'https://images.unsplash.com/photo-1608652698461-1bb3c8e9f1e8?auto=format&fit=crop&w=800&q=80',
  //   'Zero Liquid Discharge':
  //     'https://images.unsplash.com/photo-1609873538174-350d1a95d5d8?auto=format&fit=crop&w=800&q=80',
  //   Composting:
  //     'https://images.unsplash.com/photo-1582407947304-8d1e3a5dca09?auto=format&fit=crop&w=800&q=80',
  //   'Waste to Energy':
  //     'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
  // };

  // const exampleImages = {
  //   'Textile Industry': 'https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=800&q=80',
  //   'Food Processing': 'https://images.unsplash.com/photo-1564758569403-79c3e8e8d01c?auto=format&fit=crop&w=800&q=80',
  //   Pharmaceutical: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  //   Hospitals: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
  //   'IT Parks': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  //   Hotels: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210b9?auto=format&fit=crop&w=800&q=80',
  //   Residential: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  //   'Industrial Parks': 'https://images.unsplash.com/photo-1603791452906-b1c8fb21b3a0?auto=format&fit=crop&w=800&q=80',
  // };

  return (
    <>
      <PageHeader
        title="Waste & Wastewater Management"
        description="Sustainable solutions for treatment, disposal, and resource recovery"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-accent-600 leading-relaxed mb-6">
            Transform waste from a liability into an opportunity with our comprehensive management solutions. We design,
            install, operate, and maintain treatment systems that not only meet regulatory requirements but also optimize
            resource recovery and minimize environmental impact.
          </p>
          <p className="text-lg text-accent-600 leading-relaxed">
            Our turnkey approach covers everything from feasibility studies to long-term operations and maintenance.
            Whether you need a new wastewater treatment plant, want to improve existing system performance, or require
            regular waste collection services, we provide customized solutions backed by technical expertise and
            eco-friendly technologies.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section
        title="Management Services"
        subtitle="Complete waste and wastewater solutions for sustainable operations"
        background="gray"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {managementCategory?.services.map((service, index) => (
            <div key={index} className="card p-6 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <img
                src={service.img }
                alt={service.name}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-accent-900 mb-3">{service.name}</h3>
              <p className="text-accent-600 mb-4">{service.description}</p>
              <h4 className="font-semibold text-accent-800 mb-2">What We Offer:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-accent-700">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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

      {/* Treatment Technologies */}
      <Section title="Treatment Technologies" subtitle="Advanced and sustainable treatment methods">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Biological Treatment',
              description:
                'Activated sludge, MBBR, SBR, and anaerobic digestion for organic waste degradation.',
              icon: '🦠',
              img:img29
            },
            {
              title: 'Physical-Chemical Treatment',
              description: 'Coagulation, flocculation, filtration, and advanced oxidation processes.',
              icon: '⚗️',
              img:img30
            },
            {
              title: 'Membrane Technology',
              description: 'Ultrafiltration, nanofiltration, and reverse osmosis for high-quality treated water.',
              icon: '🔬',
              
              img:img31 },
            {
              title: 'Zero Liquid Discharge',
              description: 'Complete water recovery systems minimizing discharge and maximizing reuse.',
              icon: '💧',
              
              img:img32 },
            {
              title: 'Composting',
              description: 'Aerobic and vermicomposting for organic solid waste conversion.',
              icon: '🌱',
              
              img:img33 },
            {
              title: 'Waste to Energy',
              description: 'Biogas generation and thermal treatment for energy recovery.',
              icon: '⚡',
              
              img:img34 },
          ].map((tech, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-shadow rounded-xl bg-white overflow-hidden">
              <img
                src={tech.img}
                alt={tech.title}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              {/* <div className="text-4xl mb-2">{tech.icon}</div> */}
              <h3 className="text-lg font-bold text-accent-900 mb-1">{tech.title}</h3>
              <p className="text-sm text-accent-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Turnkey Solutions */}
      <Section title="Our Turnkey Approach" background="pattern">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Feasibility Study',
                description:
                  'Assess waste characteristics, treatment requirements, site conditions, and develop preliminary designs with cost estimates.',
              },
              {
                title: 'Detailed Engineering',
                description:
                  'Complete design documentation including process flow diagrams, equipment specifications, and construction drawings.',
              },
              {
                title: 'Equipment Procurement',
                description:
                  'Source quality equipment from reputed manufacturers, ensuring specifications and delivery timelines are met.',
              },
              {
                title: 'Installation & Commissioning',
                description:
                  'Supervise construction, install equipment, conduct performance testing, and train your operational staff.',
              },
              {
                title: 'Operations & Maintenance',
                description:
                  'Provide ongoing O&M services including monitoring, troubleshooting, preventive maintenance, and optimization.',
              },
              {
                title: 'Performance Guarantee',
                description:
                  'Ensure systems meet design parameters and regulatory discharge standards with documented performance.',
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-accent-900">{phase.title}</h3>
                </div>
                <p className="text-accent-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application Examples */}
      <Section title="Application Examples" subtitle="Solutions implemented across various sectors" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { sector: 'Textile Industry', solution: 'Color removal and water recycling systems',
                  img:img42,
                },
            { sector: 'Food Processing', solution: 'High BOD/COD treatment and biogas recovery', img:img35,

            },
            { sector: 'Pharmaceutical', solution: 'Advanced oxidation for complex effluents', img:img36,

            },
            { sector: 'Hospitals', solution: 'Biomedical waste segregation and treatment', img:img37,

            },
            { sector: 'IT Parks', solution: 'Sewage treatment and water reuse systems', img:img38,

            },
            { sector: 'Hotels', solution: 'Gray water recycling and organic waste composting', img:img39,

            },
            { sector: 'Residential', solution: 'Decentralized STPs and solid waste management', img:img40,

            },
            { sector: 'Industrial Parks', solution: 'CETP operations and hazardous waste handling', img:img41,

            },
          ].map((example, index) => (
            <div key={index} className="card p-5 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={example.img}
                alt={example.sector}
                className="w-full h-36 object-cover rounded-lg mb-3"
              />
              <h4 className="font-bold text-accent-900 mb-2">{example.sector}</h4>
              <p className="text-sm text-accent-600">{example.solution}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Looking for Waste Management Solutions?"
        description="Let us design a customized system that meets your treatment needs while optimizing costs and environmental performance."
        primaryText="Request Consultation"
        primaryLink="/enquiry"
        secondaryText="View All Services"
        secondaryLink="/services"
      />
    </>
  );
}

export default Management;
