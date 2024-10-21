const navBtn = document.getElementById("navbar-expand");
const navbarUl = document.querySelector(".navbar ul");



navBtn.addEventListener("click", () => {
    navbarUl.classList.toggle("active");

    if (navbarUl.classList.contains("active")) {
        navBtn.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
        document.body.classList.add("navbar-open");
    } else {
        navBtn.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
        document.body.classList.remove("navbar-open");
    }
});


window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 600){
        document.querySelector("header").classList.add('sticky-position')
    }else{
        document.querySelector("header").classList.remove('sticky-position')
    }
    // console.log(window.scrollY)
})


const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach( link =>{
    link.addEventListener('click',()=>{
        navbarUl.classList.toggle("active");

        navBtn.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
        document.body.classList.remove("navbar-open");
    })
})
