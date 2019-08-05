var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

const sheetMap = new Map([
    ['Amherst College', 1],
    ['Babson College', 2],
    ['Bates College', 3],
    ['Bowdoin College', 4],
    ['Brown University', 5],
    ['Bryn Mawr College', 6],
    ['California Institute of Technology', 1],
    ['Carleton College', 2],
    ['Carnegie Mellon University', 3],
    ['Carnegie Mellon University in Qatar', 4],
    ['Colby College', 5],
    ['Colgate University', 6],
    ['Columbia University', 7],
    ['Cornell University', 8],
    ['Dartmouth College', 1],
    ['Davidson College', 2],
    ['DePauw University', 3],
    ['Drexel University', 4],
    ['Duke University', 5],
    ['Emory University', 6],
    ['Franklin and Marshall College', 7],
    ['Georgetown University', 1],
    ['Georgia Institute of Technology', 2],
    ['Grinnell College', 3],
    ['Harvard University', 4],
    ['Johns Hopkins University', 5],
    ['Kenyon College', 6],
    ['Knox College', 7],
    ['Lafayette College', 1],
    ['Lahore University of Management Sciences (LUMS)', 2],
    ['Macalester College', 3],
    ['Massachusetts Institute of Technology', 4],
    ['Middlebury College', 5],
    ['Mount Holyoke College', 6],
    ['New York University Abu Dhabi Campus (NYUAD)', 1],
    ['New York University New York Campus (NYU)', 2],
    ['Northwestern University', 3],
    ['Oberlin College', 4],
    ['Pomona College', 5],
    ['Princeton University', 6],
    ['Rice University', 7],
    ['Stanford University', 1],
    ['Swarthmore College', 2],
    ['Tufts University', 3],
    ['University of California-Berkeley', 4],
    ['University of California-Los Angeles', 5],
    ['University of Michigan-Ann Arbor', 6],
    ['University of Pennsylvania', 7],
    ['Vanderbilt University', 1],
    ['Vassar College', 2],
    ['Washington and Lee University', 3],
    ['Wellesley College', 4],
    ['Wesleyan University', 5],
    ['Williams College', 6],
    ['Yale University', 1],
    ['Yale-NUS', 2]
]);

document.getElementById('searchBarButton').addEventListener('click', function () {
    $("#sidebarmenu").load(" #sidebarmenu > *");
    $("#scatterchart_material").load(" #scatterchart_material > *");
    document.getElementById('scatterchart_material').style.border = 'none';
    var unisearched = document.getElementById('searchbar').value;
    console.log('sessionstorage ' + sessionStorage.getItem('olevelGPA'));
    console.log('sessionstorage ' + sessionStorage.getItem('aslevelGPA'));
    console.log('sessionstorage ' + sessionStorage.getItem('sat1score'));
    console.log('sessionstorage ' + sessionStorage.getItem('actscore'));

    var firstchar = unisearched.charAt(0);

    var spreadsheetId = "";

    if (firstchar === 'A' || firstchar === 'B') {
        spreadsheetId = "19fpvQ02dOLzp2Dmwr2anCG5EoZUI3MVlkmqU5M3BJKU";
    } else if (firstchar === 'C') {
        spreadsheetId = "1vZI4uV1ocUoNi_r8_RybOiwXp0_jGeqrlx4jCVB_ztI"
    } else if (firstchar === 'D' || firstchar === 'E' || firstchar === 'F') {
        spreadsheetId = "1dpmQgMkadqhDwTSSVxOq6Z69lADibiJtB6aSlvs2qZs";
    } else if (firstchar === 'G' || firstchar === 'H' || firstchar === 'I' || firstchar === 'J' || firstchar === 'K') {
        spreadsheetId = "1FPs82vympa1eL5-0axVWULms-Et13_uD-3kdk6guiYE";
    } else if (firstchar === 'L' || firstchar === 'M') {
        spreadsheetId = "1EFk5_jN4o_r0X4k-ZAq3c6vufCLzUk6FtGkXq5WHffg";
    } else if (firstchar === 'N' || firstchar === 'O' || firstchar === 'P' || firstchar === 'Q' || firstchar === 'R') {
        spreadsheetId = "1eeVY_Vk8fspcepbBhKvJbkgvGCo_mFKkHwAXKfNc-iI";
    } else if (firstchar === 'S' || firstchar === 'T' || firstchar === 'U') {
        spreadsheetId = "13wGr7A2PiNCWGWzQy9t9MdSonYgXpV1q0DVjkdf1oG0";
    } else if (firstchar === 'V' || firstchar === 'W') {
        spreadsheetId = "1aJZNzTFpqgZtYxPGXkKC4ZnFFk10Y_uHgwyqUk5ehRA";
    } else if (firstchar === 'X' || firstchar === 'Y' || firstchar === 'Z') {
        spreadsheetId = "1kIuRuyYzDYF-yyJuf37vHV2RJGbFCdnlAL8dzlDuBPc";
    }

    bar.animate(0.1);

    var sheetno = sheetMap.get(unisearched);

    url = "https://spreadsheets.google.com/feeds/list/" +
        spreadsheetId +
        "/" + sheetno + "/public/basic?alt=json";

    console.log(url);

    bar.animate(0.2);// Number from 0.0 to 1.0
    var parsedData = [];
    loadPage(url, parsedData);

});

function loadPage(url) {

    var rows1 = [];
    var rows2 = [];
    var rows3 = [];
    var rows4 = [];

    var minsat = 1600;
    var maxsat = 0;
    if (parseInt(sessionStorage.getItem('sat1score') !== NaN)) {
        maxact = parseInt(sessionStorage.getItem('sat1score'));
    }
    var minact = 36;
    var maxact = 0;
    if (parseInt(sessionStorage.getItem('actscore') !== NaN)) {
        maxact = parseInt(sessionStorage.getItem('actscore'));
    }
    var minolevel = 4.5;
    var maxolevel = parseFloat(sessionStorage.getItem('olevelGPA'));
    var minalevel = 4.5;
    var maxalevel = parseFloat(sessionStorage.getItem('aslevelGPA'));

    var cities = [];
    var highschools = [];
    var yearsapplied = [];
    var uscitizen = ['U.S. Citizen', 'Non-U.S. (Pakistani) Citizen'];
    var aidrequirement = ['Full Aid', 'Partial Aid', 'No Aid'];

    bar.animate(0.3);  // Number from 0.0 to 1.0

    getDataAndMakeFiltersFromSpreadSheet();

    bar.animate(0.4);  // Number from 0.0 to 1.0

    var minprogress = 0.601;
    var maxprogress = 0.901;

    setTimeout(function () {
        bar.animate((Math.random() * (maxprogress - minprogress) + minprogress));
    }, 500)

    function getDataAndMakeFiltersFromSpreadSheet() {
        $.get({
            url: url,
            success: function (response) {
                bar.animate(0.9);  // Number from 0.0 to 1.0
                console.log(response);
                console.log('Data Retrieval Successful');
                var data = response.feed.entry,
                    len = data.length,
                    i = 0,
                    parsedData = [];

                for (i = 0; i < len; i++) {
                    parsedData.push({
                        year: data[i].title.$t,
                        value: data[i].content.$t
                    });
                }

                console.log(parsedData);

                var lengthOfParsedData = parsedData.length;

                for (i = 0; i < lengthOfParsedData; i++) {
                    var shape;
                    var color;

                    var currentcityposition = parsedData[i].value.search("city:");
                    var currentcity = parsedData[i].value.substring(currentcityposition + 6, parsedData[i].value.search("uscitizen:") - 2);
                    if (!cities.includes(currentcity)) {
                        cities.push(currentcity);
                    }

                    var currenthighschoolposition = parsedData[i].value.search("high-school:");
                    var currenthighschool = parsedData[i].value.substring(currenthighschoolposition + 13, parsedData[i].value.search("city") - 2);
                    if (!highschools.includes(currenthighschool)) {
                        highschools.push(currenthighschool);
                    }

                    if (!yearsapplied.includes(parsedData[i].year)) {
                        yearsapplied.push(parsedData[i].year);
                    }


                    var satposition = parsedData[i].value.search("sat-total");
                    var satscore = parsedData[i].value.substring(satposition + 11, satposition + 11 + 4);
                    var satint = parseInt(satscore);
                    if (satint != 0) {
                        if (satint < minsat) {
                            minsat = satint;
                        }
                        if (satint > maxsat) {
                            maxsat = satint;
                        }
                    }

                    var actposition = parsedData[i].value.search("act-composite");
                    var actscore = parsedData[i].value.substring(actposition + 15, actposition + 15 + 2);
                    var actint = parseInt(actscore);
                    if (actint != 0 || actint != NaN) {
                        if (actint < minact) {
                            minact = actint;
                        }
                        if (actint > maxact) {
                            maxact = actint;
                        }
                    }

                    var olevelposition = parsedData[i].value.search("olevelgpa");
                    var olevelGPA = parsedData[i].value.substring(olevelposition + 11, olevelposition + 11 + 4);
                    var olevelGPAint = parseFloat(olevelGPA);
                    if (olevelGPAint < minolevel) {
                        minolevel = olevelGPAint;
                    }
                    if (olevelGPAint > maxolevel) {
                        maxolevel = olevelGPAint;
                    }

                    var aslevelposition = parsedData[i].value.search("aslevelgpa");
                    var aslevelGPA = parsedData[i].value.substring(aslevelposition + 11, aslevelposition + 11 + 4);
                    var aslevelGPAint = parseFloat(aslevelGPA);
                    if (aslevelGPAint < minalevel) {
                        minalevel = aslevelGPAint;
                    }
                    if (olevelGPAint > maxalevel) {
                        maxalevel = aslevelGPAint;
                    }

                    var tooltipposition = parsedData[i].value.search('tooltipcomments:');
                    var tooltip = parsedData[i].value.substring(tooltipposition + 17);

                    var decisionposition = parsedData[i].value.search('uni-decision');
                    var decision = parsedData[i].value.substring(decisionposition + 14, decisionposition + 13 + 2);
                    console.log(decision);
                    if (decision === 'A') {
                        color = 'green';
                    } else if (decision === 'W') {
                        color = '#fdc60d';
                    } else {
                        color = '#a30f32';
                    }

                    var cycleposition = parsedData[i].value.search('uni-cycle');
                    var cycle = parsedData[i].value.substring(cycleposition + 11, cycleposition + 12);
                    if (cycle === 'E') {
                        shape = 'square';
                        var style = `point {size: 7; shape-type: ${shape}; fill-color: ${color};}`;
                    } else {
                        shape = 'circle';
                        var style = `point {shape-type: ${shape}; fill-color: ${color};}`;
                    }

                    if (satint != 0) {
                        rows1.push([
                            satint, olevelGPAint, tooltip, style
                        ])
                        rows2.push([
                            satint, aslevelGPAint, tooltip, style
                        ])
                    }

                    if (!isNaN(actint)) {
                        rows3.push([
                            actint, olevelGPAint, tooltip, style
                        ])
                        if (!isNaN(aslevelGPAint)) {
                            rows4.push([
                                actint, aslevelGPAint, tooltip, style
                            ])
                        }
                    }

                }

                if (sessionStorage.getItem('sat1score') !== NaN) {
                    rows1.push([
                        parseInt(sessionStorage.getItem('sat1score')), parseFloat(sessionStorage.getItem('olevelGPA')), "Your Data Point", `point {size: 7; shape-type: star ; fill-color: #2EBA8B;}`
                    ])
    
                    rows2.push([
                        parseInt(sessionStorage.getItem('sat1score')), parseFloat(sessionStorage.getItem('aslevelGPA')), "Your Data Point", `point {size: 7; shape-type: star ; fill-color: #2EBA8B;}`
                    ])    
                }

                if (sessionStorage.getItem('actscore') !== NaN) {
                    rows3.push([
                        parseInt(sessionStorage.getItem('actscore')), parseFloat(sessionStorage.getItem('olevelGPA')), "Your Data Point", `point {size: 7; shape-type: star ; fill-color: #2EBA8B;}`
                    ])
    
                    rows4.push([
                        parseInt(sessionStorage.getItem('actscore')), parseFloat(sessionStorage.getItem('aslevelGPA')), "Your Data Point", `point {size: 7; shape-type: star ; fill-color: #2EBA8B;}`
                    ])
                }
                
                drawFilters(rows1);
                filterFromChart([], [], [], [], [], rows1);
                bar.animate(1.0);  // Number from 0.0 to 1.0
                setTimeout(function () {
                    drawVisualization(rows1)
                }, 500);
            }
        });
    }

    google.charts.load('current', { 'packages': ['corechart', 'controls'] });

    function drawFilters(rows) {
        // draw filters
        for (i = 0; i < (aidrequirement.length); i++) {
            var myDiv = document.getElementById("aidgraphcheckboxes");

            // creating checkbox element 
            var checkbox = document.createElement('input');

            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox";
            checkbox.name = "aidrequirement";
            checkbox.value = aidrequirement[i];
            checkbox.id = aidrequirement[i];
            checkbox.checked = true;

            // creating label for checkbox 
            var label = document.createElement('label');

            // assigning attributes for  
            // the created label tag  
            label.htmlFor = aidrequirement[i];

            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(aidrequirement[i]));

            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
        }
        for (i = 0; i < (uscitizen.length); i++) {
            var myDiv = document.getElementById("citizengraphcheckboxes");

            // creating checkbox element 
            var checkbox = document.createElement('input');

            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox";
            checkbox.name = "uscitizen";
            checkbox.value = uscitizen[i];
            checkbox.id = uscitizen[i];
            checkbox.checked = true;

            // creating label for checkbox 
            var label = document.createElement('label');

            // assigning attributes for  
            // the created label tag  
            label.htmlFor = uscitizen[i];

            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(uscitizen[i]));

            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
        }

        for (i = 0; i < (yearsapplied.length); i++) {
            var myDiv = document.getElementById("yeargraphcheckboxes");

            // creating checkbox element 
            var checkbox = document.createElement('input');

            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox";
            checkbox.name = "years";
            checkbox.value = yearsapplied[i];
            checkbox.id = yearsapplied[i];
            checkbox.checked = true;

            // creating label for checkbox 
            var label = document.createElement('label');

            // assigning attributes for  
            // the created label tag  
            label.htmlFor = yearsapplied[i];

            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(yearsapplied[i]));



            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
        }

        for (i = 0; i < (highschools.length); i++) {
            var myDiv = document.getElementById("schoolcheckboxes");

            // creating checkbox element 
            var checkbox = document.createElement('input');

            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox";
            checkbox.name = "highschools";
            checkbox.value = highschools[i];
            checkbox.id = highschools[i];
            checkbox.checked = true;

            // creating label for checkbox 
            var label = document.createElement('label');

            // assigning attributes for  
            // the created label tag  
            label.htmlFor = highschools[i];

            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(highschools[i]));

            linebreak = document.createElement("br");

            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
            myDiv.appendChild(linebreak);

        }

        for (i = 0; i < (cities.length); i++) {
            var myDiv = document.getElementById("citycheckboxes");

            // creating checkbox element 
            var checkbox = document.createElement('input');

            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox";
            checkbox.name = "cities";
            checkbox.value = cities[i];
            checkbox.id = cities[i];
            checkbox.checked = true;

            // creating label for checkbox 
            var label = document.createElement('label');

            // assigning attributes for  
            // the created label tag  
            label.htmlFor = cities[i];

            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode(cities[i]));

            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
            if ((i + 1) % 3 === 0) {
                linebreak = document.createElement("br");
                myDiv.appendChild(linebreak);
            }
        }

        listenforFilters(rows);
    }

    function drawVisualization(rowsForGraph) {
        document.getElementById('scatterchart_material').style.border = '1px solid black';

        var dataTable = new google.visualization.DataTable();

        var graphoptioncurrent = document.getElementById('graphtypelist').value;

        if (graphoptioncurrent === "SAT 1 Score Vs. O' Level GPA Comparison") {
            dataTable.addColumn('number', 'SAT 1 Score');
            dataTable.addColumn('number', 'O Level GPA');

            // column for tooltip content
            dataTable.addColumn({ type: 'string', role: 'tooltip' });
            dataTable.addColumn({ type: 'string', role: 'style' });

            dataTable.addRows(rowsForGraph);
            var options = {
                title: 'SAT 1 Score vs O Level GPA Comparison',
                hAxis: { title: 'SAT 1 Score', minValue: minsat - 50, maxValue: 1600 },
                vAxis: { title: 'O Level GPA', minValue: minolevel - 0.1, maxValue: 4 },
                colors: ['#a30f32', '#fdc60d', 'green'],
                legend: 'none',
                'chartArea': { 'width': '75%', 'height': '75%' },
                fontName: 'Questrial'
            };

        } else if (graphoptioncurrent === "SAT 1 Score Vs. A1/AS Level GPA Comparison") {
            dataTable.addColumn('number', 'SAT 1 Score');
            dataTable.addColumn('number', 'AS Level GPA');

            // column for tooltip content
            dataTable.addColumn({ type: 'string', role: 'tooltip' });
            dataTable.addColumn({ type: 'string', role: 'style' });

            dataTable.addRows(rowsForGraph);
            var options = {
                title: 'SAT 1 Score vs A1/AS Level GPA Comparison',
                hAxis: { title: 'SAT 1 Score', minValue: minsat - 50, maxValue: 1600 },
                vAxis: { title: 'A1/AS Level GPA', minValue: minalevel, maxValue: 4 },
                colors: ['#a30f32', '#fdc60d', 'green'],
                legend: 'none',
                'chartArea': { 'width': '75%', 'height': '75%' },
                fontName: 'Questrial'
            };
        } else if (graphoptioncurrent === "ACT Score Vs. O' Level GPA Comparison") {
            dataTable.addColumn('number', 'ACT Score');
            dataTable.addColumn('number', 'O Level GPA');

            // column for tooltip content
            dataTable.addColumn({ type: 'string', role: 'tooltip' });
            dataTable.addColumn({ type: 'string', role: 'style' });

            dataTable.addRows(rowsForGraph);
            var options = {
                title: 'ACT Score vs O Level GPA Comparison',
                hAxis: { title: 'ACT Score', minValue: minact - 1, maxValue: 36 },
                vAxis: { title: 'O Level GPA', minValue: minolevel - 0.1, maxValue: 4 },
                colors: ['#a30f32', '#fdc60d', 'green'],
                legend: 'none',
                'chartArea': { 'width': '75%', 'height': '75%' },
                fontName: 'Questrial'
            };
        } else if (graphoptioncurrent === "ACT Score Vs. A1/AS Level GPA Comparison") {
            dataTable.addColumn('number', 'ACT Score');
            dataTable.addColumn('number', 'AS/A1 Level GPA');

            // column for tooltip content
            dataTable.addColumn({ type: 'string', role: 'tooltip' });
            dataTable.addColumn({ type: 'string', role: 'style' });

            dataTable.addRows(rowsForGraph);
            var options = {
                title: 'ACT Score vs A1/AS Level GPA Comparison',
                hAxis: { title: 'ACT Score', minValue: minact - 1, maxValue: 36 },
                vAxis: { title: 'A1/AS Level GPA', minValue: minalevel, maxValue: 4 },
                colors: ['#a30f32', '#fdc60d', 'green'],
                legend: 'none',
                'chartArea': { 'width': '75%', 'height': '75%' },
                fontName: 'Questrial'
            };
        }

        // create and draw the visualization.
        var chart = new google.visualization.ScatterChart(document.getElementById('scatterchart_material'));
        chart.draw(dataTable, options);
        bar.animate(0);
    }


    function listenforFilters(rows) {
        document.getElementById('graphtypelist').onchange = function () {
            var graphoption = document.getElementById('graphtypelist').value;
            if (graphoption === "SAT 1 Score Vs. O' Level GPA Comparison") {
                listenforFilters(rows1);
                filterFromChart([], [], [], [], [], rows1);
            } else if (graphoption === 'SAT 1 Score Vs. A1/AS Level GPA Comparison') {
                listenforFilters(rows2);
                filterFromChart([], [], [], [], [], rows2);
            } else if (graphoption === "ACT Score Vs. O' Level GPA Comparison") {
                listenforFilters(rows3);
                filterFromChart([], [], [], [], [], rows3);
            } else if (graphoption === "ACT Score Vs. A1/AS Level GPA Comparison") {
                listenforFilters(rows4);
                filterFromChart([], [], [], [], [], rows4);
            }
        }

        // get reference to element containing aid checkboxes
        var el = document.getElementById('aidgraphfilter');

        // get reference to input elements in aid container element
        var checkboxes = el.getElementsByTagName('input');
        console.log(checkboxes);

        var uncheckedaid = [];
        var uncheckedhighschool = [];
        var uncheckedyear = [];
        var uncheckedcitizen = [];
        var uncheckedcity = [];

        // assign function to onclick property of each checkbox
        for (var i = 0, len = checkboxes.length; i < len; i++) {
            document.getElementById(checkboxes[i].id).addEventListener('change', function () {
                if (this.checked === false) {
                    console.log(this.id);
                    uncheckedaid.push(this.id);
                } else {
                    if (uncheckedaid.includes(this.id)) {
                        uncheckedaid.splice(uncheckedaid.indexOf(this.id), 1);
                        console.log(this.id);
                    }
                }
                filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, rows);
            })
        }

        // get reference to element containing aid checkboxes
        var el2 = document.getElementById('schoolcheckboxes');

        // get reference to input elements in aid container element
        var checkboxes2 = el2.getElementsByTagName('input');

        // assign function to onclick property of each checkbox
        for (var i = 0, len = checkboxes2.length; i < len; i++) {
            document.getElementById(checkboxes2[i].id).addEventListener('change', function () {
                if (this.checked === false) {
                    console.log(this.id);
                    uncheckedhighschool.push(this.id);
                } else {
                    if (uncheckedhighschool.includes(this.id)) {
                        uncheckedhighschool.splice(uncheckedhighschool.indexOf(this.id), 1);
                        console.log(this.id);
                    }
                }
                filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, rows);
            })
        }

        // get reference to element containing aid checkboxes
        var el3 = document.getElementById('citycheckboxes');

        // get reference to input elements in aid container element
        var checkboxes3 = el3.getElementsByTagName('input');

        // assign function to onclick property of each checkbox
        for (var i = 0, len = checkboxes3.length; i < len; i++) {
            document.getElementById(checkboxes3[i].id).addEventListener('change', function () {
                if (this.checked === false) {
                    console.log(this.id);
                    uncheckedcity.push(this.id);
                } else {
                    if (uncheckedcity.includes(this.id)) {
                        uncheckedcity.splice(uncheckedcity.indexOf(this.id), 1);
                        console.log(this.id);
                    }
                }
                filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, rows);
            })
        }

        // get reference to element containing aid checkboxes
        var el4 = document.getElementById('yeargraphcheckboxes');

        // get reference to input elements in aid container element
        var checkboxes4 = el4.getElementsByTagName('input');

        // assign function to onclick property of each checkbox
        for (var i = 0, len = checkboxes4.length; i < len; i++) {
            document.getElementById(checkboxes4[i].id).addEventListener('change', function () {
                if (this.checked === false) {
                    console.log(this.id);
                    uncheckedyear.push(this.id);
                } else {
                    if (uncheckedyear.includes(this.id)) {
                        uncheckedyear.splice(uncheckedyear.indexOf(this.id), 1);
                        console.log(this.id);
                    }
                }
                filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, rows);
            })
        }

        // get reference to element containing aid checkboxes
        var el5 = document.getElementById('citizengraphcheckboxes');

        // get reference to input elements in aid container element
        var checkboxes5 = el5.getElementsByTagName('input');

        // assign function to onclick property of each checkbox
        for (var i = 0, len = checkboxes5.length; i < len; i++) {
            document.getElementById(checkboxes5[i].id).addEventListener('change', function () {
                if (this.checked === false) {
                    console.log(this.id);
                    uncheckedcitizen.push(this.id);
                } else {
                    if (uncheckedcitizen.includes(this.id)) {
                        uncheckedcitizen.splice(uncheckedcitizen.indexOf(this.id), 1);
                        console.log(this.id);
                    }
                }
                console.log(uncheckedcitizen);
                filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, rows);
            })
        }

    };

    function filterFromChart(uncheckedaid, uncheckedhighschool, uncheckedcity, uncheckedyear, uncheckedcitizen, newrows) {

        if (uncheckedcitizen !== undefined) {
            citizenFilter = uncheckedcitizen;
        } else {
            citizenFilter = [];
        }

        if (uncheckedyear !== undefined) {
            yearFilter = uncheckedyear;
        } else {
            yearFilter = [];
        }

        if (uncheckedcity !== undefined) {
            cityFilter = uncheckedcity;
        } else {
            cityFilter = [];
        }

        if (uncheckedhighschool !== undefined) {
            highschoolFilter = uncheckedhighschool;
        } else {
            highschoolFilter = [];
        }

        if (uncheckedaid !== undefined) {
            aidFilter = uncheckedaid;
        } else {
            aidFilter = [];
        }

        var editedRow = JSON.parse(JSON.stringify(newrows));
        console.log(editedRow);

        for (i = 0; i < editedRow.length; i++) {
            var rowmarked = false;

            for (l = 0; l < cityFilter.length; l++) {
                var filtercityposition = editedRow[i][2].search('City:');
                var filtercity = editedRow[i][2].substring(filtercityposition + 6, editedRow[i][2].search('US Citizen') - 1);
                if (filtercity === cityFilter[l]) {
                    rowmarked = true;
                }
            }

            for (l = 0; l < highschoolFilter.length; l++) {
                var filterhighschoolposition = editedRow[i][2].search('High School:');
                var filterhighschool = editedRow[i][2].substring(filterhighschoolposition + 13, editedRow[i][2].search('City:') - 1);
                if (filterhighschool === highschoolFilter[l]) {
                    rowmarked = true;
                }
            }

            for (l = 0; l < yearFilter.length; l++) {
                var filteryearposition = editedRow[i][2].search('Year of Applying:');
                var filteryear = editedRow[i][2].substring(filteryearposition + 18, editedRow[i][2].search('High School:') - 1);
                if (filteryear === yearFilter[l]) {
                    rowmarked = true;
                }
            }

            for (l = 0; l < aidFilter.length; l++) {
                var filteraidposition = editedRow[i][2].search('Aid Requirement:');
                var filteraid = editedRow[i][2].substring(filteraidposition + 17);
                if (filteraid === aidFilter[l]) {
                    rowmarked = true;
                }
            }

            for (l = 0; l < citizenFilter.length; l++) {
                var filtercitizenposition = editedRow[i][2].search('US Citizen?');
                var filtercitizen = editedRow[i][2].substring(filtercitizenposition + 12, editedRow[i][2].search('Aid Requirement:') - 1);
                if (filtercitizen === citizenFilter[l]) {
                    rowmarked = true;
                }
            }

            if (rowmarked === true) {
                editedRow.splice(i, 1);
                i--;
            }
        }

        console.log(editedRow);

        drawVisualization(editedRow);
    }

};
