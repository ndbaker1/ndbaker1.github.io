import { Component } from 'solid-js';
import './App.scss';

const App: Component = () => {

  return (
    <div id='resume'>
          <div id="header">
    <h2>Nicholas Baker</h2>
    <div>
      <p><img src="https://img.icons8.com/material-rounded/192/ffffff/address.png" width="20px"/> Plano, TX</p >
      <p><img src="https://img.icons8.com/fluency-systems-filled/96/ffffff/phone.png" width="20px"/> (972) 330-6048</p >
      <p><img src="https://img.icons8.com/material-rounded/192/ffffff/mail.png" width="20px" />
        <a href="mailto:ndbaker1@outlook.com">ndbaker1@outlook.com</a>
      </p>
      <p><img src="https://img.icons8.com/ios-glyphs/120/ffffff/repository.png" width="20px" />
        <a href="https://github.com/ndbaker1">github.com/ndbaker1</a>
      </p>
    </div>
  </div>
  <div id="side">
    <div id="education">
      <h2 class="section-title">education</h2>
      <hr/>

      <div>
        <h4> M.S. in Cyber Security </h4>
        <p>University of Texas at Dallas</p>
        <p>
          <img src="https://img.icons8.com/material-outlined/192/calendar--v1.png" width="20px" />
          August 2022 - Present
        </p>
      </div>

      <div>
        <h4> B.S. in Computer Science </h4>
        <p>University of Texas at Dallas</p>
        <p>
          <img src="https://img.icons8.com/material-outlined/192/calendar--v1.png" width="20px" />
          August 2019 - May 2022
        </p>
      </div>
    </div>

    <div id="skills">
      <h2 class="section-title">skills</h2>
      <hr/>
      <div>
        <h4>Tools</h4>
        <p>
          Docker, React, Angular, Spring, Hibernate, Jenkins, PostgreSQL, Terraform, Maven, Google Cloud Platform,
          Android, OAuth, Svelte
        </p>
        <h4>Languages</h4>
        <p>
          Rust, Kotlin, Typescript & Javascript, Python, HTML/CSS, Java, C/C++, SQL, GraphQL, Shell Scripting
        </p>
      </div>
    </div>

  </div>
  <div id="main">

    <h2 class="section-title">work experience</h2>
    <hr/>

    <div class="summary">
      <h4>Software Development Engineer Intern</h4>
      <p>Amazon Web Services <br/> May 2022 - Present | Seattle, Washington </p>

      <ul>
        <li>
          <p>
            AWS SageMaker
          </p>
        </li>
      </ul>
    </div>

    <div class="summary">
      <h4> Software Developer </h4>
      <p> Tritech Software Development <br/> June 2020 - March 2022 | Allen, TX </p>
      <ul>
        <li>
          <p>
            Contributed towards replatforming a monolithic Java product to a Cloud Provider and refactoring it into REST
            microservices using Kotlin, Spring, Hibernate, and PostgreSQL.
          </p>
        </li>
        <li>
          <p>
            Supervised Auth0 integrations and configured several extensions to the authentication pipelines.
          </p>
        </li>
        <li>
          <p>
            Provisioned and maintained cloud environments using Terraform and created Jenkins CI/CD jobs to orchestrate
            builds, dockerization, artifact staging, and deployments.
          </p>
        </li>
        <li>
          <p>
            Led the process of bringing frontend (Angular) development in-house from a consulting partner
          </p>
        </li>
        <li>
          <p>
            Set up end-to-end testing pipeline through Cypress and Jenkins CI/CD
          </p>
        </li>
        <li>
          <p>
            Updated ETL Batch jobs aggregating data for Apache Superset
          </p>
        </li>
      </ul>
    </div>

    <h2 class="section-title">competitions</h2>
    <hr/>

    <div class="summary">
      <h4> HackUTD VII: Lend-A-Hand </h4>
      <p> February 2021 | Richardson, TX </p>
      <ul>
        <li>
          <p>
            Web App that provides a forum for sharing/lending tools to those in your community
          </p>
        </li>
        <li>
          <p>
            2st place winner for Texas Outage Recovery Solution (sponsored by StateFarm)
          </p>
        </li>
      </ul>
    </div>

    <div class="summary">
      <h4> HackUTD VI: News Unchained </h4>
      <p> November 2019 | Richardson, TX </p>
      <ul>
        <li>
          <p>
            Chrome extension to scan online articles and identify bias using Google Cloud Natural Language API
          </p>
        </li>
        <li>
          <p>
            1st place winner for Best Text Objectivity Analysis (sponsored by Cognizant)
          </p>
        </li>
      </ul>
    </div>
  </div>
    </div>
  );
};

export default App;
