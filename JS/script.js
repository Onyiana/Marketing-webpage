$(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 35,
    dots:true,
    arrows:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:4,
            loop:true
        }
    }
});


const menuOpen = document.querySelector('.ri-menu-add-line')
const menuClose = document.querySelector('.ri-close-circle-fill')
const navMenu = document.querySelector('.navlinks')
const wraper = document.querySelector('.wraper')
const html = document.querySelector('html')

menuOpen.addEventListener('click', function(){
    navMenu.style.top = '30%'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
    wraper.classList.add('blur')
    html.classList.add('hideScroll')
})

menuClose.addEventListener('click', function(){
    navMenu.style.top = '-30%'
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
    wraper.classList.remove('blur')
    html.classList.remove('hideScroll')
})

const navLists = document.querySelectorAll('li')
navLists.forEach((element) => {
    element.addEventListener('click', function(){
        navMenu.style.top = '-30%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
        html.classList.remove('hideScroll')
        wraper.classList.remove('blur')
    })
})


//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}