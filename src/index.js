import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Bg from './img/bg1min.jpg';
import BgFull from './img/bg1.jpg';
import Resume from './docs/DerekLu-resume.pdf';

const RaindropFX = require('raindrop-fx');

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

  // window.onload = () => {
  //   setInterval(() => {
  //     document.getElementById('home').style.background = 'none';
  //   }, 2000);
  // };

  raindropFx.start();
} else {
  document.getElementById('canvas-base').style.backgroundImage = BgFull;
}
