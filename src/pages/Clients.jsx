// import { useEffect } from 'react';
// import PageHeader from '../components/PageHeader';
// import Section from '../components/Section';
// import CTA from '../components/CTA';
// import { updatePageMeta } from '../lib/seo';

// function Clients() {
//   useEffect(() => {
//     updatePageMeta({
//       title: 'Our Clients - EnviroTech Solutions',
//       description: 'Trusted by leading organizations across manufacturing, healthcare, construction, hospitality, and government sectors.',
//     });
//   }, []);

//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Clients' },
//   ];

//   const sectors = [
//     {
//       name: 'Manufacturing & Industrial',
//       icon: '🏭',
//       description: 'Environmental compliance, stack emission testing, and wastewater treatment for factories.',
//       examples: ['Automotive', 'Textiles', 'Chemicals', 'Pharmaceuticals', 'Electronics'],
//     },
//     {
//       name: 'Healthcare Facilities',
//       icon: '🏥',
//       description: 'Biomedical waste management, water testing, and indoor air quality assessments.',
//       examples: ['Hospitals', 'Clinics', 'Diagnostic Centers', 'Nursing Homes'],
//     },
//     {
//       name: 'Construction & Real Estate',
//       icon: '🏗️',
//       description: 'Building materials testing, environmental clearances, and site monitoring.',
//       examples: ['Residential Projects', 'Commercial Buildings', 'Infrastructure', 'Townships'],
//     },
//     {
//       name: 'Hospitality & Service',
//       icon: '🏨',
//       description: 'Water quality testing, wastewater treatment, and food safety testing.',
//       examples: ['Hotels', 'Resorts', 'Restaurants', 'Catering Services'],
//     },
//     {
//       name: 'Educational Institutions',
//       icon: '🎓',
//       description: 'Campus environmental monitoring, laboratory testing, and safety audits.',
//       examples: ['Universities', 'Schools', 'Research Centers', 'Training Institutes'],
//     },
//     {
//       name: 'Government & Public Sector',
//       icon: '🏛️',
//       description: 'Statutory monitoring, project evaluations, and compliance audits.',
//       examples: ['Municipalities', 'Public Works', 'Environmental Departments', 'PSUs'],
//     },
//   ];

//   const testimonials = [
//     {
//       quote: 'EnviroTech Solutions has been instrumental in helping us maintain environmental compliance. Their rapid response and accurate reporting have made them our preferred testing partner.',
//       author: 'Environmental Manager',
//       company: 'Leading Automotive Manufacturer',
//       sector: 'Manufacturing',
//     },
//     {
//       quote: 'The professionalism and technical expertise of their team is commendable. They helped us design and commission a wastewater treatment plant that exceeds discharge standards.',
//       author: 'Facilities Head',
//       company: 'Multi-Specialty Hospital',
//       sector: 'Healthcare',
//     },
//     {
//       quote: 'From environmental clearance to ongoing monitoring, their consultancy services have been invaluable. They understand both regulatory requirements and practical implementation.',
//       author: 'Project Director',
//       company: 'Real Estate Developer',
//       sector: 'Construction',
//     },
//   ];

//   return (
//     <>
//       <PageHeader
//         title="Our Clients"
//         description="Trusted by organizations across diverse sectors for environmental excellence"
//         breadcrumbs={breadcrumbs}
//       />

//       {/* Overview */}
//       <Section>
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-lg text-accent-600 leading-relaxed mb-6">
//             We are proud to serve a diverse portfolio of clients ranging from small enterprises to large corporations, from healthcare facilities to government departments. Our commitment to quality, reliability, and customer service has earned us long-term partnerships across industries.
//           </p>
//           <p className="text-lg text-accent-600 leading-relaxed">
//             Every client relationship is built on trust, technical competence, and understanding of specific industry requirements. We don't just provide services—we become partners in your environmental compliance and sustainability journey.
//           </p>
//         </div>
//       </Section>

//       {/* Sectors Served */}
//       <Section
//         title="Sectors We Serve"
//         subtitle="Tailored solutions for diverse industry requirements"
//         background="gray"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sectors.map((sector, index) => (
//             <div key={index} className="card p-6">
//               <div className="text-5xl mb-4">{sector.icon}</div>
//               <h3 className="text-xl font-bold text-accent-900 mb-3">
//                 {sector.name}
//               </h3>
//               <p className="text-accent-600 mb-4">{sector.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {sector.examples.map((example, idx) => (
//                   <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
//                     {example}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Testimonials */}
//       <Section
//         title="Client Testimonials"
//         subtitle="What our clients say about working with us"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="card p-6">
//               <div className="text-primary-600 text-4xl mb-4">"</div>
//               <p className="text-accent-600 mb-4 italic">{testimonial.quote}</p>
//               <div className="border-t border-accent-200 pt-4">
//                 <p className="font-semibold text-accent-900">{testimonial.author}</p>
//                 <p className="text-sm text-accent-600">{testimonial.company}</p>
//                 <span className="inline-block mt-2 px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
//                   {testimonial.sector}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Why Clients Choose Us */}
//       <Section
//         title="Why Clients Choose Us"
//         background="pattern"
//       >
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[
//             'ISO/NABL accredited laboratory ensuring result reliability',
//             'Rapid turnaround times without compromising quality',
//             'Experienced multidisciplinary technical team',
//             'Comprehensive service portfolio under one roof',
//             'Customized solutions for specific industry needs',
//             'Transparent pricing and detailed quotations',
//             'Proactive communication and regular updates',
//             'Technical support and consultation included',
//             'Legally defensible reports accepted by authorities',
//             'Long-term partnerships with ongoing support',
//             'Emergency response and rush services available',
//             'Training programs for client staff',
//           ].map((reason, index) => (
//             <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md">
//               <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-accent-700">{reason}</span>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Client Statistics */}
//       <Section>
//         <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-12 text-white text-center">
//           <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: '500+', label: 'Active Clients' },
//               { value: '2,500+', label: 'Projects Completed' },
//               { value: '50+', label: 'Cities Served' },
//               { value: '98%', label: 'Client Retention' },
//             ].map((stat, index) => (
//               <div key={index}>
//                 <div className="text-4xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-primary-100">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* CTA */}
//       <CTA
//         title="Join Our Growing Client Family"
//         description="Experience the difference of working with a committed environmental partner."
//         primaryText="Request Quote"
//         primaryLink="/enquiry"
//         secondaryText="Contact Us"
//         secondaryLink="/contact"
//       />
//     </>
//   );
// }

// export default Clients;




import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { updatePageMeta } from '../lib/seo';
import img1 from "../assets/Our Clients/img1.avif";
import img2 from "../assets/Our Clients/img2.avif";
import img3 from "../assets/Our Clients/img3.avif";
import img4 from "../assets/Our Clients/img4.avif";
import img5 from "../assets/Our Clients/img5.avif";
import img6 from "../assets/Our Clients/img6.jpg";
import img7 from "../assets/Our Clients/img7.avif";


function Clients() {
  useEffect(() => {
    updatePageMeta({
      title: 'Our Clients - EnviroTech Solutions',
      description: 'Trusted by leading organizations across manufacturing, healthcare, construction, hospitality, and government sectors.',
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Clients' },
  ];

  const sectors = [
    {
      name: 'Manufacturing & Industrial',
      icon: '🏭',
      description: 'Environmental compliance, stack emission testing, and wastewater treatment for factories.',
      examples: ['Automotive', 'Textiles', 'Chemicals', 'Pharmaceuticals', 'Electronics'],
      image: img1,
    },
    {
      name: 'Healthcare Facilities',
      icon: '🏥',
      description: 'Biomedical waste management, water testing, and indoor air quality assessments.',
      examples: ['Hospitals', 'Clinics', 'Diagnostic Centers', 'Nursing Homes'],
      image: img2,
    },
    {
      name: 'Construction & Real Estate',
      icon: '🏗️',
      description: 'Building materials testing, environmental clearances, and site monitoring.',
      examples: ['Residential Projects', 'Commercial Buildings', 'Infrastructure', 'Townships'],
      image: img3,
    },
    {
      name: 'Hospitality & Service',
      icon: '🏨',
      description: 'Water quality testing, wastewater treatment, and food safety testing.',
      examples: ['Hotels', 'Resorts', 'Restaurants', 'Catering Services'],
      image: img4,
    },
    {
      name: 'Educational Institutions',
      icon: '🎓',
      description: 'Campus environmental monitoring, laboratory testing, and safety audits.',
      examples: ['Universities', 'Schools', 'Research Centers', 'Training Institutes'],
      image: img5,
    },
    {
      name: 'Government & Public Sector',
      icon: '🏛️',
      description: 'Statutory monitoring, project evaluations, and compliance audits.',
      examples: ['Municipalities', 'Public Works', 'Environmental Departments', 'PSUs'],
      image: img6,
    },
  ];

  const testimonials = [
    {
      quote: 'EnviroTech Solutions has been instrumental in helping us maintain environmental compliance. Their rapid response and accurate reporting have made them our preferred testing partner.',
      author: 'Environmental Manager',
      company: 'Leading Automotive Manufacturer',
      sector: 'Manufacturing',
      image: img7,
    },
    {
      quote: 'The professionalism and technical expertise of their team is commendable. They helped us design and commission a wastewater treatment plant that exceeds discharge standards.',
      author: 'Facilities Head',
      company: 'Multi-Specialty Hospital',
      sector: 'Healthcare',
      image: img7,
    },
    {
      quote: 'From environmental clearance to ongoing monitoring, their consultancy services have been invaluable. They understand both regulatory requirements and practical implementation.',
      author: 'Project Director',
      company: 'Real Estate Developer',
      sector: 'Construction',
      image: img7,
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Clients"
        description="Trusted by organizations across diverse sectors for environmental excellence"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-accent-600 leading-relaxed mb-6">
            We are proud to serve a diverse portfolio of clients ranging from small enterprises to large corporations, from healthcare facilities to government departments. Our commitment to quality, reliability, and customer service has earned us long-term partnerships across industries.
          </p>
          <p className="text-lg text-accent-600 leading-relaxed">
            Every client relationship is built on trust, technical competence, and understanding of specific industry requirements. We don't just provide services—we become partners in your environmental compliance and sustainability journey.
          </p>
        </div>
      </Section>

      {/* Sectors Served */}
      <Section
        title="Sectors We Serve"
        subtitle="Tailored solutions for diverse industry requirements"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="card p-6">
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              {/* <div className="text-5xl mb-4">{sector.icon}</div> */}
              <h3 className="text-xl font-bold text-accent-900 mb-3">
                {sector.name}
              </h3>
              <p className="text-accent-600 mb-4">{sector.description}</p>
              <div className="flex flex-wrap gap-2">
                {sector.examples.map((example, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="Client Testimonials"
        subtitle="What our clients say about working with us"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-accent-600 mb-4 italic">{testimonial.quote}</p>
              <div className="border-t border-accent-200 pt-4 text-center">
                <p className="font-semibold text-accent-900">{testimonial.author}</p>
                <p className="text-sm text-accent-600">{testimonial.company}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Clients Choose Us */}
      <Section
        title="Why Clients Choose Us"
        background="pattern"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'ISO/NABL accredited laboratory ensuring result reliability',
            'Rapid turnaround times without compromising quality',
            'Experienced multidisciplinary technical team',
            'Comprehensive service portfolio under one roof',
            'Customized solutions for specific industry needs',
            'Transparent pricing and detailed quotations',
            'Proactive communication and regular updates',
            'Technical support and consultation included',
            'Legally defensible reports accepted by authorities',
            'Long-term partnerships with ongoing support',
            'Emergency response and rush services available',
            'Training programs for client staff',
          ].map((reason, index) => (
            <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md">
              <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-accent-700">{reason}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Client Statistics */}
      <Section>
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Active Clients' },
              { value: '2,500+', label: 'Projects Completed' },
              { value: '50+', label: 'Cities Served' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Join Our Growing Client Family"
        description="Experience the difference of working with a committed environmental partner."
        primaryText="Request Quote"
        primaryLink="/enquiry"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}

export default Clients;
