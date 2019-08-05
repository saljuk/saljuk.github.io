document.getElementById('highschoolsectionenlarge').addEventListener('click', function () {

    if (document.getElementById('highschoolsectionenlarge').innerHTML === '+') {
        document.getElementById('highschoolheader').style.borderBottomLeftRadius = 0;
        document.getElementById('highschoolheader').style.borderBottomRightRadius = 0;
        document.getElementById('olevelgrades').style.display = 'block';
        document.getElementById('a1grades').style.display = 'block';
        document.getElementById('highschoolsectionenlarge').innerHTML = '-';
    } else {
        document.getElementById('highschoolheader').style.borderBottomLeftRadius = '1.6em';
        document.getElementById('highschoolheader').style.borderBottomRightRadius = '1.6em';
        document.getElementById('olevelgrades').style.display = 'none';
        document.getElementById('a1grades').style.display = 'none';
        document.getElementById('highschoolsectionenlarge').innerHTML = '+';
    }

})

document.getElementById('standardisedsectionenlarge').addEventListener('click', function () {

    if (document.getElementById('standardisedsectionenlarge').innerHTML === '+') {
        document.getElementById('standardisedtestingheader').style.borderBottomLeftRadius = 0;
        document.getElementById('standardisedtestingheader').style.borderBottomRightRadius = 0;
        document.getElementById('satactorboth').style.display = 'block';
        document.getElementById('standardisedsectionenlarge').innerHTML = '-';
    } else {
        document.getElementById('standardisedtestingheader').style.borderBottomLeftRadius = '1.6em';
        document.getElementById('standardisedtestingheader').style.borderBottomRightRadius = '1.6em';
        document.getElementById('satactorboth').style.display = 'none';
        document.getElementById('standardisedsectionenlarge').innerHTML = '+';
    }

})

const satdetails = document.getElementById("satDetails");
const actdetails = document.getElementById("actDetails");
satdetails.style.display = 'none';
actdetails.style.display = 'none';


document.getElementById("SAT").addEventListener("click", function () {
    satdetails.style.display = "block";
    actdetails.style.display = 'none';
  }, false);
  
  document.getElementById("ACT").addEventListener("click", function () {
    satdetails.style.display = "none";
    actdetails.style.display = 'block';
  }, false);
  
  document.getElementById("Both").addEventListener("click", function () {
    satdetails.style.display = "block";
    actdetails.style.display = "block";
  }, false);

  document.getElementById('gonexttochart').onclick = function() {
    if (document.getElementById('olevelAs').value === ''|| document.getElementById('olevelBs').value === '' || document.getElementById('olevelCs').value === '' || document.getElementById('olevelDs').value === '' || document.getElementById('olevelEs').value === '' || document.getElementById('olevelUs').value === '') {
        alert("Please complete your O'Level Transcript");
    } else if (document.getElementById('aslevelAs').value === '' || document.getElementById('aslevelBs').value === '' || document.getElementById('aslevelCs').value === '' || document.getElementById('aslevelDs').value === '' || document.getElementById('aslevelEs').value === '' || document.getElementById('aslevelUs').value === '') {
        alert("Please complete your A1/AS Level Transcript");
    } else if (document.getElementById('sat-total').value === '' && (document.getElementById('act-composite').value === '')) {
        alert("Please enter one of SAT 1 or ACT");
    } else {
        var olevelGPAraw = (((document.getElementById('olevelAs').value * 4) + (document.getElementById('olevelBs').value * 3.5) + (document.getElementById('olevelCs').value * 3) + (document.getElementById('olevelDs').value * 2.5) + (document.getElementById('olevelEs').value * 2)));
        var olevelGPA  = olevelGPAraw/(parseFloat(document.getElementById('olevelAs').value) + parseFloat(document.getElementById('olevelBs').value) + parseFloat(document.getElementById('olevelCs').value) + parseFloat(document.getElementById('olevelDs').value) + parseFloat(document.getElementById('olevelEs').value) + parseFloat(document.getElementById('olevelUs').value));
        olevelGPA = Math.round((olevelGPA + 0.00001) * 100) / 100

        var aslevelGPAraw = (((document.getElementById('aslevelAs').value * 4) + (document.getElementById('aslevelBs').value * 3.5) + (document.getElementById('aslevelCs').value * 3) + (document.getElementById('aslevelDs').value * 2.5) + (document.getElementById('aslevelEs').value * 2)));
        var aslevelGPA  = aslevelGPAraw/(parseFloat(document.getElementById('aslevelAs').value) + parseFloat(document.getElementById('aslevelBs').value) + parseFloat(document.getElementById('aslevelCs').value) + parseFloat(document.getElementById('aslevelDs').value) + parseFloat(document.getElementById('aslevelEs').value) + parseFloat(document.getElementById('aslevelUs').value));
        aslevelGPA = Math.round((aslevelGPA + 0.00001) * 100) / 100


        console.log(olevelGPA);
        console.log(aslevelGPA);

        if (sessionStorage.getItem('olevelGPA') !== null) {
            sessionStorage.clear();
        }
        sessionStorage.setItem('olevelGPA', olevelGPA);
        sessionStorage.setItem('aslevelGPA', aslevelGPA);
        sessionStorage.setItem('sat1score', document.getElementById('sat-total').value);
        sessionStorage.setItem('actscore', document.getElementById('act-composite').value);
        
        window.location.href = "./chart.html";
    }
  }