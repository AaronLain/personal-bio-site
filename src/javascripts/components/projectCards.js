import utils from '../helpers/utils';

const createProjectCards = (projectArray) => {
  let domString = '';
  projectArray.forEach((project) => {
    if (project.available) {
      domString += '<div class="card col-4">';
      domString += `<h1 class='card-text'>${project.title}</h1>`;
      domString += `<img src=${project.screenshot} class="card-img-top" alt="..."/>`;
      domString += '<div class="card-body">';
      domString += `<p class='card-text'>${project.description}</p>`;
      domString += `<p class='card-text'>Technology Used:${project.techUsed}</p>`;
      domString += `<p class='card-text' href=${project.githubUrl}>Github</p>`;
      domString += '</div>';
      domString += '</div>';
    }
    utils.printToDom('card-container', domString);
  });
};

export default { createProjectCards };
