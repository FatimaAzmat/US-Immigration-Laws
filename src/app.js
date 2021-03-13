import './main.css';
import {select} from 'd3-selection';
import PieChart from './charts/pie-chart';

fetch('./data/stateaggfinal.json')
  .then(x => x.json())
  .then(main);


const slides = [
  {
    render: data => PieChart(data),
  },
];

function main(data) {


  function renderSlide() {
    const currentSlide = slides[0];
    currentSlide.render(data);
  }
  renderSlide();
}


