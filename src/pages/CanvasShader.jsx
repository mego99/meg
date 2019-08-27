import React, { Component } from 'react';
import './CanvasShader.css';

class CanvasShader extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      sqLen: 30,
      sqPad: 5,
      decay: 600,
      delay: 300,
      minNumSqs: 10,
      maxNumSqs: 30,
    };
    this.drawSquares = this.drawSquares.bind(this);
    this.loop = this.loop.bind(this);
    this.del = this.del.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth * dpr;
    const height = ((window.innerHeight * 0.6) * dpr) * 0.6;

    canvas.width = width;
    canvas.height = height;

    this.rAF = window.requestAnimationFrame(this.loop);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.rAF);
  }

  drawSquares() {
    const { sqLen, sqPad, minNumSqs, maxNumSqs } = this.state;
    const canvas = this.canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const totalLen = sqLen + sqPad;

      /* generate random int between minNumSqs and maxNumSqs */
      const numSqs = Math.floor((Math.random() * (maxNumSqs - minNumSqs)) + minNumSqs);

      const xLoc = Math.floor((Math.random() * canvas.width) / totalLen) * totalLen;
      const yLoc = Math.floor((Math.random() * canvas.height) / totalLen) * totalLen;

      const opBase = Math.random() + 0.5;
      let color = '';
      const randOp = Math.random();
      if (randOp < 0.2) color = '#BEFF5C';
      else if (randOp < 0.4) color = '#8CFFD7';
      else color = '#5EEAD1';

      for (let i = 0; i < numSqs; i++) {
        let opacity = opBase - (0.10 * i);
        if (opacity < 0) opacity = 0.01;
        else if (opacity > 1) opacity = 0;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.fillRect(xLoc + ((sqPad + sqLen) * i), yLoc, sqLen, sqLen);
      }
    }
  }

  loop() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const { delay } = this.state;
      const { decay } = this.state;

      const { del } = this;
      const { drawSquares } = this;
      const { loop } = this;
      let rAF;
      window.setTimeout(() => {
        rAF = window.requestAnimationFrame(del);
        for (let i = 0; i < decay; i++) {
          window.requestAnimationFrame(drawSquares);
        }
        rAF = window.requestAnimationFrame(loop);
      }, delay);
      this.rAF = rAF;
    }
  }

  del() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  }

  render() {
    return (
      <div className="canvas-container">
        <canvas ref={this.canvasRef} className="canvy" />
      </div>
    );
  }
}


export default CanvasShader;
