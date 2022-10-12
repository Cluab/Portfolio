const workcard = [
    {
      id: 0,
      name: "Multi-Post Stories",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      Fimage: "img/Img Placeholder.svg",
      technologies: "img/Tags.svg",
      Llive:"https://cluab.github.io/Portfolio/",
      Lsource:"https://github.com/Cluab/Portfolio"
    } ]
    const workcardtwo = [
    {
        id: 1,
        name: "Multi-Post Stories",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "worksec worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
      {
        id: 2,
        name: "Data Dashboard Healthcare",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "workthree worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
      {
        id: 3,
        name: "Multi-Post Stories",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "workfour worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
      {
        id: 4,
        name: "Multi-Post Stories",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "worksec worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
      {
        id: 5,
        name: "Data Dashboard Healthcare",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "workthree worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
      {
        id: 6,
        name: "Multi-Post Stories",
        description:
          "A daily selection of privately personalized reads; no accounts  or sign-ups required. has been the industry's standard",
        Fimage: "workfour worktwo cards",
        technologies: ["html","bootstrap","Ruby"],
        Llive:"https://cluab.github.io/Portfolio/",
        Lsource:"https://github.com/Cluab/Portfolio"
      },
    ]

    const workcardpop = [
        {
          id: 0,
          name: ["Multi-Post Stories","Keeping track of hundreds  of components website"],
          description:
           ["Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."],
          Fimage: "img/Snapshoot Portfolio.png",
          technologies: ["html","bootstrap","Ruby"],
          Llive:"https://cluab.github.io/Portfolio/",
          Lsource:"https://github.com/Cluab/Portfolio"
        } ]

    const workcards = document.querySelector(".rwboxbig")


function renderworkcards(){
    workcard.forEach( (workcard) => {
        workcards.innerHTML += `
      
    <div class="RWbox"><h3 class="RWork">"My Recent works"</h3>
       <div class="workline"></div>
    </div>
      <div class="workone"><img class="workphoto"src="${workcard.Fimage}" alt="${workcard.name}">
        <div class="work-dis"><h4 class="first-Rwork">${workcard.name}</h4>
         <p class="work-dicreption">${workcard.description}.</p>
         <img class="languages-Fwork" src="${workcard.technologies}" alt="languages used at recent work (css,html,bootstrap,ruby)">
        <button class="see-project" id="see">see project</button>
      </div> </div>
    `
    })
}
renderworkcards()

const workcardgrid = document.querySelector(".diffrent-work")
function renderworkcardtwo(){
    workcardtwo.forEach( (workcardtwo) => {
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
            <button class="see-two see-two-box see-three-box show" id="see">see Project</button>
           </div>
    `
    
    })
}
renderworkcardtwo()

