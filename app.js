import grammar from './data.js'

// DOM must be loaded first
$(document).ready(function() {
  
// Jossain vaiheessa kun kielioppi on valmis, tässä JSONia varten muistutuksena: 
// console.log(JSON.stringify(grammar, null, 2));


grammar.forEach((item, index) => {
    let headerText = document.getElementById(`otsikko${index}`)
    headerText.textContent = item.title

    let infoText = document.getElementById(`teksti${index}`)
    infoText.innerHTML = item.body
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