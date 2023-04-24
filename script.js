let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=function () {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections=document.querySelectorAll('section');
let nevlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=> {
        let top =window.scrollY;
        let offset= sec.offsetTop - 150;
    let height=sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top<offset+height){
    navlinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('Header nav a[href*='+ id +' ]').classList.add('active');

    });
};
});
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);


menuIcon.classList.remove('bx-x');
navbar.classList.romove('active');

};


// scroll-revel

ScrollReveal({ 
reset: true,
distance: '80px',
duration: 2000,
delay:200
});
ScrollReveal().reveal('.home-content, .heding',{origin:'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contect form',{origin:'bottom'});
ScrollReveal().reveal('.home-contect h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contect p, .about-content',{origin:'left'});



// typejs-multi-Text


const typed=new Typed('.multi-text',{
    strings:['Web Developer','YouTuber','Teacher'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})