window.onload = function(){
    typeWriter();
}

// intro transition

let intro = document.querySelector('.intro');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300)
});

let i = 0;
let text = "Still thinking of what to put here...";
let speed = 100;




function typeWriter(){
    if (i < text.length) {
        document.getElementById("sub-heading").innerHTML += text[i];
        i++;
        setTimeout(typeWriter, speed);
      }
}

const contact = document.getElementById('contact-btn');
contact.addEventListener('click', () => {
    window.location.href = 'mailto:travismorgan397@gmail.com';
});


const scrollElements = document.querySelectorAll('.scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting){
            switch (entry.target.tagName){
                case 'H1':
                    entry.target.classList.add('show-h1'); 
                    break;
                case 'DIV':
                    if (entry.target.classList.contains('box')){
                            entry.target.style.animationDelay = `${index * 0.2}s`;
                            entry.target.classList.add('reveal-box-on-scroll');

                            setTimeout(() => {
                                entry.target.classList.add('box-border-effect');
                            }, 500);
                    }
                    if (entry.target.classList.contains('appear')){
                        entry.target.classList.add('appear-animation');
                    }
                    break;
            }
        }
    });
}, { threshold: 0.5 });

scrollElements.forEach((el) => observer.observe(el));




let darkMode = localStorage.getItem('darkMode');
const modeToggle = document.getElementById('theme-toggle');


const enableDarkMode = () => {
    document.body.classList.remove('lightMode');
    localStorage.setItem('darkMode', 'enabled');
};

const enableLightMode = () => {
    document.body.classList.add('lightMode');
    localStorage.setItem('darkMode', null);
};



if (darkMode === 'enabled'){
    enableDarkMode();
}
else{
    enableLightMode();
}


modeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode();
    }
    else{
        enableLightMode();
    }
});

const copyright = document.getElementById("copyright");
copyright.innerHTML = `©${new Date().getFullYear()} <span>Designed By</span> Travis Morgan. All rights reserved.`;


// navbar hide on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.menu-container');
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.classList.add('active');
    }
    else{
        navbar.classList.remove('active');
    }
    lastScrollTop = scrollTop;
});



// sidebar
const hamMenu = document.querySelector('.ham-menu');
const sideMenu = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.links');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        hamMenu.classList.remove('active');
    })
})












 