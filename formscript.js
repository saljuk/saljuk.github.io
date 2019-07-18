const firstsat2 = document.getElementById("firstsat2");
const secondsat2 = document.getElementById("secondsat2");
const thirdsat2 = document.getElementById("thirdsat2");
const fourthsat2 = document.getElementById("fourthsat2");
const fifthsat2 = document.getElementById("fifthsat2");
const satdetails = document.getElementById("satDetails");
const actdetails = document.getElementById("actDetails");
const unilistings = document.getElementById("hide")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzvVbyvtlsdHQimm33qcNdFSd-MBr1_DxAY1-bYluzxqFuAx9rx/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response)
      window.location.href = './form-success.html'
    }) .catch(error => {
      console.error('Error!', error.message)
      window.location.href = './form-failure.html'
    })
})


firstsat2.style.display = 'none';
secondsat2.style.display = 'none';
thirdsat2.style.display = 'none';
fourthsat2.style.display = 'none';
fifthsat2.style.display = 'none';
satdetails.style.display = 'none';
actdetails.style.display = 'none';
unilistings.style.display = 'none';


document.getElementById("addsat2").addEventListener("click", function () {
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

document.getElementById("removesat2").addEventListener("click", function () {
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

document.getElementById("numbercolleges").addEventListener("input", function () {
  let numRows = document.getElementById("numbercolleges").value;
  if (numRows > '0') {
    $("#uniTable").find("tr:gt(0)").remove();
    for (i = 1; i <= numRows; i++) {
      unilistings.style.display = "block";
      let row = `<tr id="uni + ${i}">
    <td>
        <label for="unis-applied">

            <input id="unis-applied" name="unis-applied${i}" list="unis" type="text">
            <datalist id="unis">
                <option value="Allegheny College"></option>
                <option value="Amherst College"></option>
                <option value="Bard College"></option>
                <option value="Barnard College"></option>
                <option value="Bates College"></option>
                <option value="Beloit College"></option>
                <option value="Boston College"></option>
                <option value="Boston University"></option>
                <option value="Bowdoin College"></option>
                <option value="Brandeis University"></option>
                <option value="Brown University"></option>
                <option value="Bryn Mawr College"></option>
                <option value="Bucknell University"></option>
                <option value="California Institute of Technology"></option>
                <option value="Carleton College"></option>
                <option value="Carnegie Mellon University"></option>
                <option value="Claremont McKenna College"></option>
                <option value="Colby College"></option>
                <option value="Colgate University"></option>
                <option value="College of William and Mary"></option>
                <option value="Colorado College"></option>
                <option value="Columbia University"></option>
                <option value="Connecticut College"></option>
                <option value="Cornell University"></option>
                <option value="Dartmouth College"></option>
                <option value="Davidson College"></option>
                <option value="Denison University"></option>
                <option value="DePauw University"></option>
                <option value="Duke University"></option>
                <option value="Emory University"></option>
                <option value="Franklin and Marshall College"></option>
                <option value="George Washington University"></option>
                <option value="Georgetown University"></option>
                <option value="Georgia Institute of Technology"></option>
                <option value="Grinnell College"></option>
                <option value="Hamilton College"></option>
                <option value="Harvard University"></option>
                <option value="Harvey Mudd College"></option>
                <option value="Haverford College"></option>
                <option value="Illinois Wesleyan University"></option>
                <option value="Johns Hopkins University"></option>
                <option value="Kenyon College"></option>
                <option value="Knox College"></option>
                <option value="Lafayette College"></option>
                <option value="Lake Forest College"></option>
                <option value="Lawrence University"></option>
                <option value="Lehigh University"></option>
                <option value="Macalester College"></option>
                <option value="Massachusetts Institute of Technology"></option>
                <option value="Middlebury College"></option>
                <option value="Mount Holyoke College"></option>
                <option value="New York University Abu Dhabi Campus"></option>
                <option value="New York University New York Campus"></option>
                <option value="New York University Shanghai Campus"></option>
                <option value="Northeastern University"></option>
                <option value="Northwestern University"></option>
                <option value="Oberlin College"></option>
                <option value="Occidental College"></option>
                <option value="Pennsylvania State University-University Park"></option>
                <option value="Pepperdine University"></option>
                <option value="Pitzer College"></option>
                <option value="Pomona College"></option>
                <option value="Princeton University"></option>
                <option value="Reed College"></option>
                <option value="Rice University"></option>
                <option value="Rutgers University-New Brunswick"></option>
                <option value=" Sarah Lawrence College"></option>
                <option value="Scripps College"></option>
                <option value="Skidmore College"></option>
                <option value="Smith College"></option>
                <option value="St. Lawrence University"></option>
                <option value="Stanford University"></option>
                <option value="Swarthmore College"></option>
                <option value="Syracuse University"></option>
                <option value="Texas A&M University-College Station"></option>
                <option value="Trinity College"></option>
                <option value="Tufts University"></option>
                <option value="Tulane University"></option>
                <option value="Union College"></option>
                <option value="University of California-Berkeley"></option>
                <option value="University of California-Davis"></option>
                <option value="University of California-Irvine"></option>
                <option value="University of California-Los Angeles"></option>
                <option value="University of California-San Diego"></option>
                <option value="University of California-Santa Barbara"></option>
                <option value="University of Chicago"></option>
                <option value="University of Florida"></option>
                <option value="University of Georgia"></option>
                <option value="University of Illinois-Urbana-Champaign"></option>
                <option value="University of Miami"></option>
                <option value="University of Michigan-Ann Arbor"></option>
                <option value="University of North Carolina-Chapel Hill"></option>
                <option value="University of Pennsylvania"></option>
                <option value="University of Richmond"></option>
                <option value="University of Rochester"></option>
                <option value="University of Southern California"></option>
                <option value="University of Texas-Austin"></option>
                <option value="University of Washington"></option>
                <option value="University of Wisconsin-Madison"></option>
                <option value="Vanderbilt University"></option>
                <option value="Vassar College"></option>
                <option value="Villanova University"></option>
                <option value="Wake Forest University"></option>
                <option value="Washington and Lee University"></option>
                <option value="Washington University in St. Louis"></option>
                <option value="Wellesley College"></option>
                <option value="Wesleyan University"></option>
                <option value="Whitman College"></option>
                <option value="Williams College"></option>
                <option value="Worcester Polytechnic Institute"></option>
                <option value="Yale University"></option>
                <option value="Yale-NUS"></option>
            </datalist>
        </label>
    </td>
    <td colspan="3">
        <label for="accepted">
            Accepted
            <input id="accepted" name="decision${i}" type="radio" value="accepted">
        </label>
        <label for="waitlisted">
            Waitlisted
            <input id="waitlisted" name="decision${i}" type="radio" value="waitlisted">
        </label>
        <label for="denied">
            Denied
            <input id="denied" name="decision${i}" type="radio" value="denied" checked>
        </label>
    </td>
</tr>`
      $('#uniTable tbody').append(row);
    }
  } else {
    unilistings.style.display = 'none';
  }
}, false);