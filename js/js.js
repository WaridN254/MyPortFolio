const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);



function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); 
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); 
  }
}


const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}



let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

 
   const tl = anime.timeline( {
    easing: 'easeInOutCubic',
    duration: 800,
    autoplay: false
})
.add({
    targets: '#loader',
    opacity: 0,
    duration: 1000,
    begin: function(anim) {
        window.scrollTo(0, 0);
    }
})
.add({
    targets: '#preloader',
    opacity: 0,
    complete: function(anim) {
        document.querySelector("#preloader").style.visibility = "hidden";
        document.querySelector("#preloader").style.display = "none";
    }
})
.add({
    targets: '.s-header',
    translateY: [-100, 0],
    opacity: [0, 1]
}, '-=200')
.add({
    targets: [ '.s-intro .text-pretitle', '.s-intro .text-huge-title'],
    translateX: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(400)
})
.add({
    targets: '.circles span',
    keyframes: [
        {opacity: [0, .3]},
        {opacity: [.3, .1], delay: anime.stagger(100, {direction: 'reverse'})}
    ],
    delay: anime.stagger(100, {direction: 'reverse'})
})
.add({
    targets: '.intro-social li',
    translateX: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {direction: 'reverse'})
})
.add({
    targets: '.intro-scrolldown',
    translateY: [100, 0],
    opacity: [0, 1]
}, '-=800');