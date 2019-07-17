const firstsat2 = document.getElementById("firstsat2");
const secondsat2 = document.getElementById("secondsat2");
const thirdsat2 = document.getElementById("thirdsat2");
const fourthsat2 = document.getElementById("fourthsat2");
const fifthsat2 = document.getElementById("fifthsat2");
const satdetails = document.getElementById("satDetails");
const actdetails = document.getElementById("actDetails");
const unilistings = document.getElementById("hide")

firstsat2.style.display = 'none';
secondsat2.style.display = 'none';
thirdsat2.style.display = 'none';
fourthsat2.style.display = 'none';
fifthsat2.style.display = 'none';
satdetails.style.display = 'none';
actdetails.style.display = 'none';
unilistings.style.display = 'none';


document.getElementById("plus").addEventListener("click", function() {
  if (firstsat2.style.display === 'none') {
    firstsat2.style.display = 'block';
  } else if (secondsat2.style.display === 'none') {
    secondsat2.style.display = 'block';
  } else if (thirdsat2.style.display === 'none') {
    thirdsat2.style.display = 'block';
  } else if (fourthsat2.style.display === 'none') {
    fourthsat2.style.display = 'block';
  } else if (fifthsat2.style.display === 'none') {
    fifthsat2.style.display = 'block';
  }
  
}, false);

document.getElementById("minus").addEventListener("click", function() {
    if (fifthsat2.style.display === 'block') {
      fifthsat2.style.display = 'none';
    } else if (fourthsat2.style.display === 'block') {
      fourthsat2.style.display = 'none';
    } else if (thirdsat2.style.display === 'block') {
      thirdsat2.style.display = 'none';
    } else if (secondsat2.style.display === 'block') {
      secondsat2.style.display = 'none';
    } else if (firstsat2.style.display === 'block') {
      firstsat2.style.display = 'none';
    }
    
  }, false);

  document.getElementById("SAT").addEventListener("click", function() {
    satdetails.style.display = "block";
    actdetails.style.display = 'none';
  }, false);

  document.getElementById("ACT").addEventListener("click", function() {
    satdetails.style.display = "none";
    actdetails.style.display = 'block';
  }, false);

  document.getElementById("Both").addEventListener("click", function() {
    satdetails.style.display = "block";
    actdetails.style.display = "block";
  }, false);
