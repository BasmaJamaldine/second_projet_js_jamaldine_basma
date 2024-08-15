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
  }, 1000);
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

