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
    }).catch(error => {
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
      let row = `<tr class="unirow" id="uni + ${i}">
    <td>
        <label for="unis-applied">
            <select class="unisappliedlist" name="unis-applied${i}" id="unis${i}">
                <option value=""></option>
                <option value="Allegheny College">Allegheny College</option>
                <option value="Amherst College">Amherst College</option>
                <option value="Babson College">Babson College</option>
                <option value="Bard College">Bard College</option>
                <option value="Barnard College">Barnard College</option>
                <option value="Bates College">Bates College</option>
                <option value="Beloit College">Beloit College</option>
                <option value="Boston College">Boston College</option>
                <option value="Boston University">Boston University</option>
                <option value="Bowdoin College">Bowdoin College</option>
                <option value="Brandeis University">Brandeis University</option>
                <option value="Brown University">Brown University</option>
                <option value="Bryn Mawr College">Bryn Mawr College</option>
                <option value="Bucknell University">Bucknell University</option>
                <option value="California Institute of Technology">California Institute of Technology</option>
                <option value="Carleton College">Carleton College</option>
                <option value="Carnegie Mellon University">Carnegie Mellon University</option>
                <option value="Carnegie Mellon University in Qatar">Carnegie Mellon University in Qatar</option>
                <option value="Claremont McKenna College">Claremont McKenna College</option>
                <option value="Champlain College">Champlain College</option>
                <option value="Colby College">Colby College</option>
                <option value="Colgate University">Colgate University</option>
                <option value="College of William and Mary">College of William and Mary</option>
                <option value="Colorado College">Colorado College</option>
                <option value="Columbia University">Columbia University</option>
                <option value="Connecticut College">Connecticut College</option>
                <option value="Cornell University">Cornell University</option>
                <option value="Dartmouth College">Dartmouth College</option>
                <option value="Davidson College">Davidson College</option>
                <option value="Denison University">Denison University</option>
                <option value="DePauw University">DePauw University</option>
                <option value="Drexel University">Drexel University</option>
                <option value="Duke University">Duke University</option>
                <option value="Emory University">Emory University</option>
                <option value="Franklin and Marshall College">Franklin and Marshall College</option>
                <option value="George Washington University">George Washington University</option>
                <option value="Georgetown University">Georgetown University</option>
                <option value="Georgetown University in Qatar">Georgetown University in Qatar</option>
                <option value="Georgia Institute of Technology">Georgia Institute of Technology</option>
                <option value="Grinnell College">Grinnell College</option>
                <option value="Hamilton College">Hamilton College</option>
                <option value="Harvard University">Harvard University</option>
                <option value="Harvey Mudd College">Harvey Mudd College</option>
                <option value="Haverford College">Haverford College</option>
                <option value="Illinois Wesleyan University">Illinois Wesleyan University</option>
                <option value="Jacksonville University">Jacksonville University</option>
                <option value="Johns Hopkins University">Johns Hopkins University</option>
                <option value="Kenyon College">Kenyon College</option>
                <option value="Knox College">Knox College</option>
                <option value="Lafayette College">Lafayette College</option>
                <option value="Lahore University of Management Sciences">Lahore University of Management Sciences</option>
                <option value="Lake Forest College">Lake Forest College</option>
                <option value="Lawrence University">Lawrence University</option>
                <option value="Lehigh University">Lehigh University</option>
                <option value="Macalester College">Macalester College</option>
                <option value="Massachusetts Institute of Technology">Massachusetts Institute of Technology</option>
                <option value="Middlebury College">Middlebury College</option>
                <option value="Mount Holyoke College">Mount Holyoke College</option>
                <option value="New York University Abu Dhabi Campus">New York University Abu Dhabi Campus</option>
                <option value="New York University New York Campus">New York University New York Campus</option>
                <option value="New York University Shanghai Campus">New York University Shanghai Campus</option>
                <option value="Northeastern University">Northeastern University</option>
                <option value="Northwestern University">Northwestern University</option>
                <option value="Northwestern University in Qatar">Northwestern University in Qatar</option>
                <option value="Oberlin College">Oberlin College</option>
                <option value="Occidental College">Occidental College</option>
                <option value="Pennsylvania State University-University Park">Pennsylvania State University-University Park</option>
                <option value="Pepperdine University">Pepperdine University</option>
                <option value="Pitzer College">Pitzer College</option>
                <option value="Pomona College">Pomona College</option>
                <option value="Princeton University">Princeton University</option>
                <option value="Reed College">Reed College</option>
                <option value="Rice University">Rice University</option>
                <option value="Rochester Institute of Technology">Rochester Institute of Technology</option>
                <option value="Rutgers University-New Brunswick">Rutgers University-New Brunswick</option>
                <option value="Sarah Lawrence College">Sarah Lawrence College</option>
                <option value="Scripps College">Scripps College</option>
                <option value="Skidmore College">Skidmore College</option>
                <option value="Smith College">Smith College</option>
                <option value="St. Lawrence University">St. Lawrence University</option>
                <option value="Stanford University">Stanford University</option>
                <option value="Swarthmore College">Swarthmore College</option>
                <option value="Syracuse University">Syracuse University</option>
                <option value="Texas A&M University-College Station">Texas A&M University-College Station</option>
                <option value="Trinity College">Trinity College</option>
                <option value="Tufts University">Tufts University</option>
                <option value="Tulane University">Tulane University</option>
                <option value="Union College">Union College</option>
                <option value="University of California-Berkeley">University of California-Berkeley</option>
                <option value="University of California-Davis">University of California-Davis</option>
                <option value="University of California-Irvine">University of California-Irvine</option>
                <option value="University of California-Los Angeles">University of California-Los Angeles</option>
                <option value="University of California-San Diego">University of California-San Diego</option>
                <option value="University of California-Santa Barbara">University of California-Santa Barbara</option>
                <option value="University of Chicago">University of Chicago</option>
                <option value="University of Florida">University of Florida</option>
                <option value="University of Georgia">University of Georgia</option>
                <option value="University of Illinois-Urbana-Champaign">University of Illinois-Urbana-Champaign</option>
                <option value="University of Miami">University of Miami</option>
                <option value="University of Michigan-Ann Arbor">University of Michigan-Ann Arbor</option>
                <option value="University of North Carolina-Chapel Hill">University of North Carolina-Chapel Hill</option>
                <option value="University of Pennsylvania">University of Pennsylvania</option>
                <option value="University of Richmond">University of Richmond</option>
                <option value="University of Rochester">University of Rochester</option>
                <option value="University of Southern California">University of Southern California</option>
                <option value="University of Texas-Austin">University of Texas-Austin</option>
                <option value="University of Washington">University of Washington</option>
                <option value="University of Wisconsin-Madison">University of Wisconsin-Madison</option>
                <option value="UMass Amherst">UMass Amherst</option>
                <option value="Vanderbilt University">Vanderbilt University</option>
                <option value="Vassar College">Vassar College</option>
                <option value="Villanova University">Villanova University</option>
                <option value="Virginia Tech">Virginia Tech</option>
                <option value="Wake Forest University">Wake Forest University</option>
                <option value="Washington and Lee University">Washington and Lee University</option>
                <option value="Washington University in St. Louis">Washington University in St. Louis</option>
                <option value="Weill Cornell Medical College in Qatar">Weill Cornell Medical College in Qatar</option>
                <option value="Wellesley College">Wellesley College</option>
                <option value="Wesleyan University">Wesleyan University</option>
                <option value="Whitman College">Whitman College</option>
                <option value="Williams College">Williams College</option>
                <option value="Worcester Polytechnic Institute">Worcester Polytechnic Institute</option>
                <option value="Yale University">Yale University</option>
                <option value="Yale-NUS">Yale-NUS</option>
            </select>
        </label>
    </td>
    <td colspan="3" id="uniresult">
        <label for="accepted${i}">
            Accepted
            <input class="decision" id="accepted${i}" name="decision${i}" type="radio" value="Accepted">
        </label>
        <label for="waitlisted${i}">
            Waitlisted
            <input class="decision" id="waitlisted${i}" name="decision${i}" type="radio" value="Waitlisted">
        </label>
        <label for="denied${i}">
            Denied
            <input class="decision" id="denied${i}" name="decision${i}" type="radio" value="Denied" checked>
        </label>
    </td>
    <td colspan="2" class="unicycle">
        <label for="early${i}">
            Early
            <input class="cycle" id="early${i}" name="cycle${i}" type="radio" value="E">
        </label>
        <label for="regular${i}">
            Regular
            <input class="cycle" id="regular${i}"  name="cycle${i}" type="radio" value="R" checked>
        </label>
    </td>
</tr>`
      $('#uniTable tbody').append(row);
    }
  } else {
    unilistings.style.display = 'none';
  }
}, false);

jQuery(document).ready(function() {
  jQuery('input').keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if ( (code==13) || (code==10))
          {
          jQuery(this).blur();
          return false;
          }
  });
});
