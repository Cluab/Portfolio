const workcard = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    Fimage: 'img/Img Placeholder.svg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
];
let workcardtwo = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'worksec worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'workthree worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'workfour worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'worksec worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'workthree worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 6,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: 'workfour worktwo cards',
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
];

const workcards = document.querySelector('.rwboxbig');

function renderworkcards() {
  workcard.forEach((workcard) => {
    workcards.innerHTML += `
      
    <div class="RWbox"><h3 class="RWork">"My Recent works"</h3>
       <div class="workline"></div>
    </div>
      <div class="workone"><img class="workphoto"src="${workcard.Fimage}" alt="${workcard.name}">
        <div class="work-dis"><h4 class="first-Rwork">${workcard.name}</h4>
         <p class="work-dicreption">${workcard.description}.</p>
         <ul class="WoneTech">
          <li>${workcard.technologies[0]}</li>
          <li>${workcard.technologies[1]}</li>
          <li>${workcard.technologies[2]}</li>
          </ul>
        <button class="see-project" id="${workcard.id}">see project</button>
      </div> </div>
    `;
  });
}
renderworkcards();

const workcardgrid = document.querySelector('.diffrent-work');
function renderworkcardtwo() {
  workcardtwo.forEach((workcardtwo) => {
    workcardgrid.innerHTML += `
        <div class="${workcardtwo.Fimage}">
          <div class="work-box-three work-box-two">
            <h5 class="work-three-title work-two-title">${workcardtwo.name}</h5>
            <p class="work-three-dis work-two-dis">${workcardtwo.description}</p>
              <ul class="languages-work">
                <li class="html-box"><p class="code-name">${workcardtwo.technologies[0]}</li>
                <li class="bootstrap-box"><p class="code-name">${workcardtwo.technologies[1]}</p></li>
                <li class="ruby-box"><p class="code-name">${workcardtwo.technologies[2]}</p></li>
              </ul>
            </div>
            <button class="see-two see-two-box see-three-box show" id="${workcardtwo.id}">see Project</button>
           </div>
    `;
  });
}
renderworkcardtwo();

function popup(id) {
  console.log(id);
  if (id == 0) {
    workcardtwo = workcard;
  }
  workcardtwo.forEach((workcardpop) => {
    if (workcardpop.id / 2 === id / 2) {
      const main = document.createElement('div');
      main.className = 'main-popup';
      const popup = document.createElement('div');
      popup.className = 'popup';

      popup.innerHTML = `
<div class="popup-menu">
  <div class="popgap">
        <div class="popup-header">
           <h2 class="popup-title">${workcardpop.name}</h2>
           <h2 class="popup-title-2">${workcardpop.name}</h2>
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
     <p class="lorem">${workcardpop.description}</p>
   <p class="lorem-1">${workcardpop.description}</p>
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
    } else return;
  });
}
document.querySelector('.diffrent-work').addEventListener('click', (e) => {
  popup(e.target.getAttribute('id'));
});
document.querySelector('.rwboxbig').addEventListener('click', (e) => {
  popup(e.target.getAttribute('id'));
});
