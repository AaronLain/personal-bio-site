import utils from '../helpers/utils';

const createProjectCards = (projectArray) => {
  let domString = '';
  projectArray.forEach((project) => {
    if (project.available) {
      domString += '<div class="project-card">';
      domString += `<header class="cardheader"><h2>${project.title}</h2></header>`;
      domString += `<img src=${project.screenshot} alt="A screen shot of my ${project.title} project!">`;
      domString += '<h3>Technology Used:<h3>';
      domString += `<p>${project.techUsed}</p>`;
      domString += '<h3>Description:</h3>';
      domString += `<p>${project.description}</p>`;
      domString += `<a href=${project.url} target= "_blank">Project Url</a>`;
      domString += `<a href=${project.githubUrl} target= "_blank">Github Url</a>`;
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};

export default createProjectCards;
