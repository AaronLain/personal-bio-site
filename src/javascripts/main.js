import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projectBoard/projectBoard';

const init = () => {
  projects.buildProjectBoard();
};

init();
