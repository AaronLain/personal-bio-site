import 'bootstrap';
import '../styles/main.scss';


import projects from './components/projectBoard/projectBoard';
import animate from './components/animation/animate';

const init = () => {
  $(document).ready(animate.pulseMouseOverCards);
  animate.pulseMouseOverJumbotron();
  projects.buildProjectBoard();
};

init();
