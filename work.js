const workcard = [
  {
    id: 0,
    name: 'Microverse summary',
    description:
      'this work is done a first capstone project that ive done at Microverse its to create an article that chose a topic i chose to talk about Microverse school and where i created a page useing pure HTML, CSS and some javascript',
    Fimage: 'img/Pasted image.png',
    technologies: ['img/Tags.svg', 'HTML', 'CSS', 'JAVASCRIPT'],
    Llive: 'https://cluab.github.io/portal-capstone1/index.html',
    Lsource: 'https://github.com/Cluab/portal-capstone1',
  },
];
const workcardtwo = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    Llive: 'https://cluab.github.io/Portfolio/',
    Lsource: 'https://github.com/Cluab/Portfolio',
  },
  {
    id: 6,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
    Fimage: ['worksec worktwo cards', 'img/Snapshoot Portfolio.png'],
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
         <img class="languages-Fwork" src="${workcard.technologies[0]}" alt="languages used at recent work (css,html,bootstrap,ruby)">
        <button class="see-project " id="${workcard.id}">see project</button>
      </div> </div>
    `;
  });
}
renderworkcards();

const workcardgrid = document.querySelector('.diffrent-work');
function renderworkcardtwo() {
  workcardtwo.forEach((workcardtwo) => {
    workcardgrid.innerHTML += `
        <div class="${workcardtwo.Fimage[0]}">
          <div class="work-box-three work-box-two">
            <h5 class="work-three-title work-two-title">${workcardtwo.name}</h5>
            <p class="work-three-dis work-two-dis">${workcardtwo.description}</p>
              <ul class="languages-work">
                <li class="html-box"><p class="code-name">${workcardtwo.technologies[0]}</li>
                <li class="bootstrap-box"><p class="code-name">${workcardtwo.technologies[1]}</p></li>
                <li class="ruby-box"><p class="code-name">${workcardtwo.technologies[2]}</p></li>
              </ul>
            </div>
            <button class="see-two see-two-box see-three-box show some-pop" id="${workcardtwo.id}">see Project</button>
           </div>
    `;
  });
}
renderworkcardtwo();
