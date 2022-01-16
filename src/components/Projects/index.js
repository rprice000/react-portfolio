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

          <a href="" className="portfolio-item" id="future-project">
            <div>Future Project A</div>
          </a>
        </div>

        <br></br>
        
        <div className="items">
          <a href="" className="portfolio-item" id="future-project">
            <div>Future Project B</div>
          </a>

          <a href="" className="portfolio-item" id="future-project">
            <div>Future Project C</div>
          </a>

          <a href="" className="portfolio-item" id="future-project">
            <div>Future Project D</div>
          </a>
        </div>
      </section>
    );
}


export default Projects;