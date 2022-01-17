import React from 'react';

const Resume = () => {
    return (
      <div className="resume">
        <h2>Resume of Reagan Price</h2>

        <a href="/src/assets/Reagan Price Resume.pdf">Click here to download full resume!</a>
        <br></br>

        <div id="resume-content">
        <div className="content-part" id="training-experience">

        <h3>Certifications</h3>
        <ul>
          <li>Cisco CCNA - Routing and Switching</li>
            <dt>Completed: March 21, 2010</dt>
          <li>N+ Certified</li>
            <dt>Completed: October 8, 2007</dt>
          <li>A+ Certified</li>
            <dt>Completed: April 2011</dt>
            <dt>Updated: October 8, 2006</dt>
          <li>HP Certification - H08-Servicing HP Desktops, Workstations, and Notebooks</li>
            <dt>Completed: September 29, 2005</dt>
          <li>Cisco Certification -Introduction to Telepresence Training Certificate of Completion</li>
            <dt>Completed: February 22, 2012</dt>
          <li>Dell Desktop Certified</li>
            <dt>Completed: May 21, 2004</dt>
          <li>Dell Laptop Certified</li>
            <dt>Completed: May 21, 2014</dt>
          <li>Dell Network Printer Certified</li>
            <dt>Completed: Oct. 15, 2004</dt>
        </ul>

        <h3>Education</h3>
        <ul>
            <li>Sam Houston State University </li>
              <dt>Bachelor of Business Administration - Major Business Administration - Minor in Management</dt>  
              <dt>Completed May 2010</dt>
            <li>University of Houston-Victoria</li>
              <dt>Masters in Entrepreneurship and Economic Development</dt>
              <dt>Completed December 2021</dt>
        </ul>
        </div>
        

        <div className="content-part" id="work-experience">
        <h3>Work Experience</h3>

        <h4>Humble ISD</h4>

        <p>Network Engineer</p>
        <ul>
            <li>Maintain network infrastructure for 34 elementary schools, 8 middle schools, 5 high schools, and 7 support buildings</li>
            <li>Troubleshot wired and wireless issues across the district</li>
            <li>Created database for workflow and process within IT department</li>
            <li>Managed and coordinated IT projects with contractors</li>
            <li>Created database of networking equipment, locations, and model numbers</li>
            <li>Upgraded firmware and software for Cisco Prime Infrastructure, servers, routers and switches</li>
            <li>Activated, toned, punched down network ports in closets and classrooms</li>
            <li>Ran copper and fiber cabling </li>
            <li>Remedied cabling issues in networking closets</li>
            <li>Worked with vendors to resolve district wide issues: Google, Cisco, NWN</li>

                
        </ul>

        <h4>Pflugerville ISD</h4>

        <p>Technical Support Manager</p>
        <ul>
            <li>Supported Connally High School, Westview Middle, and Parmer Lane, River Oaks, Northwest Elementary</li>
            <li>Remotely/personally troubleshot issues for school staff</li>
            <li>Troubleshot and repaired desktop, laptop, printer, and scanners</li>
            <li>Installed various software products: From Microsoft products to Learning software</li>
            <li>Installed peripheral devices: From Lumens camera to USB thermometer</li>
            <li>Coordinated disposal of old equipment</li>
            <li>Activated and toned network ports</li>
            <li>Updated inventory of schools</li>
            <li>Worked with vendors on software issues and updates</li>
            <li>Refreshed old equipment during the summer of 2013</li>

               
        </ul>

        <h4>Apex Systems</h4>

        <p>Dell Desktop Support</p>
        <ul>
            <li>Worked in the Seton Hospital environment</li>
            <li>Sole IT Supporter for Seton Hospitals on the weekends</li>
            <li>Supported over 800+ programs and software</li>
            <li>Coordinated installations with software/hardware vendors</li>
            <li>Coordinated ticket workflow</li>
            <li>Ran Server Monitoring program and reported issues accordingly</li>
            <li>Created software/hardware installation guides used by other IT workers</li>
            <li>Remotely/personally troubleshot issues for end users</li>
            <li>Replaced end user PCs and Laptops with new machines</li>
            <li>Updated inventory of Printers/PCs/Laptops</li>
            <li>Used BMC Remedy Ticketing Tool</li>
            <li>10-15 Tickets per day</li>

               
        </ul>

        <h4>Netsync Network Solutions</h4>

        <p>PC Field Lead Technician</p>
        <ul>
            <li>Troubleshoot and repair PCs and laptops in the Houston Independent School District</li>
            <li>Between 5-15 service tickets per day</li>
            <li>Trained new technicians in Troubleshooting Theory and repair of HP products</li>
            <li>Network cabling of HISD buildings</li>
            <li>Rollout of new equipment for HISD and surrounding school districts</li>
            <li>Tested Uninterrupted Power Supplies for servers</li>

              
        </ul>

        <h4>Barbers Hill ISD</h4>

        <p>Systems Analyst</p>
        <ul>
            <li>Updated and repaired computers - approximately 200 desktops and 1,100 laptops</li>	
            <li>Replaced hardware - keyboards, screens, CD drives, hard drives, and printers</li>
            <li>Installed software products - Windows, Microsoft Office, and printer software</li>
            <li>Maintained and organized the storage rooms</li>
            <li>Coordinate new equipment deployment and redistribution of existing assets</li>
            <li>Assisted teachers and faculty with computer related Helpdesk ticket issues</li>

        
        </ul>

        </div>

        </div>

      </div>
    );
}


export default Resume;