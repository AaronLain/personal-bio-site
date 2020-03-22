import utils from '../helpers/utils';

const createProjectCards = (projectArray) => {
  let domString = '';
  projectArray.forEach((project) => {
    if (project.available) {
      domString += '<div class="card border-dark mb-3 ">';
      // domString += `<h1 class='card-text'>${project.title}</h1>`;
      domString += `<img src=${project.screenshot} class="card-img-top" style="margin-top: 1.5rem;" alt="..."/>`;
      domString += '<div class="card-body">';
      domString += `<p class='card-text'>${project.description}</p>`;
      domString += `<p>Technology Used: ${project.techUsed}</p>`;
      domString += `<p class='card-text' style="text-align: center;"><a href=${project.githubUrl}>Github</a></p>`;
      domString += '</div>';
      domString += '</div>';
    }
    utils.printToDom('card-container', domString);
  });
};

export default { createProjectCards };
