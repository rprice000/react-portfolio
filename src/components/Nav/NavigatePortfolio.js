import React, { useState } from 'react';



import NavTabs from './index';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume'

function NavigatePortfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {

      case "About":   return  (<About />);
      case "Projects":   return  (<Projects />);
      case "Resume":  return  (<Resume />);
      case "Contact": return (<Contact />);
      default:      return (<About />)
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

