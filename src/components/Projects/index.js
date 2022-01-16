import React from 'react';

const Projects = () => {
    return (
      <section class="portfolio" id="my-portfolio">
        <h2>My Portfolio</h2>

        <div class="items">
          <a
            href="https://rprice000.github.io/run-buddy/"
            class="portfolio-item"
            id="run-buddy"
          >
            <div>Project Run Buddy</div>
          </a>

          <a
            href="https://rprice000.github.io/refactor/"
            class="portfolio-item"
            id="refactor"
          >
            <div>Project Refactor</div>
          </a>

          <a href="" class="portfolio-item" id="future-project">
            <div>Future Project A</div>
          </a>
        </div>

        <div class="items">
          <a href="" class="portfolio-item" id="future-project">
            <div>Future Project B</div>
          </a>

          <a href="" class="portfolio-item" id="future-project">
            <div>Future Project C</div>
          </a>

          <a href="" class="portfolio-item" id="future-project">
            <div>Future Project D</div>
          </a>
        </div>
      </section>
    );
}


export default Projects;