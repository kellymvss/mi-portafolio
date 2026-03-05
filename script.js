let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
  // Obtenemos la posición actual del scroll
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Si la posición actual es mayor a la anterior, estamos bajando
    header.style.top = "-120px"; // Esconde el header (ajusta el número según el alto de tu header)
  } else {
    // Si la posición actual es menor, estamos subiendo
    header.style.top = "0";
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evitamos valores negativos
}, false);