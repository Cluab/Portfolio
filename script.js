const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-nav');
const logo = document.querySelector('.name');
const bars = document.querySelector('.bars');
const project = document.querySelector('.work-section') 
const body = document.querySelector('body')

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

project.addEventListener( 'click', () => {
const main = document.createElement('div');
main.className = 'main-popup'
const popup = document.createElement('div');
popup.className = 'popup'
popup.innerHTML = `
<div class="popup-menu">
<div class="popup-header">
<h2 class="popup-title">Multi Post Stories</h2>
<h2 class="popup-title-2">Keeping track of hundreds  of components website</h2>
<button class="close-button">&times;</button>
</div>
<div class="popup-languages">
<ul class="languages-work">
                <li class=" popup-lan-box"><p class="code-name pop-name">html</li>
                <li class=" popup-lan-box"><p class="code-name pop-name">bootstrap</p></li>
                <li class=" popup-lan-box"><p class="code-name pop-name">Ruby</p></li>
              </ul>
   </div>
   <div class ="desktop-popup">
   <img class='popup-image' src="/img/Snapshoot Portfolio.png" alt="popup work preview">
   <div class="popup-end">
   <p class="lorem-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
   <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essent</p>
    <div class="popuplinks"><a href="https://cluab.github.io/Portfolio/">
    <button class="live">See Live<img src="/img/Icon.png" alt="icon-image"></button></a>
    <a href="https://github.com/Cluab/Portfolio">
    <button class="live">See Source<img src="/img/Vector.png" alt="github-icon"></button></a></div>
    </div>
    </div></div>      
`

main.appendChild(popup)
body.appendChild(main)

const close = document.querySelector('.close-button')
const closebtn = document.querySelector('.popuplinks')
close.addEventListener('click',()=>{
  body.removeChild(main)
})
closebtn.addEventListener('click',()=>{
  body.removeChild(main)
})


});





