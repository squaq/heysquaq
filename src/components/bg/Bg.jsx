import React, { Component } from 'react';
import './Bg.scss';

class Bg extends Component {


  createQuads() {
    const w = 300;
    const h = 300;
    const size = 50;
    let quadsEl = [];
    
    for(let x = 0; x < w; x += size) {
      for(let y = 0; y < h; y += size) {
        let rect = (
          <rect
            x={x} y={y} width={size} height={size}
            className="quad" style={{transformOrigin: `${x + (size/2)}px ${y + (size/2)}px`}} key={`${x}${y}`}/>
        );
        quadsEl.push(rect);
      }
    }
    return quadsEl;
  }

  render() {
    return (
      <div>
        <div className="bg"></div>
        <svg>
          <clipPath id="quads">
            {this.createQuads()}
          </clipPath>
        </svg>
      </div>
    );
  }
}

export default Bg;