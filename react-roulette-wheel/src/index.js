import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';
import registerServiceWorker from './registerServiceWorker';

const handleOnComplete = (value) => {
  // console.log(value);
  alert(value);
};

const options = [
  "01",
  "03",
  "11",
  "02",
  "09",
  "73",
  "35",
  "41"
];

ReactDOM.render(<Roulette options={options} baseSize={200} onComplete={handleOnComplete}/>, document.getElementById('root'));
registerServiceWorker();
