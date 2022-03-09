$('.owl-carousel').owlCarousel({
    //Loop: carrossel infinito
    loop:true,
    //Separação entre os itens
    margin:10,
    //Barra de navegação (ficam apenas as bolinhas)
    nav:false,
    //Responsividade: até 600px: 1 item / de 600 a 100: 3 itens / maior que 1000: 5 itens
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}