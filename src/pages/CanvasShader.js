import React, { Component } from "react";
import './CanvasShader.css';

class CanvasShader extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      sqLen: 20,
      sqPad: 5,
      sidePad: 2.5,
      decay: 300,
      delay: 150,
      minNumSqs: 10,
      maxNumSqs: 30
    };
    this.drawSquares = this.drawSquares.bind(this);
    this.loop = this.loop.bind(this);
    this.del = this.del.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    let width = window.innerWidth * dpr;
    let height = ((window.innerHeight * 0.6) * dpr) * 0.6;
    this.setState({width: width, height: height});

    canvas.width = width;
    canvas.height = height;

    this.rAF = window.requestAnimationFrame(this.loop);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.rAF);
  }

  shouldComponentUpate() {
    return false;
  }

  drawSquares() {
    let {sqLen, sqPad, sidePad, decay, delay, minNumSqs, maxNumSqs } = 
        this.state;
    const canvas = this.canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      let totalLen = sqLen + sqPad;

      let numSqs = Math.floor((Math.random() * minNumSqs) + 
                            (maxNumSqs - minNumSqs));
      let xLoc = Math.floor((Math.random() * canvas.width) / totalLen)
                 * totalLen;
      let yLoc = Math.floor((Math.random() * canvas.height) / totalLen) 
                 * totalLen;
      let opBase = Math.random() + 0.5;
      let color = "";
      let randOp = Math.random();
      if (randOp < 0.2)
        color = "#BEFF5C";
      else if (randOp < 0.4)
        color = "#8CFFD7";
      else
        color = "#5EEAD1";


      for (let i = 0; i < numSqs; i++) {
        let opacity = opBase - (0.10 * i);
        if (opacity < 0)
          opacity = 0.01;
        else if (opacity > 1)
          opacity = 0;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.fillRect(xLoc + ((sqPad + sqLen) * i), yLoc, sqLen, sqLen);
      }
    }
    
  }

  loop() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let delay = this.state.delay;
      let decay = this.state.decay;

      let del = this.del;
      let drawSquares = this.drawSquares;
      let loop = this.loop;
      let rAF;
      window.setTimeout(function() {
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
      const ctx = canvas.getContext("2d");
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
   
  }

  render() {
    return (
      <div className="canvas-container">
       <canvas ref={this.canvasRef} className="canvy"/> 
      </div>
    );
  }
}


export default CanvasShader;

