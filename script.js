const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ul-nav');
const logo = document.querySelector('.name');
const bars = document.querySelector('.bars');
const project = document.querySelector('.see-project')
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
const popup = document.createElement('div');
popup.innerHTML = `
<div class="popup-menu">
<div class="popup-header">
<h2 class="popup-title">Multi Post Stories</h2>
<button class="close-button">&times;</button>
</div>
<div class="popup-languages">
<ul class="languages-work">
                <li class="html-box"><p class="code-name">html</li>
                <li class="bootstrap-box"><p class="code-name">bootstrap</p></li>
                <li class="ruby-box"><p class="code-name">Ruby</p></li>
              </ul>
   </div>
   <img src="/img/Snapshoot Portfolio.png" alt="popup work preview">
   <div class="popup-end">
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
   industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took 
    a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essent</p>         
`

main.appendChild(popup)
body.appendChild(main)

const close = document.querySelector('.close-button')
close.addEventListener('click',()=>{
  body.removeChild(main)
})
});





