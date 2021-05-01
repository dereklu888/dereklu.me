import React, { Component } from 'react';
import Icons from './icons';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgcolor: 'white',
      hide: ['hidden', 'hidden', 'hidden'],
    };
  }

  componentDidMount() {
    window.addEventListener('load', this.fadeIn);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.fadeIn);
  }

  fadeIn = () => {
    // this could all probably be done with vanilla es6 or jQuery, but I'll stick with React here for now
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        bgcolor: 'none',
      }));
    }, 2000);

    for (let i = 0; i < this.state.hide.length; i += 1) {
      setTimeout(() => {
        console.log(`setting state for ${i}`);
        this.setState((prevState) => ({
          ...prevState,
          hide: prevState.hide.map((curValue, index) => {
            return (index === i ? 'visible' : curValue);
          }),
        }));
      }, 2000 * ((i + 1) / 3));
    }
  }

  render() {
    return (
      <div id="home" className="section" style={{ backgroundColor: this.state.bgcolor }}>
        <h1>Derek Lu</h1>
        <Icons />
        <p>
          <span className={this.state.hide[0]}>Dartmouth &apos;23 </span>
          <span className={this.state.hide[1]}>Major in Computer Science. </span>
          <span className={this.state.hide[2]}>Pluviophile.</span>
        </p>

      </div>
    );
  }
}

export default Home;
