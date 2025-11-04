import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { updatePageMeta } from '../lib/seo';

// Import all images
import img1 from "../assets/imgs/img1.jpeg";
import img2 from "../assets/imgs/img2.jpeg";
import img3 from "../assets/imgs/img3.jpeg";
import img4 from "../assets/imgs/img4.jpeg";
import img5 from "../assets/imgs/img5.jpeg";
import img6 from "../assets/imgs/img6.jpeg";
import img7 from "../assets/imgs/img7.jpeg";
import img8 from "../assets/imgs/img8.jpeg";
import img9 from "../assets/imgs/img9.jpeg";
import img10 from "../assets/imgs/img10.jpeg";
import img11 from "../assets/imgs/img11.jpeg";
import img12 from "../assets/imgs/img12.jpeg";
import img13 from "../assets/imgs/img13.jpeg";
import img14 from "../assets/imgs/img14.jpeg";
import img15 from "../assets/imgs/img15.jpeg";
import img16 from "../assets/imgs/img16.jpeg";
import img17 from "../assets/imgs/img17.jpeg";
import img18 from "../assets/imgs/img18.jpeg";
import img19 from "../assets/imgs/img19.jpeg";



import img20 from '../assets/gallery/img1.jpeg';
import img21 from '../assets/gallery/img2.jpeg';
import img22 from '../assets/gallery/img3.jpeg';
import img23 from '../assets/gallery/img4.jpeg';
import img24 from '../assets/gallery/img5.jpeg';

// Optional: Import your brochure (place under /public or /assets/docs)
const brochurePath = "/assets/docs/brochure.pdf";

function Gallery() {
  useEffect(() => {
    updatePageMeta({
      title: 'Gallery - EnviroTech Solutions',
      description: 'View our laboratory facilities, field operations, treatment plants, and project implementations.',
    });
  }, []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ];

  const galleries = [
    {
      title: 'Laboratory Facilities',
      description: 'State-of-the-art analytical instruments and testing facilities',
      images: [
        { src: img1, alt: 'Analytical lab instrument' },
        { src: img2, alt: 'Laboratory bench and equipment' },
        { src: img3, alt: 'Microscopy and testing area' },
        { src: img4, alt: 'Sample preparation area' },
        { src: img5, alt: 'Field sampling in progress' },
        { src: img6, alt: 'Emission testing equipment onsite' },
        { src: img7, alt: 'Technician collecting samples' },
        { src: img8, alt: 'Monitoring instruments in the field' },
        { src: img9, alt: 'Wastewater treatment tanks' },
        { src: img10, alt: 'Clarifiers and process lines' },
        { src: img11, alt: 'Control room and panels' },
        { src: img12, alt: 'Site overview of treatment plant' },
        { src: img13, alt: 'Team training session' },
        { src: img14, alt: 'Project planning meeting' },
        { src: img15, alt: 'On-site safety briefing' },
        { src: img16, alt: 'Hands-on equipment training' },
        { src: img17, alt: 'Group photo' },
        { src: img18, alt: 'Field workshop' },
        { src: img19, alt: 'Certification ceremony' },
      ],
    },
    {
      title: 'Field Operations',
      description: 'Onsite sampling, stack emission testing, and environmental monitoring',
      images: [  { src: img4, alt: 'Sample preparation area' },
        { src: img5, alt: 'Field sampling in progress' },
        { src: img6, alt: 'Emission testing equipment onsite' },
        { src: img7, alt: 'Technician collecting samples' },
        { src: img8, alt: 'Monitoring instruments in the field' },
        { src: img9, alt: 'Wastewater treatment tanks' },
        { src: img10, alt: 'Clarifiers and process lines' },
        { src: img11, alt: 'Control room and panels' },
        { src: img12, alt: 'Site overview of treatment plant' },
        { src: img13, alt: 'Team training session' },
        { src: img14, alt: 'Project planning meeting' },]
    },
    {
      title: 'Treatment Plants',
      description: 'Wastewater and solid waste treatment systems we have designed and installed',
      images: Array(6).fill({
        alt: 'Treatment plant installations',
        placeholder: '♻️',
      }),
    },
    {
      title: 'Team & Training',
      description: 'Our experts at work and conducting training programs',
      images:[
        { src: img20, alt: 'Team members and training sessions' },
        { src: img21, alt: 'Team members and training sessions' },
        { src: img22, alt: 'Team members and training sessions' },
        { src: img23, alt: 'Team members and training sessions' },
        { src: img24, alt: 'Team members and training sessions' },
      ]
      
    },
  ];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Gallery"
        description="A visual journey through our facilities, operations, and project implementations"
        breadcrumbs={breadcrumbs}
      />

      {/* Image Sections */}
      {galleries.map((gallery, galleryIndex) => (
        <Section
          key={galleryIndex}
          title={gallery.title}
          subtitle={gallery.description}
          background={galleryIndex % 2 === 0 ? 'white' : 'gray'}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className={`w-full  ${image.src ? "h-auto" : "h-64" } rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-[1.02] duration-300`}
              >
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-200 text-4xl text-gray-500 h-full">
                    {image.placeholder || '🖼️'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* Video Section */}
      <Section
        title="Virtual Tour"
        subtitle="Take a virtual tour of our facilities"
        background="pattern"
      >
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-accent-800 to-accent-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-7xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-2">Virtual Tour Coming Soon</h3>
              <p className="text-accent-300">
                Experience our laboratory facilities and treatment plants through an interactive virtual tour.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Download Brochure */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-accent-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-accent-600 mb-8">
            Download our company brochure for detailed information about our services, capabilities, and certifications.
          </p>
          <a
            href={brochurePath}
            download
            className="btn-primary inline-flex items-center px-6 py-3 rounded-lg text-white bg-accent-700 hover:bg-accent-800 transition-all"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Brochure (PDF)
          </a>
        </div>
      </Section>
    </>
  );
}

export default Gallery;




// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PageHeader from '../components/PageHeader';
// import Section from '../components/Section';
// import { updatePageMeta } from '../lib/seo';

// // Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// // Import images
// import img1 from "../assets/imgs/img1.jpeg";
// import img2 from "../assets/imgs/img2.jpeg";
// import img3 from "../assets/imgs/img3.jpeg";
// import img4 from "../assets/imgs/img4.jpeg";
// import img5 from "../assets/imgs/img5.jpeg";
// import img6 from "../assets/imgs/img6.jpeg";
// import img7 from "../assets/imgs/img7.jpeg";
// import img8 from "../assets/imgs/img8.jpeg";
// import img9 from "../assets/imgs/img9.jpeg";
// import img10 from "../assets/imgs/img10.jpeg";
// import img11 from "../assets/imgs/img11.jpeg";
// import img12 from "../assets/imgs/img12.jpeg";
// import img13 from "../assets/imgs/img13.jpeg";
// import img14 from "../assets/imgs/img14.jpeg";
// import img15 from "../assets/imgs/img15.jpeg";
// import img16 from "../assets/imgs/img16.jpeg";
// import img17 from "../assets/imgs/img17.jpeg";
// import img18 from "../assets/imgs/img18.jpeg";
// import img19 from "../assets/imgs/img19.jpeg";

// const brochurePath = "/assets/docs/brochure.pdf";

// function Gallery() {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     updatePageMeta({
//       title: 'Gallery - EnviroTech Solutions',
//       description: 'View our laboratory facilities, field operations, treatment plants, and project implementations.',
//     });
//   }, []);

//   // ✨ Animate images with GSAP
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".gallery-image").forEach((img, i) => {
//         gsap.from(img, {
//           opacity: 0,
//           y: 40,
//           scale: 0.9,
//           duration: 0.8,
//           delay: i * 0.05,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: img,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });
//     }, galleryRef);

//     return () => ctx.revert();
//   }, []);

//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Gallery' },
//   ];

//   const galleries = [
//     {
//       title: 'Laboratory Facilities',
//       description: 'State-of-the-art analytical instruments and testing facilities',
//       images: [
//         { src: img1, alt: 'Analytical lab instrument' },
//         { src: img2, alt: 'Laboratory bench and equipment' },
//         { src: img3, alt: 'Microscopy and testing area' },
//         { src: img4, alt: 'Sample preparation area' },
//         { src: img5, alt: 'Field sampling in progress' },
//         { src: img6, alt: 'Emission testing equipment onsite' },
//         { src: img7, alt: 'Technician collecting samples' },
//         { src: img8, alt: 'Monitoring instruments in the field' },
//         { src: img9, alt: 'Wastewater treatment tanks' },
//         { src: img10, alt: 'Clarifiers and process lines' },
//         { src: img11, alt: 'Control room and panels' },
//         { src: img12, alt: 'Site overview of treatment plant' },
//         { src: img13, alt: 'Team training session' },
//         { src: img14, alt: 'Project planning meeting' },
//         { src: img15, alt: 'On-site safety briefing' },
//         { src: img16, alt: 'Hands-on equipment training' },
//         { src: img17, alt: 'Group photo' },
//         { src: img18, alt: 'Field workshop' },
//         { src: img19, alt: 'Certification ceremony' },
//       ],
//     },
//     {
//       title: 'Field Operations',
//       description: 'Onsite sampling, stack emission testing, and environmental monitoring',
//       images: Array(6).fill({
//         alt: 'Field testing and sampling operations',
//         placeholder: '🌍',
//       }),
//     },
//     {
//       title: 'Treatment Plants',
//       description: 'Wastewater and solid waste treatment systems we have designed and installed',
//       images: Array(6).fill({
//         alt: 'Treatment plant installations',
//         placeholder: '♻️',
//       }),
//     },
//     {
//       title: 'Team & Training',
//       description: 'Our experts at work and conducting training programs',
//       images: Array(4).fill({
//         alt: 'Team members and training sessions',
//         placeholder: '👥',
//       }),
//     },
//   ];

//   return (
//     <>
//       {/* Page Header */}
//       <PageHeader
//         title="Gallery"
//         description="A visual journey through our facilities, operations, and project implementations"
//         breadcrumbs={breadcrumbs}
//       />

//       {/* Image Sections with GSAP animation */}
//       <div ref={galleryRef}>
//         {galleries.map((gallery, galleryIndex) => (
//           <Section
//             key={galleryIndex}
//             title={gallery.title}
//             subtitle={gallery.description}
//             background={galleryIndex % 2 === 0 ? 'white' : 'gray'}
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {gallery.images.map((image, imageIndex) => (
//                 <div
//                   key={imageIndex}
//                   className="gallery-image w-full h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   {image.src ? (
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       loading="lazy"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center bg-gray-200 text-4xl text-gray-500 h-full">
//                       {image.placeholder || '🖼️'}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </Section>
//         ))}
//       </div>

//       {/* Video Section */}
//       <Section
//         title="Virtual Tour"
//         subtitle="Take a virtual tour of our facilities"
//         background="pattern"
//       >
//         <div className="max-w-4xl mx-auto">
//           <div className="aspect-video bg-gradient-to-br from-accent-800 to-accent-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
//             <div className="text-center text-white p-8">
//               <div className="text-7xl mb-4">🎥</div>
//               <h3 className="text-2xl font-bold mb-2">Virtual Tour Coming Soon</h3>
//               <p className="text-accent-300">
//                 Experience our laboratory facilities and treatment plants through an interactive virtual tour.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Download Brochure */}
//       <Section>
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-accent-900 mb-4">
//             Want to Learn More?
//           </h2>
//           <p className="text-lg text-accent-600 mb-8">
//             Download our company brochure for detailed information about our services, capabilities, and certifications.
//           </p>
//           <a
//             href={brochurePath}
//             download
//             className="btn-primary inline-flex items-center px-6 py-3 rounded-lg text-white bg-accent-700 hover:bg-accent-800 transition-all"
//           >
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             Download Brochure (PDF)
//           </a>
//         </div>
//       </Section>
//     </>
//   );
// }

// export default Gallery;
