import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projectCards';
import data from './helpers/data/projectsData';

const init = () => {
  const projectCards = data.getProjects();
  projects.createProjectCards(projectCards);
  console.error(projectCards);
};

init();
