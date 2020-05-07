
const pulseMouseOverJumbotron = () => {
  $('.jumbotron').hover(() => {
    $('h1.display-1').toggleClass('animated').toggleClass('pulse');
    $('p.lead').toggleClass('animated').toggleClass('pulse');
  });
};

export default { pulseMouseOverJumbotron };
