const darkMode = () => {
  $('main').toggleClass('dark-mode');
  $('div.card').toggleClass('bg-dark');
  $('nav.navbar').toggleClass('bg-dark');
};

$(document).on('click', 'a.logo-btn', darkMode);
// export default { darkMode };
