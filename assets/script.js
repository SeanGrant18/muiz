// Displaying The First Block Of Question.
document.getElementsByClassName('container')[0].style.display = "block";

// Defining The Next Function.
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none"
    document.getElementsByClassName('container')[id].style.display = "block"
}

// Getting Final Result.
function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    alert("You Have A Total Score Of : "+ score +"/5");
}