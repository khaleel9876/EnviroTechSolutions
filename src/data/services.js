import img2 from "../assets/consultancyServices/img2.avif"
import img3 from "../assets/consultancyServices/img3.avif"
import img4 from "../assets/consultancyServices/img4.avif"
import img5 from "../assets/consultancyServices/img5.avif"
import img6 from "../assets/consultancyServices/img6.avif"
import img7 from "../assets/consultancyServices/img7.avif"





// waste & Wate Water Management
import img22 from "../assets/wasteWastewaterManagement/img22.avif"
import img23 from "../assets/wasteWastewaterManagement/img23.avif"
import img24 from "../assets/wasteWastewaterManagement/img24.avif"
import img25 from "../assets/wasteWastewaterManagement/img25.avif"
import img26 from "../assets/wasteWastewaterManagement/img26.avif"
import img27 from "../assets/wasteWastewaterManagement/img27.avif"
import img28 from "../assets/wasteWastewaterManagement/img28.avif"
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


export const serviceCategories = [
  {
    id: 'testing',
    title: 'Environmental Testing',
    slug: 'testing',
    icon: '🔬',
    description: 'Comprehensive testing services for air, water, wastewater, food, and building materials with state-of-the-art laboratory facilities.',
    href: '/services/testing',
    services: [
      {
        name: 'Ambient Air Quality Testing',
        description: 'Monitoring of outdoor air quality parameters including particulate matter, gases, and pollutants as per CPCB standards.',
        features: ['PM2.5 & PM10 Analysis', 'SO2, NOx, CO Testing', 'VOC Monitoring', 'Continuous Monitoring Systems'],
      },
      {
        name: 'Stack Emission Monitoring',
        description: 'Industrial stack emission testing for compliance with regulatory norms and environmental clearances.',
        features: ['Flue Gas Analysis', 'Particulate Matter Testing', 'Opacity Measurement', 'Emission Load Calculation'],
      },
      {
        name: 'Indoor Air Quality Assessment',
        description: 'Evaluation of indoor environments for offices, schools, hospitals, and residential spaces.',
        features: ['CO2 & CO Levels', 'Temperature & Humidity', 'Biological Contaminants', 'VOC Analysis'],
      },
      {
        name: 'Water Quality Testing',
        description: 'Complete analysis of drinking water, groundwater, surface water, and treated water samples.',
        features: ['Physical Parameters', 'Chemical Analysis', 'Microbiological Testing', 'Heavy Metals Detection'],
      },
      {
        name: 'Wastewater Analysis',
        description: 'Testing of industrial and domestic wastewater for treatment efficiency and discharge compliance.',
        features: ['BOD & COD Testing', 'Total Dissolved Solids', 'pH & Conductivity', 'Nutrient Analysis'],
      },
      {
        name: ' Agricultural soil Testing',
        description: 'Safety and quality testing for food products, agricultural produce, and soil samples.',
        features: [ 'Nutritional Analysis', 'Soil Fertility Testing'],
      },
      {
        name: 'Building Materials Testing',
        description: 'Assessment of construction materials for asbestos, lead, and other hazardous substances.',
        features: ['Asbestos Identification', 'Lead Paint Testing', 'Material Composition', 'Safety Certification'],
      },
    ],
  },
  {
    id: 'consultancy',
    title: 'Environmental Consultancy',
    slug: 'consultancy',
    icon: '📋',
    description: 'Expert guidance on environmental compliance, regulatory requirements, and sustainable practices for industries.',
    href: '/services/consultancy',
    services: [
      {
        name: 'Environmental Compliance',
        description: 'Assistance with obtaining and maintaining environmental clearances and regulatory approvals.',
        features: ['EC Applications', 'Consent Management', 'Audit Support', 'Documentation Services'],
        img:img2,
      },
      {
        name: 'Legal Metrology Services',
        description: 'Compliance support for weights and measures regulations in commercial and industrial settings.',
        features: ['Instrument Calibration', 'License Applications', 'Regulatory Compliance', 'Training Programs'],
        img:  img3,
      },
      {
        name: 'Factory & Boiler Safety',
        description: 'Safety audits and compliance services for factories, boilers, and pressure vessels.',
        features: ['Safety Audits', 'Boiler Inspections', 'License Renewals', 'Training & Awareness'],
        img:img4,
      },
      {
        name: 'Industrial Safety Consulting',
        description: 'Comprehensive safety assessments and hazard identification for industrial facilities.',
        features: ['Risk Assessment', 'Safety Protocols', 'Emergency Planning', 'Worker Training'],
        img:
        img5,},
      {
        name: 'Environmental Impact Assessment',
        description: 'Detailed EIA studies for project approvals and environmental planning.',
        features: ['Baseline Studies', 'Impact Prediction', 'Mitigation Strategies', 'Public Consultation'],
        img:img6,
      },
      {
        name: 'Sustainability Consulting',
        description: 'Strategic guidance for implementing sustainable practices and green initiatives.',
        features: ['Carbon Footprint', 'Energy Audits', 'Green Building', 'Waste Reduction'],
        img:img7,
      },
    ],
  },
  {
    id: 'management',
    title: 'Waste & Wastewater Management',
    slug: 'management',
    icon: '♻️',
    description: 'Turnkey solutions for waste treatment, wastewater management, and resource recovery with eco-friendly technologies.',
    href: '/services/management',
    services: [
      {
        name: 'Wastewater Treatment Solutions',
        description: 'Design, installation, and operation of effluent treatment plants for various industries.',
        features: ['ETP Design', 'Plant Installation', 'O&M Services', 'Performance Optimization'],
        img:
        img22
      },
      {
        name: 'Solid Waste Management',
        description: 'Comprehensive waste segregation, collection, and disposal services for commercial establishments.',
        features: ['Waste Segregation', 'Collection Systems', 'Recycling Programs', 'Disposal Management'],
        img:img23
      },
      {
        name: 'Hazardous Waste Handling',
        description: 'Safe collection, transportation, and disposal of hazardous industrial waste.',
        features: ['Waste Characterization', 'Authorized Transport', 'TSDF Coordination', 'Documentation'],
        img:img24
      },
      {
        name: 'Biomedical Waste Management',
        description: 'Specialized services for healthcare facilities following biomedical waste management rules.',
        features: ['Color-Coded Segregation', 'Safe Collection', 'Treatment & Disposal', 'Training Programs'],
        img:
        img26},
      {
        name: 'E-Waste Recycling',
        description: 'Responsible disposal and recycling of electronic waste and electrical equipment.',
        features: ['Collection Services', 'Data Destruction', 'Component Recovery', 'Certification'],
        img:
        img27},
      {
        name: 'Resource Recovery',
        description: 'Innovative solutions for recovering valuable resources from waste streams.',
        features: ['Material Recovery', 'Energy Generation', 'Composting', 'Circular Economy'],
        img:
        img28},
    ],
  },
];

export const serviceBenefits = [
  {
    title: 'Certified Excellence',
    description: 'Alldescription: All testing conducted in NABL-accredited laboratories following ISO 17025 standards.',
    icon: '✓',
  },
  {
    title: 'Rapid Turnaround',
    description: 'Quick report generation without compromising accuracy or quality of analysis.',
    icon: '⚡',
  },
  {
    title: 'Expert Team',
    description: 'Multidisciplinary professionals with extensive experience in environmental sciences.',
    icon: '👥',
  },
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art instruments and methodologies for precise measurements.',
    icon: '🔧',
  },
  {
    title: 'Compliance Support',
    description: 'End-to-end assistance with regulatory requirements and documentation.',
    icon: '📄',
  },
  {
    title: 'Sustainable Solutions',
    description: 'Eco-friendly approaches that balance environmental protection with operational needs.',
    icon: '🌱',
  },
];