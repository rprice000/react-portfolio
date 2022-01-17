import React from 'react';

const Projects = () => {
    return (
      <section className="portfolio" id="my-portfolio">
        <h2>My Portfolio</h2>

        <div className="items">
          <a
            href="https://rprice000.github.io/run-buddy/"
            className="portfolio-item"
            id="run-buddy"
          >
            <div>Project Run Buddy</div>
          </a>

          <a
            href="https://rprice000.github.io/refactor/"
            className="portfolio-item"
            id="refactor"
          >
            <div>Project Refactor</div>
          </a>

          <a href="https://rprice000.github.io/texas-stargazing/" 
          className="portfolio-item" 
          id="stargazing">
            <div>Stargazing</div>
          </a>
        </div>

        <br></br>
        
        <div className="items">
          <a href="https://note-taker-rprice000.herokuapp.com/" 
          className="portfolio-item" 
          id="notetaker">
            <div>Note Taker App</div>
          </a>

          <a href="https://secure-tundra-62908.herokuapp.com/login" 
          className="portfolio-item" 
          id="techticket">
            <div>Tech Ticket System</div>
          </a>

          <a href="https://glacial-gorge-90101.herokuapp.com/" 
          className="portfolio-item" 
          id="budgettracker">
            <div>Budget Tracker</div>
          </a>
        </div>
      </section>
    );
}


export default Projects;