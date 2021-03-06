import projectsData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';
import projectComponent from '../projectCards/projectCards';

const buildProjectBoard = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += projectComponent.createProjectCards(project);
      });
      utils.printToDom('card-container', domString);
    })
    .catch((err) => console.error('get projects broke', err));
};

export default { buildProjectBoard };
