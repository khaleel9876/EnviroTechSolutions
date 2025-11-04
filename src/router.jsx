import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testing from './pages/Testing';
import Consultancy from './pages/Consultancy';
import Management from './pages/Management';
import Certifications from './pages/Certifications';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import NotFound from './pages/NotFound';

// When serving the app from GitHub Pages under a repo path
// (https://<user>.github.io/EnviroTechSolutions/), React Router needs a basename
// so route matching uses the repo subpath. We set basename to '/EnviroTechSolutions'.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/testing', element: <Testing /> },
      { path: 'services/consultancy', element: <Consultancy /> },
      { path: 'services/management', element: <Management /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'clients', element: <Clients /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'enquiry', element: <Enquiry /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], {
  basename: '/EnviroTechSolutions',
});