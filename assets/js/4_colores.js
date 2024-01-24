document.addEventListener('DOMContentLoaded', function () {
    const azulDiv = document.getElementById("azul");
    const rojoDiv = document.getElementById("rojo");
    const verdeDiv = document.getElementById("verde");
    const amarilloDiv = document.getElementById("amarillo");
  
    function cambiarColorNegro(element) {
      element.style.backgroundColor = 'black';
    }
  
    azulDiv.addEventListener("click", function() {
      cambiarColorNegro(azulDiv);
    });
  
    rojoDiv.addEventListener("click", function() {
      cambiarColorNegro(rojoDiv);
    });
  
    verdeDiv.addEventListener("click", function() {
      cambiarColorNegro(verdeDiv);
    });
  
    amarilloDiv.addEventListener("click", function() {
      cambiarColorNegro(amarilloDiv);
    });
  });
  