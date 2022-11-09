const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-nav');
const logo = document.querySelector('.name');
const bars = document.querySelector('.bars');
const project = document.querySelector('.see-project');
const body = document.querySelector('body');
const projects = document.querySelector('.see-two');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  bars.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('active');
  })
);

function popup() {
  workcard.forEach((workcard) => {
    project.addEventListener('click', () => {
      const main = document.createElement('div');
      main.className = 'main-popup';
      const popup = document.createElement('div');
      popup.className = 'popup';

      popup.innerHTML = `
<div class="popup-menu">
  <div class="popgap">
        <div class="popup-header">
           <h2 class="popup-title">${workcard.name}</h2>
           <h2 class="popup-title-2">${workcard.name}</h2>
           <button class="close-button">&times;</button>
        </div>
        <div class="popup-languages">
        <ul class="languages-work">
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcard.technologies[1]}</li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcard.technologies[2]}</p></li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcard.technologies[3]}</p></li>
        </ul>
 </div>
   </div>
   <div class ="desktop-popup">
   <img class='popup-image' src="${workcard.Fimage}" alt="popup work preview">
   <div class="popup-end">
     <p class="lorem">${workcard.description}</p>
   <p class="lorem-1">${workcard.description}</p>
    <div class="popuplinks"><a href="${workcard.Llive}">
    <button class="live">See Live<img src="img/Icon.png" alt="icon-image"></button></a>
    <a href="${workcard.Lsource}">
    <button class="live">See Source<img src="img/Vector.png" alt="github-icon"></button></a></div>
    </div>
    </div></div>`;

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

function works() {
  workcardtwo.forEach((workcardtwo) => {
    projects.addEventListener('click', () => {
      // if (projects.id === workcardtwo.id ){
      const main = document.createElement('div');
      main.className = 'main-popup';
      const popup = document.createElement('div');
      popup.className = 'popup';

      popup.innerHTML = `
<div class="popup-menu">
  <div class="popgap">
        <div class="popup-header">
           <h2 class="popup-title">${workcardtwo.name}</h2>
           <h2 class="popup-title-2">${workcardtwo.name}</h2>
           <button class="close-button">&times;</button>
        </div>
        <div class="popup-languages">
        <ul class="languages-work">
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardtwo.technologies[1]}</li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardtwo.technologies[2]}</p></li>
                <li class=" popup-lan-box"><p class="code-name pop-name">${workcardtwo.technologies[3]}</p></li>
        </ul>
 </div>
   </div>
   <div class ="desktop-popup">
   <img class='popup-image' src="${workcardtwo.Fimage}" alt="popup work preview">
   <div class="popup-end">
     <p class="lorem">${workcardtwo.description}</p>
   <p class="lorem-1">${workcardtwo.description}</p>
    <div class="popuplinks"><a href="${workcardtwo.Llive}">
    <button class="live">See Live<img src="img/Icon.png" alt="icon-image"></button></a>
    <a href="${workcardtwo.Lsource}">
    <button class="live">See Source<img src="img/Vector.png" alt="github-icon"></button></a></div>
    </div>
    </div></div>`;

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
works();
