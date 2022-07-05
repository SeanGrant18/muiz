var questions = [
    {
        prompt: "How long was avengers endgame?\n(a) 3h 2m\n\(b) 4h\n(c) 2h 30m",
        answer: "a"
    },
    {
        prompt: "How long was Terminator?\n(a) 1h 2m\n\(b) 1h 47m\n(c) 3h 30m",
        answer: "b"
    },
    {
        prompt: "How many seasons in Prison Break?\n(a) 5\n\(b) 4\n(c) 7",
        answer: "a"
    },
]

var score = 0

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct");
    }else {
        alert("Incorrect");
    }
}

alert("You got" + score + "/" + questions.length);