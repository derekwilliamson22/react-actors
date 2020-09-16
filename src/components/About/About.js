import React, { Component } from 'react';

class About extends Component {


   render() {
    // see note in App.css for linebreak styling attribution
    let quote = `Don't think for a moment\n that I'm really like any of the characters I've played.\n I'm not. That's why it's called 'acting' - Leonardo DiCaprio"\n - Michael Scott`;
    return (
      <div className="About">
        <h2>About</h2>
        <p className="Quote">
        {quote}
        </p>
      </div>
    ); // end return
  } // end render
} // end About component

export default About;