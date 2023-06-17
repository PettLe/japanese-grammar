import {grammar} from './data.js'
import { harjoitukset } from './harjoitukset.js';

// DOM must be loaded first
$(document).ready(function() {
  
// Jossain vaiheessa kun kielioppi on valmis, tässä JSONia varten muistutuksena: 
// console.log(JSON.stringify(grammar, null, 2));

// Täytetään kortit sisällöllä
grammar.forEach((item, index) => {
    let headerText = document.getElementById(`otsikko${index}`)
    headerText.textContent = item.title

    let infoText = document.getElementById(`teksti${index}`)
    infoText.innerHTML = item.body
})

// Sisältö harjoituksiin
harjoitukset.forEach((item, index) => {
  let exercise = document.getElementById(`harjoituksetTeksti${index}`)
  exercise.innerHTML = item.teht

  let vastaukset = document.createElement("p")
  vastaukset.id = `vastaus${index}`
  vastaukset.innerHTML = item.vast
  vastaukset.style.backgroundColor = "black";
  vastaukset.style.color = "black";

  // Klikatessa muutetaan vastausten tyyliä ja paljastetaan ne näin
  vastaukset.addEventListener("click", ()=>{
    console.log("click yleinen")
    if (vastaukset.style.backgroundColor == "black") {
      vastaukset.style.backgroundColor = "#6c757d";
      vastaukset.style.color = "white";
    } else if (vastaukset.style.color == "white") {
      vastaukset.style.backgroundColor = "black";
      vastaukset.style.color = "black";
      console.log("else click")
    }
  })

  exercise.appendChild(vastaukset)
})



// Back to top button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
});