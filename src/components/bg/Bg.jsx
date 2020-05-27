import React, { Component } from 'react';
import './Bg.scss';

class Bg extends Component {
  createQuads() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log('createQuads', (100 * (w / h).toFixed(0)))
    const size = (100 * (w / h).toFixed(0));
    let quadsEl = [];
    let cont = 0;
    for(let x = 0; x < w; x += size) {
      for(let y = 0; y < h; y += size) {
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

  render() {
    return (
      <div>
        <div className="bg"></div>
        <svg width={window.innerWidth} height={window.innerHeight}>
          <clipPath id="quads">
            {this.createQuads()}
          </clipPath>
        </svg>
      </div>
    );
  }
}

export default Bg;