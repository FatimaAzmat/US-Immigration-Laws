import './main.css';
import {select} from 'd3-selection';
import PieChart from './charts/pie-chart';

fetch('./data/stateaggfinal.json')
  .then(x => x.json())
  .then(main);


const slides = [
  {
    title: 'Exploring the correlation between immigration inclusivity and socio-political factors',
    content:'This scatterplot allows us to explore the correlation between four variables: Immigration Inclusivity Score, Percent Change of Foreign Born Population from 1990-2015, Gross State Product, and Political Ideology of the state',
    render: data => PieChart(data),
  },
];

function main(data) {

  // configuration stuff
  const header = select('#slide-detail h3');
  const body = select('#slide-detail p');

    // "draw loop"
  function renderSlide() {
    const currentSlide = slides[0];
    header.text(currentSlide.title);
    body.text(currentSlide.content);
    currentSlide.render(data);
  }
  renderSlide();
}


