import React, { Component } from 'react';
import './Bg.scss';

class Bg extends Component {
  state = {showChild: false};
  createQuads() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = (100 * (w / h).toFixed(0));
    let quadsEl = [];
    let cont = 0;
    for(let y = 0; y < h; y += size) {
      for(let x = 0; x < w; x += size) {
        let rect = (
          <rect
            x={x} y={y} width={size} height={size}
            className="quad" style={
              {
                transformOrigin: `${x + (size/2)}px ${y + (size/2)}px`,
                animationDelay: `${cont * .02}s`
              }} key={`${x}${y}`
            }/>
        );
        quadsEl.push(rect);
        cont++;
      }
    }
    return quadsEl;
  }
  componentDidMount() {
    const timetend = (window.innerWidth * window.innerHeight) / 1000;
    console.log('timetend', timetend)
    setTimeout(() => {
      this.setState({showChild: true});
    }, timetend);

  }
  render() {
    return (
      <div>
        <div className="container container--bg">
          <div className="bg"></div>
          <svg width={window.innerWidth} height={window.innerHeight}>
            <clipPath id="quads">
              {this.createQuads()}
            </clipPath>
          </svg>
        </div>
        <div className="container container--child">
          {
          this.state.showChild && 
          this.props.children}
        </div>
      </div>
    );
  }
}

export default Bg;