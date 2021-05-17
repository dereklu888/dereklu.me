import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import Home from './components/home';
import Bg from './img/bg1min.jpg';
import BgFull from './img/bg1.jpg';
import Resume from './docs/DerekLu-resume.pdf';
import Portrait from './img/derek.jpg';

const RaindropFX = require('raindrop-fx');

const About = (props) => {
  return (
    <div id="about" className="section">
      <div className="row about-wrapper">
        <div className="column">
          <h2>About me</h2>
          <ul>
            <li>My name&apos;s Derek and I&apos;m a Dartmouth &apos;23, majoring in CS!</li>
            <li>I&apos;m originally from Austin, Texas, where I learned to love the rain - a cool respite from hot days.</li>
            <li>Besides programming, I&apos;m interested in cybersecurity.</li>
            <li>I&apos;m also involved with CoderDojo at Dartmouth, where I teach CS to schools around Dartmouth with less access to CS resources.</li>
            <li>As for hobbies, I enjoy playing unconventional video games, D&amp;D, and experiencing the natural world on long walks or hikes.</li>
          </ul>
        </div>

        <img src={Portrait} alt="Derek Lu at Dartmouth" />

      </div>
    </div>
  );
};

const Work = (props) => {
  return (
    <div id="work" className="section">
      <div className="column work-wrapper">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Tech Fellow for Dartmouth&apos;s <a href="https://codepath.org/">Codepath Cybersecurity Course</a></h3>
            <ul>
              <li>Taught Dartmouth students cybersecurity concepts and practices</li>
              <li>Topics included XSS, SQLi, session hijacking, and more.</li>
              <li>Used tools like Burp Suite, Kali Linux, sqlmap, and metasploit.</li>
            </ul>
          </li>

          <li>
            <h3>Cybersecurity Intern @ <a href="https://ipwe.com/">IPwe</a></h3>
            <ul>
              <li>Researched documentation and wrote up evaluations of security implementations based on what they could offer to the company,
                which were referenced extensively in the progression of IPwe’s security initiative.
              </li>
              <li>Obtained hands-on experience in infrastructure security implementations and devops
                through investigating how security checks in software development can be automated in CI/CD pipelines with Docker containers.
              </li>
              <li>Reviewed and analyzed the security solutions and packages offered to IPwe by a Blue Chip vendor.</li>
              <li>Resolved critical exposure of sensitive data on an internal development tool after conducting a review of its configuration.</li>
            </ul>
          </li>

          <li>
            <h3>Teaching Assistant at Dartmouth for COSC 50 (Software Design and Implementation)</h3>
            <ul>
              <li>Worked in tandem with the professor to advance student understanding of bash and C programming in a class of over 60 students.</li>
              <li>Independently graded student lab assignments and hosted three hours of open office hours per week for students of all grades.</li>
              <li>Communicated class progress and areas for improvement in weekly TA meetings.</li>
            </ul>
          </li>

          <li>
            <h3>Research Assistant for the Dartmouth <a href="https://ists.dartmouth.edu/">Institute for Security, Technology and Society (ISTS)</a></h3>
            <ul>
              <li>Synthesized research projects
                and produced write-ups for publication on the <a href="https://cs.dartmouth.edu/dsail/projects.html">Dartmouth Security and Artificial Intelligence Lab (DSAIL) website</a>,
                giving other researchers and industry experts a coherent overview of the projects.
              </li>
              <li>Projects covered included how a malware’s family can be predicted,
                sockpuppet social media account detection, predicting a vulnerability’s severity based on Twitter data, and others.
              </li>
            </ul>
          </li>

          <li>
            <h3>Software Development Intern @ <a href="https://www.aiworldwide.com/">American Innovations</a></h3>
            <ul>
              <li>Improved the development cycle of the Pipeline Compliance System (PCS) program by using SQL and Python to update the testing databases, making them more reflective of real data.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState((prevState) => ({
        scroll: true,
      }));
    } else {
      this.setState((prevState) => ({
        scroll: false,
      }));
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <nav className={this.state.scroll ? 'nav-fill' : ''}>
          <div className="row menu">
            <ul className="navbar-element">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href={Resume}>Resume</a></li>
            </ul>
          </div>
        </nav>

        <Home />

        <About />

        <Work />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));

// All of the below is outside React
if (document.getElementById('canvas').getContext('webgl2')) {
  const canvas = document.querySelector('#canvas');
  let rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  const raindropFx = new RaindropFX({
    canvas,
    background: Bg,
    spawnLimit: 750,
    spawnInterval: [0.3, 0.8],
  });

  const resizeRender = () => {
    rect = canvas.getBoundingClientRect();
    raindropFx.resize(rect.width, rect.height);
  };

  const dresize = debounce(resizeRender, 100);

  // used just for performance improvement on window resizing
  window.onresize = () => {
    dresize();
  };

  raindropFx.start();
} else {
  document.getElementById('canvas-base').style.backgroundImage = BgFull;
}
