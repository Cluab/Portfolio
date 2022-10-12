const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-nav');
const logo = document.querySelector('.name');
const bars = document.querySelector('.bars');
const project = document.querySelector('.work-section');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  bars.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
}));

const workcardpop = [
  {
    id: 0,
    name: ['Multi-Post Stories', 'Keeping track of hundreds  of components website'],
    description:
           ['Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent',
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."],
    Fimage: 'img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  }];

function popup() {
  workcardpop.forEach((workcardpop) => {
    project.addEventListener('click', () => {
      const main = document.createElement('div');
      main.className = 'main-popup';
      const popup = document.createElement('div');
      popup.className = 'popup';

      popup.innerHTML = `
<div class="popup-menu">
  <div class="popgap">
        <div class="popup-header">
           <h2 class="popup-title">${workcardpop.name[0]}</h2>
           <h2 class="popup-title-2">${workcardpop.name[1]}</h2>
           <button class="close-button">&times;</button>
        </div>
        <div class="popup-languages">
        <ul class="languages-work">
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardpop.technologies[0]}</li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardpop.technologies[1]}</p></li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardpop.technologies[2]}</p></li>
        </ul>
 </div>
   </div>
   <div class ="desktop-popup">
   <img class='popup-image' src="img/Snapshoot Portfolio.png" alt="popup work preview">
   <div class="popup-end">
     <p class="lorem">${workcardpop.description[0]}</p>
   <p class="lorem-1">${workcardpop.description[1]}</p>
    <div class="popuplinks"><a href="${workcardpop.Llive}">
    <button class="live">See Live<img src="img/Icon.png" alt="icon-image"></button></a>
    <a href="${workcardpop.Lsource}">
    <button class="live">See Source<img src="img/Vector.png" alt="github-icon"></button></a></div>
    </div>
    </div></div>      
`;

      main.appendChild(popup);
      body.appendChild(main);

      const close = document.querySelector('.close-button');
      const closebtn = document.querySelector('.popuplinks');
      close.addEventListener('click', () => {
        body.removeChild(main);
      });
      closebtn.addEventListener('click', () => {
        body.removeChild(main);
      });
    });
  });
}
popup();