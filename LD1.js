function processForm() {
    // Retrieving values
    var Name = document.getElementById('Name').value;
    var SurName = document.getElementById('SurName').value;
    var Student_code = document.getElementById('Student_code').value;
    
    var mark1 = parseFloat(document.getElementById('mark1').value);
    var mark2 = parseFloat(document.getElementById('mark2').value);
    var mark3 = parseFloat(document.getElementById('mark3').value);
    var mark4 = parseFloat(document.getElementById('mark4').value);
    var mark5 = parseFloat(document.getElementById('mark5').value);

    var average = (mark1 + mark2 + mark3 + mark4 + mark5)/5;
    var average_mark = average.toFixed(1);

    if (mark1 < 0 || isNaN(mark1)) {
        alert("Please enter a positive number for Number 1.");
        return false;
    }

    //Display the values pagrindine
    var displayDiv = document.getElementById('displayInfo');
    displayDiv.innerHTML = "<p>" + Name + "</p>" + "<p>" + SurName + "</p>" + "<p>" + Student_code + "</p>"
    +"<p>" + mark1 + "," + mark2 + "," + mark3 + "," + mark4 + "," + mark5 + "</p>"
    + "<p>Average mark:" + "</p>" + "<p>" + Name + " "+ SurName + " " + "(" + Student_code + "):" + average_mark + "</p>";


    if (average_mark <= 4) {
        displayDiv.innerHTML = "<p>Hello " + Name + " " + SurName + " " + "(" + Student_code + ")</p>";
        displayDiv.classList.add('red-background');
    } 
    else if (average_mark <= 8) {
        displayDiv.innerHTML = "<p>Hello " + Name + " " + SurName + " " + "(" + Student_code + ")</p>";
        displayDiv.classList.add('orange-background');
    }
    else {
        displayDiv.innerHTML = "<p>Hello " + Name + " " + SurName + " " + "(" + Student_code + ")</p>";
        displayDiv.classList.add('green-background');
    }

    return false;
}