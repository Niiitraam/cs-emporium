// modal
// button connexion
let btnConnect = document.getElementById(`connect`)

let modal = document.getElementById(`monModal`)

btnConnect.addEventListener(`click`, ()=>{
    modal.style.display = `block`
})

// button close

let btnClose = document.getElementById(`closeFenetre`)

btnClose.addEventListener(`click`, ()=>{
    modal.style.display = `none`
})

// btn inscrivez vous

let btnInscription = document.getElementById(`lienInscription`)
let lienConnect = document.getElementById(`lienConnect`)
let modalConnect = document.getElementsByClassName(`connexion`)[0]
let modalInscription = document.getElementsByClassName(`inscription`)[0]
modalInscription.style.display = `none`


btnInscription.addEventListener(`click`, ()=>{
    modalConnect.style.display = `none`
    modalInscription.style.display = `block`
})

// btn connectez-vous

lienConnect.addEventListener(`click`, ()=>{
    modalConnect.style.display = `block`
    modalInscription.style.display = `none`
})

// section 3 card

let btn1 = document.getElementsByClassName('btnLearn2')[0]
let btn2 = document.getElementsByClassName('btnLearn2')[1]
let btn3 = document.getElementsByClassName('btnLearn2')[2]
let divCard1 = document.getElementsByClassName('card2')[0]
let divCard2 = document.getElementsByClassName('card2')[1]
let divCard3 = document.getElementsByClassName('card2')[2]


btn1.addEventListener('click',()=>{
    divCard1.classList.toggle('bg-danger')
    divCard1.classList.toggle('text-light')
    btn1.classList.toggle('bg-btn')
})

btn2.addEventListener('click',()=>{
    divCard2.classList.toggle('bg-danger')
    divCard2.classList.toggle('text-light')
    btn2.classList.toggle('bg-btn')
})

btn3.addEventListener('click',()=>{
    divCard3.classList.toggle('bg-danger')
    divCard3.classList.toggle('text-light')
    btn3.classList.toggle('bg-btn')
})

// fond noir et blanc

let clair = document.getElementById('blanc')
let sombre = document.getElementById('noir')
let myBody = document.getElementsByTagName('body')[0]
let colorNav = document.getElementsByClassName('color-nav')
let color = Array.from(colorNav)
let btnCollapse = document.getElementsByClassName('navbar-toggler')[0]
console.log(btnCollapse)

clair.addEventListener('click', ()=>{
    myBody.style = 'background-color: white'
    navbar.style = 'background-color:white'
    btnCollapse.style = 'border: black solid 1px; color: black'
    color.forEach(element => {
        element.style = 'color: black'
    });
})

sombre.addEventListener('click', ()=>{
    myBody.style = 'background-color: black; color: white'
    navbar.style = 'background-color: black'
    monModal.style.color = 'black'
    btnCollapse.style = 'border: white solid 1px; color:white'
    color.forEach(element => {
        element.style = 'color: white'
    });
})
// carousel
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-25%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    }else if (e.target.classList.contains('fourth')){
      slides.style.transform = 'translatex(-75%)';
      e.target.classList.add('active');
    }
  }
});



// section catégories

let div1Card = document.querySelectorAll('.col-card')[0]
let div2Card = document.querySelectorAll('.col-card')[1]
let div3Card = document.querySelectorAll('.col-card')[2]
let card1 = document.querySelectorAll('.tailleBarre')[0]
let card2 = document.querySelectorAll('.tailleBarre')[1]
let card3 = document.querySelectorAll('.tailleBarre')[2]

div1Card.addEventListener('mouseover', ()=>{
    card1.style = 'transition:2s;width: 10%'
})

div1Card.addEventListener('mouseout', ()=>{
    card1.style = 'transition:2s;width: 100%'
})

div2Card.addEventListener('mouseover', ()=>{
    card2.style = 'transition:2s;width: 10%'
})

div2Card.addEventListener('mouseout', ()=>{
    card2.style = 'transition:2s;width: 100%'
})

div3Card.addEventListener('mouseover', ()=>{
    card3.style = 'transition:2s;width: 10%'
})

div3Card.addEventListener('mouseout', ()=>{
    card3.style = 'transition:2s;width: 100%'
})

// // navbar sticky

let navbar = document.getElementById('navbar-s')

let sticky = navbar.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
  }

myBody.setAttribute('onscroll', 'myFunction()')