import React from 'react';
import Header from '../Header/index';

function Nav(props) {
  const tabs = [ 'About', 'Projects', 'Resume', 'Contact'];

  return (
    <div id="page-header">
      <Header />

      <ul>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );



}

export default Nav;



