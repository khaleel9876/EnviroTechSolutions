import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { updatePageMeta, updateStructuredData } from '../lib/seo';
import { getServiceSchema } from '../lib/schema';
import { serviceCategories } from '../data/services';
import img1 from "../assets/consultancyServices/img1.avif"
// import img2 from "../assets/consultancyServices/img2.avif

import img8 from "../assets/consultancyServices/img8.avif"
import img9 from "../assets/consultancyServices/img9.avif"
// import img10 from "../assets/consultancyServices/img10.avif"
import img11 from "../assets/consultancyServices/img11.avif"
import img12 from "../assets/consultancyServices/img12.avif"
import img13 from "../assets/consultancyServices/img13.avif"
import img14 from "../assets/consultancyServices/img14.avif"
import img15 from "../assets/consultancyServices/img15.avif"
import img16 from "../assets/consultancyServices/img16.avif"
import img17 from "../assets/consultancyServices/img17.avif"
import img18 from "../assets/consultancyServices/img18.avif"
import img19 from "../assets/consultancyServices/img19.avif"
import img20 from "../assets/consultancyServices/img20.avif"
import img21 from "../assets/consultancyServices/img21.avif"

function Consultancy() {
  const servicesRef = useRef([]);
  const regulatoryRef = useRef([]);
  const consultationRef = useRef([]);
  const benefitsRef = useRef([]);

  useEffect(() => {
    updatePageMeta({
      title: 'Environmental Consultancy Services - EnviroTech Solutions',
      description: 'Expert guidance on environmental compliance, regulatory requirements, EIA, safety audits, and sustainable practices.',
    });
    updateStructuredData(getServiceSchema('Environmental Consultancy Services'));

    // Services cards animation
    gsap.from(servicesRef.current, {
      // opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Regulatory support cards animation
    gsap.from(regulatoryRef.current, {
      // opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
      ease: "power3.out",
    });

    // Consultation process cards animation
    gsap.from(consultationRef.current, {
      // opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 0.6,
      ease: "power3.out",
    });

    // Benefits animation
    gsap.from(benefitsRef.current, {
      // opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.9,
      ease: "power2.out",
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Consultancy Services' },
  ];

  const consultancyCategory = serviceCategories.find(cat => cat.id === 'consultancy');

  return (
    <>
      <PageHeader
        title="Environmental Consultancy Services"
        description="Expert guidance for environmental compliance and sustainable operations"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <img
            src={img1}
            alt="Environmental Consultancy"
            className="w-full rounded-lg mb-6"
          />
          <p className="text-lg text-accent-600 leading-relaxed mb-6">
            Navigate the complex landscape of environmental regulations with our expert consultancy services. Our team of environmental engineers, legal compliance specialists, and safety consultants provides end-to-end support for obtaining clearances, maintaining compliance, and implementing sustainable practices.
          </p>
          <p className="text-lg text-accent-600 leading-relaxed">
            From Environmental Impact Assessments to factory safety audits, we offer comprehensive solutions tailored to your industry and operational requirements. Our consultants stay updated with evolving regulations to ensure your operations remain compliant and sustainable.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section
        title="Consultancy Services"
        subtitle="Comprehensive guidance across environmental and safety domains"
        background="gray"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {consultancyCategory?.services.map((service, index) => (
            <div
              key={index}
              ref={el => servicesRef.current[index] = el}
              className="card p-6 transform hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
            >
              <img
                src={service.img || "https://images.unsplash.com/photo-1564866657312-0a064f7ad0c5?auto=format&fit=crop&w=800&q=80"}
                alt={service.name}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-accent-900 mb-3">{service.name}</h3>
              <p className="text-accent-600 mb-4">{service.description}</p>
              <h4 className="font-semibold text-accent-800 mb-2">Our Services Include:</h4>
              <ul className="space-y-2">
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

      {/* Regulatory Support */}
      <Section
        title="Regulatory Compliance Support"
        subtitle="Navigate environmental laws and obtain necessary clearances"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Environmental Clearance',
              description: 'Assistance with EC applications for new projects or expansions under MoEF&CC guidelines.',
              icon: '📋',
              image: img8
            },
            {
              title: 'Consent to Establish/Operate',
              description: 'Support for obtaining and renewing CTE/CTO from State Pollution Control Boards.',
              icon: '✅',
              image: img9
            },
            {
              title: 'Hazardous Waste Authorization',
              description: 'Applications for handling, storage, and disposal of hazardous waste.',
              icon: '☢️',
              image:img11
              
            },
            {
              title: 'Water/Air Act Compliance',
              description: 'Ensuring compliance with Water Act 1974 and Air Act 1981 provisions.',
              icon: '💧',
              image:img12
            },
            {
              title: 'Waste Management Rules',
              description: 'Compliance with E-Waste, Plastic Waste, Biomedical Waste management rules.',
              icon: '♻️',
              image: img13
            },
            {
              title: 'Factory Act Compliance',
              description: 'Registration, license renewal, and compliance under Factories Act 1948.',
              icon: '🏭',
              image:img14
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={el => regulatoryRef.current[index] = el}
              className="card p-6 hover:shadow-xl transition-shadow"
            >
              <img src={item.image} alt={item.title} className="w-full rounded-lg mb-3" />
              {/* <div className="text-4xl mb-3">{item.icon}</div> */}
              <h3 className="text-lg font-bold text-accent-900 mb-2">{item.title}</h3>
              <p className="text-sm text-accent-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Consultation Process */}
      <Section
        title="Our Consultation Approach"
        background="pattern"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[ 
            { title: 'Initial Assessment', description: 'Site visit and document review to understand your operations, compliance status, and environmental aspects.', image: img15 },
            { title: 'Gap Analysis', description: 'Identify gaps between current practices and regulatory requirements, highlighting areas needing attention.', image:img16 },
            { title: 'Action Plan', description: 'Develop comprehensive compliance plan with timelines, responsibilities, and resource requirements.', image: img17 },
            { title: 'Implementation Support', description: 'Guide you through documentation, applications, measurements, and corrective actions.', image: img18 },
            { title: 'Regulatory Liaison', description: 'Coordinate with pollution control boards and regulatory authorities on your behalf.', image: img19 },
            { title: 'Ongoing Monitoring', description: 'Regular audits and updates to ensure continued compliance with evolving regulations.', image: img20 },
          ].map((phase, index) => (
            <div
              key={index}
              ref={el => consultationRef.current[index] = el}
              className="bg-white rounded-lg p-6 border-l-4 border-secondary-600"
            >
              <img src={phase.image} alt={phase.title} className="w-full rounded-lg mb-3" />
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-accent-900">{phase.title}</h3>
              </div>
              <p className="text-accent-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Benefits of Our Consultancy">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Avoid penalties and legal issues',
            'Streamline clearance processes',
            'Expert interpretation of regulations',
            'Cost-effective compliance solutions',
            'Reduce environmental liabilities',
            'Enhance corporate reputation',
            'Access to regulatory networks',
            'Training for your staff',
          ].map((benefit, index) => (
            <div
              key={index}
              ref={el => benefitsRef.current[index] = el}
              className="flex items-center card p-4"
            >
              <img
                src={img21}
                alt="Benefit"
                className="w-12 h-12 rounded-full mr-3 flex-shrink-0"
              />
              <span className="text-accent-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Need Expert Guidance?"
        description="Schedule a consultation to discuss your environmental compliance needs and develop a customized action plan."
        primaryText="Schedule Consultation"
        primaryLink="/enquiry"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default Consultancy;
