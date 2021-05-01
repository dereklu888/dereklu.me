import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import Home from './components/home';

const RaindropFX = require('raindrop-fx');

const App = (props) => {
  return (
    <div className="content-wrapper">
      <nav>
        <div className="row menu">
          <ul className="navbar-element">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="//dereklu.me">Resume</a></li>
          </ul>
        </div>
      </nav>

      <Home />

      <div id="about" className="section">
        <div className="row about-wrapper">
          <div className="column">
            <h2>About me</h2>
            <ul>
              <li>I&apos;m Derek, an avid coder and </li>
              <li>I love rainy days, away from the heat of</li>
              <li>Avid D&amp;D player and Critter</li>
            </ul>
          </div>

          <img src="src/img/derek.jpg" alt="Derek Lu at Dartmouth" />

        </div>
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

const canvas = document.querySelector('#canvas');
let rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

const raindropFx = new RaindropFX({
  canvas,
  background: 'src/img/bg1min.jpg',
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

window.onload = () => {
  setInterval(() => {
    document.getElementById('home').style.background = 'none';
  }, 2000);
};

raindropFx.start();
