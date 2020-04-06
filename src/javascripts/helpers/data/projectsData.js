const projects = [
  {
    title: 'Pet Adoption',
    screenshot: 'https://i.ibb.co/ysVkhXK/Pet-Adoption-SS.jpg',
    description: 'A real cute pet adoption website for the lonley and longing.',
    techUsed: 'HTML, CSS, Flexbox, JavaScript',
    available: true,
    url: '',
    githubUrl: 'https://github.com/AaronLain/pet-adoption',
  },
  {
    title: 'Bear Watcher',
    screenshot: 'https://i.ibb.co/f146635/Screen-Shot-2020-03-02-at-18-11-00.png',
    description: 'A website for watching adorable bears catch fish.',
    techUsed: 'HTML, CSS, Bootstrap, JavaScript, JQuery',
    available: true,
    url: '',
    githubUrl: 'https://github.com/AaronLain/bear-watcher',
  },
  {
    title: 'Tamagotchi',
    // eslint-disable-next-line max-len
    screenshot: 'https://camo.githubusercontent.com/a420feddb8665ba0549ad41da66958b77f74a57c/68747470733a2f2f692e6962622e636f2f35474e634c57742f53637265656e2d53686f742d323032302d30332d31302d61742d31352d35362d31352e706e67',
    description: "90's nostalgia for your browser!",
    techUsed: 'HTML, CSS, Bootstrap, jQuery, JavaScript',
    available: true,
    url: '',
    githubUrl: 'https://github.com/AaronLain/tamagotchi',
  },
];

const getProjects = () => projects;

export default { getProjects };
