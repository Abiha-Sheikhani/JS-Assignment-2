let Total = 75;
let engnumber = +prompt("Enter your english number out of 75");
let mathnumber = +prompt("Enter your maths number out of 75");
let bionumber = +prompt("Enter your biology number out of 75");
let phynumber = +prompt("Enter your physics number out of 75");
let chemnumber = +prompt("Enter your Chemistry number out of 75");

let percentageEng = (engnumber / Total) * 100;
let percentageMath = (mathnumber / Total) * 100;
let percentageBio = (bionumber / Total) * 100;
let percentagePhy = (phynumber / Total) * 100;
let percentageChem = (chemnumber / Total) * 100;


function grade(percentage) {
    if (percentage >= 90) {
        return "A++"
    }
    else if (percentage >= 80) {
        return "A+"
    }
    else if (percentage >= 70) {
        return "A"
    }
    else if (percentage >= 60) {
        return "B"
    }
    else if (percentage >= 50) {
        return "C"
    }
    else {
        return "Fail"
    }
}

document.write( "<div class='wrapper'>"+ "<table class= 'text-center m-auto mt-5 mytable'>" +
    "<tr class='myrow'>" +
    "<th class='column p-3'>" + "Subject" + "</th>" +
    "<th class='column p-3'>" + "Total Marks" + "</th>" +
    "<th class='column p-3'>" + "Obtained Marks" + "</th>" +
    "<th class='column p-3'>" + "Percentage" + "</th>" +
    "<th class='column p-3'>" + "Grade" + "</th>" +
    "</tr>"
     +
    "<tr class='myrow'>" +
    "<td class='column p-3'>" + "English" + "</td>" +
    "<td class='column'>" + Total + "</td>" +
    "<td class='column'>" + engnumber + "</td>" +
    "<td class='column'>" + percentageEng + "</td>" +
    "<td class='column'>" + grade(percentageEng) + "</td>" +
    "</tr>" +
    "<tr class='myrow'>" +
    "<td class='column p-3'>" + "Maths" + "</td>" +
    "<td class='column'>" + Total + "</td>" +
    "<td class='column'>" + mathnumber + "</td>" +
    "<td class='column'>" + percentageMath + "</td>" +
    "<td class='column'>" + grade(percentageMath) + "</td>" +
    "</tr>" 
    +
    "<tr class='myrow'>" +
    "<td class='column p-3'>" + "Biology" + "</td>" +
    "<td class='column'>" + Total + "</td>" +
    "<td class='column'>" + bionumber + "</td>" +
    "<td class='column'>" + percentageBio + "</td>" +
    "<td class='column'>" + grade(percentageBio) + "</td>" +
    "</tr>" 
    +
    "<tr class='myrow'>" +
    "<td class='column p-3'>" + "Physics" + "</td>" +
    "<td class='column'>" + Total + "</td>" +
    "<td class='column'>" + phynumber + "</td>" +
    "<td class='column'>" + percentagePhy + "</td>" +
    "<td class='column'>" + grade(percentagePhy) + "</td>" +
    "</tr>" 
    +
    "<tr class='myrow'>" +
    "<td class='column p-3'>" + "Chemistry" + "</td>" +
    "<td class='column'>" + Total + "</td>" +
    "<td class='column'>" + chemnumber + "</td>" +
    "<td class='column'>" + percentageChem + "</td>" +
    "<td class='column'>" + grade(percentageChem) + "</td>" +
    "</tr>" +
    "</table>" + "</div>")



