/* eslint-disable import/prefer-default-export */
const animationsMarkup = {
  blink: `
  @keyframes blink {
    0%  { opacity: 0; }
    33% { opacity: 1; }
  }
  
  .logo .logo-bar {
    animation-name: blink;
    animation-direction: alternate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }`,

  pulse: `
  @keyframes pulse {
    0%  { transform: rotateX(90deg); }
    75% { transform: rotateX(0deg);  }
  }
  
  .logo .logo-bar {
    animation-name: pulse;
    animation-direction: alternate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  
    transform-origin: center center;
  }`,

  stagger: `
  @keyframes stagger-bar1 {
    0%  { transform: rotateX(90deg); }
    9% { transform: rotateX(0deg);  }
  }
  @keyframes stagger-bar2 {
    0%  { transform: rotateX(90deg); }
    4%  { transform: rotateX(90deg); }
    23% { transform: rotateX(0deg);  }
  }
  @keyframes stagger-bar3 {
    0%  { transform: rotateX(90deg); }
    23%  { transform: rotateX(90deg); }
    41% { transform: rotateX(0deg);  }
  }
  @keyframes stagger-bar4 {
    0%  { transform: rotateX(90deg); }
    36%  { transform: rotateX(90deg); }
    60% { transform: rotateX(0deg);  }
  }
  
  .logo .logo-bar {
    animation-direction: alternate;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  
    transform-origin: center center;
  }
  
  .logo .logo-bar-1 { animation-name: stagger-bar1; }
  .logo .logo-bar-2 { animation-name: stagger-bar2; }
  .logo .logo-bar-3 { animation-name: stagger-bar3; }
  .logo .logo-bar-4 { animation-name: stagger-bar4; }`,
}

export {
  animationsMarkup,
}
