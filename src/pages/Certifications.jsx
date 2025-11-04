

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import AccreditationGrid from '../components/AccreditationGrid';
import { updatePageMeta } from '../lib/seo';
import { certifications, accreditationImportance } from '../data/certifications';
import img1 from '../assets/certifications&Accreditations/img1.avif';
import img2 from '../assets/certifications&Accreditations/img2.avif';
import img3 from '../assets/certifications&Accreditations/img3.avif';
import img4 from '../assets/certifications&Accreditations/img4.avif';
import img5 from '../assets/certifications&Accreditations/img5.avif';
import img6 from '../assets/certifications&Accreditations/img6.avif';
import img7 from '../assets/certifications&Accreditations/img7.avif';
import img8 from '../assets/certifications&Accreditations/img8.avif';
import img9 from '../assets/certifications&Accreditations/img9.avif';

gsap.registerPlugin(ScrollTrigger);

function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    updatePageMeta({
      title: 'Certifications & Accreditations - EnviroTech Solutions',
      description:
        'ISO 9001, ISO 45001, ISO 17025, NABL, and CPCB accreditations demonstrating our commitment to quality and technical competence.',
    });

    const elements = sectionRef.current.querySelectorAll('.fade-up');
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const images = {
    quality:
     img1,
      iso: img2,
      nabl: img3,
     compliance:img4,
      audit:img5,
      recognition: img6,
    };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Certifications & Accreditations"
        description="Recognized for quality, safety, and technical excellence"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Certifications' },
        ]}
      />

      {/* Importance Section */}
      <Section>
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-3xl font-bold text-accent-900 mb-6 text-center">
            {accreditationImportance.title}
          </h2>
          <p className="text-lg text-accent-600 leading-relaxed mb-6 text-center">
            {accreditationImportance.content}
          </p>

          <img
            src={images.quality}
            alt="Quality management system"
            className="rounded-2xl shadow-md mx-auto mb-8 w-full max-w-3xl object-cover fade-up"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accreditationImportance.points.map((point, i) => (
              <div
                key={i}
                className="flex items-start bg-primary-50 rounded-lg p-4 fade-up"
              >
                <svg
                  className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-accent-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications Grid */}
      <Section
        title="Our Accreditations"
        subtitle="Internationally recognized certifications for quality and competence"
        background="gray"
      >
        <div className="fade-up">
          <AccreditationGrid certifications={certifications} />
        </div>
      </Section>

      {/* ISO Standards */}
      <Section title="Understanding ISO Standards">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="fade-up">
              <h3 className="text-xl font-bold text-accent-900 mb-3">
                What is ISO Certification?
              </h3>
              <p className="text-accent-600 mb-4">
                ISO (International Organization for Standardization) develops
                and publishes international standards that ensure quality,
                safety, and efficiency across industries.
              </p>
              <p className="text-accent-600">
                Our ISO certifications reflect our commitment to excellence,
                safety, and efficiency in laboratory operations.
              </p>
            </div>
            <img
              src={images.iso}
              alt="ISO certification process"
              className="rounded-2xl shadow-md w-full object-cover fade-up"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img
              src={images.recognition}
              alt="NABL accredited laboratory"
              className="rounded-2xl shadow-md w-full object-cover fade-up"
            />
            <div className="fade-up">
              <h3 className="text-xl font-bold text-accent-900 mb-3">
                What is NABL Accreditation?
              </h3>
              <p className="text-accent-600 mb-4">
                NABL (National Accreditation Board for Testing and Calibration
                Laboratories) ensures our lab has technical competence to
                produce reliable, valid results.
              </p>
              <p className="text-accent-600">
                NABL-accredited reports are accepted by government agencies and
                regulatory authorities nationwide.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="fade-up">
              <h3 className="text-xl font-bold text-accent-900 mb-3">
                Regulatory Approvals
              </h3>
              <p className="text-accent-600 mb-4">
                In addition to ISO and NABL, we’re authorized by pollution
                control boards and environmental ministries for compliance.
              </p>
              <p className="text-accent-600">
                CPCB and MoEF&CC approvals ensure our reports are accepted for
                statutory compliance.
              </p>
            </div>
            <img
              src={images.compliance}
              alt="Environmental compliance certificate"
              className="rounded-2xl shadow-md w-full object-cover fade-up"
            />
          </div>
        </div>
      </Section>

      {/* Audit Section */}
      <Section title="Maintaining Our Standards" background="pattern">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <p className="text-lg text-accent-600 mb-8">
            We undergo regular audits and continuous monitoring to maintain our
            accredited status.
          </p>
          <img
            src={images.audit}
            alt="Audit and compliance"
            className="rounded-2xl shadow-md mx-auto mb-10 w-full max-w-3xl object-cover fade-up"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Internal Audits',
                description:
                  'Regular self-assessments to ensure procedures are followed.',
                frequency: 'Quarterly',
              },
              {
                title: 'External Audits',
                description:
                  'Third-party assessments by accreditation bodies.',
                frequency: 'Annual',
              },
              {
                title: 'Proficiency Testing',
                description:
                  'Inter-laboratory comparisons for accurate results.',
                frequency: 'Ongoing',
              },
            ].map((audit, i) => (
              <div key={i} className="card p-6 text-center fade-up">
                <h3 className="text-lg font-bold text-accent-900 mb-2">
                  {audit.title}
                </h3>
                <p className="text-accent-600 mb-3">{audit.description}</p>
                <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                  {audit.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Client Benefits */}
      <Section title="Benefits for Our Clients">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Legal Validity',
              description:
                'Reports accepted by courts and regulatory authorities.',
              img: images.compliance,
            },
            {
              title: 'International Recognition',
              description:
                'Globally recognized accreditations under MRAs.',
              img: images.recognition,
            },
            {
              title: 'Reliable Results',
              description:
                'Confidence in accuracy and precision of test data.',
              img: images.quality,
            },
            {
              title: 'Compliance Assurance',
              description:
                'Meet regulatory requirements easily with certified reports.',
              img: images.compliance,
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="card p-6 flex flex-col items-center text-center fade-up"
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="rounded-xl mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-lg font-bold text-accent-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-accent-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Certifications;
