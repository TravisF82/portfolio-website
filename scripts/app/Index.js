window.onload = function(){
    typeWriter();
}

let i = 0;
let text = "AN ASPIRING FULL-STACK SOFTWARE DEVELOPER.";
let speed = 100;




function typeWriter(){
    if (i < text.length) {
        document.getElementById("sub-heading").innerHTML += text[i];
        i++;
        setTimeout(typeWriter, speed);
      }
}




const scrollElements = document.querySelectorAll('.scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            switch (entry.target.tagName){
                case 'H1':
                    entry.target.classList.add('show-h1');
                    break;
                case 'DIV':
                    if (entry.target.classList.contains('checkpoint')){
                            entry.target.classList.add('show-checkpoint');
                    }
                    if (entry.target.classList.contains('appear')){
                        entry.target.classList.add('appear-animation');
                    }
                    break;
            }
        }
    });
});

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












 