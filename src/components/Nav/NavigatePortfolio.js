import React, { useState } from 'react';



import NavTabs from './index';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume'

function NavigatePortfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {

      case "About":   return  (<About />);
      case "Projects":   return  (<Projects />);
      case "Resume":  return  (<Resume />);
      case "Contact": return (<Contact />);
      default:      return (<Home />)
   }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
          //
        }
      </div>
    </div>
  );
}

export default NavigatePortfolio;

