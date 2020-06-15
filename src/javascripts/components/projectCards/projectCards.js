const createProjectCards = (project) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12">';
  domString += `<div id=${project.id} class="card">`;
  domString += `<img src=${project.screenshot} class="card-img-top" style="margin-top: 1.5rem;" alt="..."/>`;
  domString += '<div class="card-body">';
  domString += `<h4 class="card-title" style="text-align: center;">${project.title}</h4>`;
  domString += `<p class='card-text'>${project.description}</p>`;
  domString += `<p>Technology Used: ${project.techUsed}</p>`;
  domString += `<p class='card-text' style="text-align: center;"><a href=${project.githubUrl}>Github</a></p>`;
  domString += `<p class='card-text' style="text-align: center;"><a href=${project.url}>URL</a></p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { createProjectCards };
