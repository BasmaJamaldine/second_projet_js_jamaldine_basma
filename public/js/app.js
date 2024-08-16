//* menu rest
let btnrest = document.querySelector(".btnRest")
let starBtn =document.querySelector(".starBtn")
let brakBtn =document.querySelector(".brakBtn")
let lunchBtn =document.querySelector(".lunchBtn")
let dinnBtn =document.querySelector(".dinnBtn")

starBtn.addEventListener("click",()=>{
  // alert("okk")
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Starters"
  // palt.style.animation ="basma 0.7s ease-in-out"
  
  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000)
  // console.log(repas);
})
brakBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Breakfast"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
lunchBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "Lunch"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})
dinnBtn.addEventListener("click",()=>{
  let repas= document.querySelector("#title")
  let palt = document.querySelector(".content-plat")
  repas.textContent = "dinner"

  palt.classList.add("anim")
  setTimeout(() => {
    palt.classList.remove("anim")
  }, 1000);
})


//! caroussel1
let nextBtns = document.querySelectorAll(".next")
let containers = document.querySelectorAll(".carousel-container")

let currentIndex = 0
const slideImage = (index, myBtn) => {
    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")
    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {
            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                
                index = 0
            }
            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });
}
nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
});
containers.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
           
            nextBtn.click()
        }, 3500);
    }
});
containers.forEach(container => {
     
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});

//?modal
let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//* carousel2
let galleryContainer = document.querySelector(".gallery-container");
let galleryNavContainer = document.querySelector(".gallery-nav");
let galleryItems = document.querySelectorAll(".gallery-item");

class Carousel1 {
    constructor(container, items, nav) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.carouselNav = nav;
        this.currentItemIndex = 0;
        this.autoSlideInterval = null;
    }

    updateGallery() {
        this.carouselArray.forEach(ele => {
            ele.classList.remove("gallery-item-1")
            ele.classList.remove("gallery-item-2")
            ele.classList.remove("gallery-item-3")
            ele.classList.remove("gallery-item-4")
            ele.classList.remove("gallery-item-5")
            ele.classList.remove("gallery-item-6")
            ele.classList.remove("gallery-item-7")
            ele.classList.remove("gallery-item-8")
        })

        this.carouselArray.slice(0, 8).forEach((ele, i) => {
            ele.classList.add(`gallery-item-${i + 1}`)
        })

        this.updateIndicators()
    }

    updateIndicators() {
        if (this.carouselNav && this.carouselNav.childNodes.length > 0) {
            this.carouselNav.childNodes.forEach(indicator => {
                if (indicator.classList) {
                    indicator.classList.remove('active')
                }
            })
            if (this.currentItemIndex < this.carouselNav.childNodes.length) {
                this.carouselNav.childNodes[this.currentItemIndex].classList.add('active')
            }
        }
    }

    setCurrentState(index) {
        this.currentItemIndex = index
        this.carouselArray = this.carouselArray.slice(index).concat(this.carouselArray.slice(0, index))
        this.updateGallery()
    }

    setIndicators() {
      while (this.carouselNav.firstChild) {
          this.carouselNav.removeChild(this.carouselNav.firstChild)
      }
  
      this.carouselArray.forEach((index) => {
          let li = document.createElement('li')
          li.addEventListener('click', () => {
              this.setCurrentState(index)
              this.stopAutoSlide() 
          })
          this.carouselNav.appendChild(li)
      })

      this.updateIndicators()
  }
  

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.currentItemIndex = (this.currentItemIndex + 1) % this.carouselArray.length
            this.setCurrentState(this.currentItemIndex)
        }, 2000) 
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval)
    }

    init() {
        this.updateGallery()
        this.setIndicators()
        this.startAutoSlide()
    }
}

const exampleCarousel = new Carousel1(galleryContainer, galleryItems, galleryNavContainer)
exampleCarousel.init()
//*Vedios
document.addEventListener('DOMContentLoaded', function() {
    const addVideo = GLightbox({
      selector: '.video'
    });
});
//* navbar
let body = document.querySelector("body")
let Menu = document.querySelector(".menu-icon")
let navMenu = document.querySelector(".menu-nv")
let close = document.querySelector(".close")


Menu.addEventListener("click", ()=>{
  navMenu.style.display="flex"
  body.style.backgroundColor = " #000000bc"
  close.style.display ="flex"
  Menu.style.display="none"
  
})
close.addEventListener("click", ()=>{
   navMenu.style.display="none"
   close.style.display="none"
   Menu.style.display="flex"
})

