document.getElementById("mobilebar").addEventListener("click", function () {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }, false);