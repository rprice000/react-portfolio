import React from 'react';


function Nav(props) {
    const tabs = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <ul>
          {tabs.map(tab => (
            <li key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      );



}

export default Nav;



// return (
//     <nav>
//     <ul>

//       <li>
        
//        Home
      
//       </li>

//       <li>
        
//           About
        
//       </li>

//       <li>
        
//           Projects
        
//       </li>

//       <li>
        
//           Contact
        
//       </li>

//     </ul>
//   </nav>
// )