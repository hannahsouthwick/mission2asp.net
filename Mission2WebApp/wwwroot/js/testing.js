
//Build a JavaScript program that calculates and displays
//both a final percentage and a letter grade using the "Grade Calculator"
//form entries based on the weights listed in the syllabus.Use jQuery selectors(i.e.the “$”) in your program.

$("#testbtn").click(function () {

    var a = parseFloat($("#assignments").val());
    var p = parseFloat($("#gproject").val());
    var q = parseFloat($("#quizzes").val());
    var e = parseFloat($("#exams").val());
    var i = parseFloat($("#intex").val());

    var total = a + p + q + e + i;
    var letter;

    if (total >= 94) {
        letter = "A"
    }
    else if ((total < 94) & (total >= 90)) {
        letter = "A-"
    }
    else if ((total < 90) & (total >= 87)) {
        letter = "B+"
    }
    else if ((total < 87) & (total >= 84)) {
        letter = "B"
    }
    else if ((total < 84) & (total >= 80)) {
        letter = "B-"
    }
    else if ((total < 80) & (total >= 77)) {
        letter = "C+"
    }
    else if ((total < 77) & (total >= 74)) {
        letter = "C"
    }
    else if ((total < 74) & (total >= 70)) {
        letter = "C-"
    }
    else if ((total < 70) & (total >= 67)) {
        letter = "D+"
    }
    else if ((total < 67) & (total >= 64)) {
        letter = "D"
    }
    else if ((total < 64) & (total >= 60)) {
        letter = "D-"
    }
    else {
        letter = "E"
    }

    alert("Your total percentage is " + total + "/100% \n" +
        "Your letter grade is a(n) " + letter);
})