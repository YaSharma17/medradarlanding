import React,{ useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import Sticky from 'sticky-js';
import 'aos/dist/aos.css';
import './fonts.css';

import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';
import UntitledPage from './components/UntitledPage/index1';



function App() {
  useEffect(() => {
    AOS.init({ offset: 100 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Router hashType="noslash" basename={process.env.BASE_PATH}>
      <Routes>
        <Route
          exact
          path="/"
          element={<><Header /><Hero /><Services /><Testimonials /><Footer /></>}
        />
        <Route exact path="/UntitledPage" element={<UntitledPageWithSticky />} />
      </Routes>
    </Router>
  );
}

function UntitledPageWithSticky() {
  useEffect(() => {
    const stickyInstance = new Sticky('.sticky-element');
    return () => stickyInstance.destroy();
  }, []);

  return (
    <div className="sticky-element">
      <UntitledPage />
    </div>
  );
}

export default App;
