

// Comment Down - import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


// import Courses from './pages/Courses';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Advisors from './components/advisors/Advisors';
import Privacy from './components/privacy/Privacy';
import Contact from './components/contact/Contact';
import MasterDigitalMarketing from './components/courses/MasterDigitalMarketing';

import MasterBusinessAnalytics from './components/courses/MasterBusinessAnalytics';
import Training from './components/training/Training';
import Enquire from './components/enquire/Enquire';
import Upbatch from './components/upbatch/Upbatch';
import Testimonials from './components/testimonials/Testimonials';
import Gallery from './components/gallery/Gallery';
import Form from './components/form/Form';
import DataScience from './components/courses/DataScience';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>

     <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/master-digital-marketing" element={<MasterDigitalMarketing />} />
        <Route path="/master-business-analytics" element={<MasterBusinessAnalytics />} />
        <Route path="/training-academy" element={<Training />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/upbatch" element={<Upbatch />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<Form />} />
         <Route path="/master-data-science" element={<DataScience />} />
         

       {/* <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
         */ /* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </>
    </Router>
  );
}
export default App;