const createProjectCards = (project) => {
  let domString = '';
  domString += '<div class="card border-dark mb-3 ">';
  domString += `<img src=${project.screenshot} class="card-img-top" style="margin-top: 1.5rem;" alt="..."/>`;
  domString += '<div class="card-body">';
  domString += `<p class='card-text'>${project.description}</p>`;
  domString += `<p>Technology Used: ${project.techUsed}</p>`;
  domString += `<p class='card-text' style="text-align: center;"><a href=${project.githubUrl}>Github</a></p>`;
  domString += `<p class='card-text' style="text-align: center;"><a href=${project.url}>URL</a></p>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { createProjectCards };
