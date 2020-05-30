import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {

  infos = [
    { txt: 'My name is Everton but my friends call me Squaq' },
    { txt: 'I am a Brazilian who works deep into technology since 2007 and today my main focus is Frontend Development' },
    { txt: 'As Frontend Developer I have been working with a bunch of technogies including the main current SPAs in the marketing' },
  ];


  render() {
    let txts = this.infos.map( (txt, idx) => (
      <span
        className="cool-txt animate"
        style={{animationDelay: `${(idx + 1) * .2}s`}}
        key={idx}
      >{txt.txt}</span>
    ));

    return (
      <div className="homeContainer">
        <h1 className="cool-txt animate">Hey Squaq!</h1>
        <p>
          { txts }
        </p>
      </div>
    );
  }

}

export default Home;