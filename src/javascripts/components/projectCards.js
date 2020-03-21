import utils from '../helpers/utils';

const createProjectCards = (projectArray) => {
  let domString = '';
  projectArray.forEach((project) => {
    if (project.available) {
      domString += '<div class="card" style="width: 18rem;">';
      domString += `<img src=${project.screenshot} class="card-img-top" alt="...">`;
      domString += '<div class="card-body">';
      domString += `<h2 class='card-text'>${project.title}</h2>`;
      domString += `<p class='card-text'>${project.description}</p>`;
      domString += `<p class='card-text'>Technology Used:${project.techUsed}</p>`;
      domString += `<p class='card-text' href=${project.githubUrl}>Github</p>`;
      domString += '</div>';
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};

export default createProjectCards;
