import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { updatePageMeta } from '../lib/seo';
import img1 from "../assets/aboutimages/img1.jpg";
import img2 from "../assets/aboutimages/img2.jpg";
import img3 from "../assets/aboutimages/img3.jpg";
import img4 from "../assets/aboutimages/img4.jpg";
import img5 from "../assets/aboutimages/img5.jpg";
import img6 from "../assets/aboutimages/img6.jpg";



gsap.registerPlugin(ScrollTrigger);

// ✅ Placeholder images (no CORS issues)
const images = {
  mission: img1,
  vision: img2,
  values: img3,
  capabilities: img4,
  story: img5,
  team: img6,
};

function About() {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  useEffect(() => {
    updatePageMeta({
      title: 'About Us - EnviroTech Solutions',
      description:
        'Learn about our mission, expertise, and commitment to environmental excellence with ISO/NABL accredited services.',
    });

    // ✨ Section fade + slide animation
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 60, width:0 },
        {
          autoAlpha: 1,
          width:100 + '%',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // ✨ Floating animation for images
    gsap.utils.toArray('.about-image').forEach((img) => {
      gsap.to(img, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ];

  const values = [
    { title: 'Quality Excellence', description: 'Maintaining highest standards in testing and analysis through rigorous quality control.', icon: '⭐' },
    { title: 'Technical Competence', description: 'Employing qualified professionals and state-of-the-art instrumentation.', icon: '🎓' },
    { title: 'Customer Focus', description: 'Understanding client needs and delivering tailored environmental solutions.', icon: '🤝' },
    { title: 'Sustainability', description: 'Promoting eco-friendly practices and resource conservation.', icon: '🌱' },
    { title: 'Innovation', description: 'Adopting cutting-edge technologies and methodologies.', icon: '💡' },
    { title: 'Integrity', description: 'Operating with transparency, honesty, and ethical practices.', icon: '✓' },
  ];

  const capabilities = [
    {
      title: 'Laboratory Infrastructure',
      items: [
        'Advanced analytical instruments',
        'Controlled testing environments',
        'Sample storage facilities',
        'Quality assurance systems',
      ],
    },
    {
      title: 'Technical Expertise',
      items: [
        'Environmental engineers',
        'Analytical chemists',
        'Microbiologists',
        'Safety consultants',
      ],
    },
    {
      title: 'Service Coverage',
      items: [
        'Pan-India operations',
        'Mobile testing units',
        'Onsite sampling',
        'Remote consultation',
      ],
    },
    {
      title: 'Industry Experience',
      items: [
        'Manufacturing sector',
        'Healthcare facilities',
        'Construction projects',
        'Government departments',
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="About EnviroTech Solutions"
        description="Your trusted partner in environmental testing, consultancy, and sustainable solutions"
        breadcrumbs={breadcrumbs}
      />

      {/* Mission & Vision */}
      <Section ref={addToRefs}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={images.mission}
            alt="Mission"
            className="about-image w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-accent-900 mb-4">Our Mission</h2>
            <p className="text-lg text-accent-600 leading-relaxed">
              To provide reliable, accurate, and timely environmental testing and consultancy
              services that enable organizations to meet regulatory requirements, protect public
              health, and operate sustainably.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <h2 className="text-3xl font-bold text-accent-900 mb-4">Our Vision</h2>
            <p className="text-lg text-accent-600 leading-relaxed">
              To be the leading environmental solutions provider recognized for technical
              competence, quality assurance, and contribution to environmental protection.
            </p>
          </div>
          <img
            src={images.vision}
            alt="Vision"
            className="about-image w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </Section>

      {/* Core Values */}
      <Section ref={addToRefs} title="Our Core Values" subtitle="The principles that guide our work and relationships" background="gray">
        <img
          src={images.values}
          alt="Core Values"
          className="about-image rounded-2xl mb-8 w-full h-auto object-cover shadow-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="card p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-accent-900 mb-2">{value.title}</h3>
              <p className="text-accent-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section  className='' ref={addToRefs} title="Our Capabilities" subtitle="Infrastructure, expertise, and reach to serve your environmental needs">
       <div className='className="max-w-4xl mx-auto"'>
        <img
          src={images.capabilities}
          alt="Capabilities"
          className="about-image rounded-2xl mb-8 w-full h-80 object-cover shadow-md"
        />
        <div className="grid grid-cols-1 mx-[20%]   md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            // <div key={index} className="card p-6 border-l-2 border-t-2 border-[#10b981] bg-white rounded-xl shadow-sm hover:shadow-md transition hover:border-r-2 hover:border-left-0 hover:border-[#10b981] duration-[5s]">
            
            <div
  key={index}
  className="card p-6 bg-white border-l-2 border-t-2 border-[#10b981] rounded-xl shadow-sm transition duration-500 "
 
  onMouseEnter={(e) =>
    gsap.to(e.currentTarget, { scale: 1.03, duration: 2, borderRight:2 , borderBottom :2, ease: 'power1.inOut' })
  }
  onMouseLeave={(e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 1, borderRight:0, borderBottom :0 , ease: 'power3.inOut' })
  }
>
            <h3 className="text-xl font-bold text-accent-900 mb-4">{capability.title}</h3>
              <ul className="space-y-3">
                {capability.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-accent-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </Section>

      {/* Story */}
      <Section ref={addToRefs} background="pattern">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Story</h2>
          <img
            src={images.story}
            alt="Our Story"
            className="about-image rounded-2xl shadow-lg object-cover w-full h-auto mb-8"
          />
        </div>
        <div className="prose prose-lg max-w-none text-accent-600 mx-auto">
          <p>
            Established with a vision to bridge the gap between environmental compliance and
            operational efficiency, EnviroTech Solutions has grown from a small testing facility
            to a comprehensive environmental services provider.
          </p>
          <p>
            Over the years, we have expanded our capabilities to include not just testing
            services, but also expert consultancy and turnkey waste management solutions.
          </p>
          <p>
            Today, we serve hundreds of clients across industries including manufacturing,
            healthcare, construction, hospitality, and government sectors.
          </p>
          <p>
            Our accreditations from ISO and NABL validate our technical competence, while our
            client relationships demonstrate our commitment to excellence.
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section ref={addToRefs} title="Multidisciplinary Expertise">
        <div className="max-w-4xl mx-auto">
          <img
            src={images.team}
            alt="Our Team"
            className="about-image rounded-2xl shadow-md mb-8 w-full h-64 object-cover"
          />
          <p className="text-lg text-accent-600 mb-8 text-center">
            Our strength lies in our diverse team of professionals who bring specialized
            knowledge from various environmental disciplines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { role: 'Environmental Engineers', description: 'Design treatment systems, conduct impact assessments, and develop sustainable solutions.' },
              { role: 'Analytical Chemists', description: 'Perform complex chemical analysis using advanced instrumentation and validated methods.' },
              { role: 'Microbiologists', description: 'Conduct biological testing for water, food, and environmental samples.' },
              { role: 'Safety Consultants', description: 'Assess workplace hazards and ensure compliance with health and safety regulations.' },
              { role: 'Regulatory Specialists', description: 'Navigate environmental laws and assist with permits, clearances, and compliance.' },
              { role: 'Quality Assurance Team', description: 'Maintain laboratory standards and ensure accuracy through rigorous quality control.' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-primary-600 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-accent-900 mb-2">{member.role}</h3>
                <p className="text-accent-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export default About;
