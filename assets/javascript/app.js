// Need a counter for all of the right answers

//need a check for each question to 

//need a submit button  that leads to that check

//we can do 4 card bodies that have a spot for us to text our question and 
//listen for the click on. That click could fill the attribute with a value
//we then use that value for our question check. 


//We need a function for each set of questions we answer. So as the submit button 
//gets higher, we go to the next function which is a set of questions 
//being texted out.

// var setup = {
//     questions = [
//         { questionText: "How cool is Gary",
//         answers:[
//                 "super cool", "very cool", "not cool at all"

//         ]
//         correctAnswer=answer[2];

//         },



//     ]
// }

var panel = $('#quiz-area');

//CLICK EVENTS

$(document).on('click', '#start', function (e) {
    start();
});

$(document).on('click', '#done', function (e) {
    done();
});

//Questions

var questions = [{
    question: "1 . In which year was the Personal Computer featured as the Times 'Man of the Year'?",
    answers: ["1982", "1992", "1987", "1985"],
    correctAnswer: "1982"
}, {
    question: "2 . Which company first produced the 3 1/2 inch floppy disk?",
    answers: ["IBM in 1971", "Microsoft in 1983", "Philips in 1980", "Sony in 1981"],
    correctAnswer: "Sony in 1981"
}, {
    question: "3 . What is the name of Linux's Mascot?",
    answers: ["Humphrey (a goose)", "Gerald (a mouse)", "Tux (a penguin)", "Juri (a T-rex)"],
    correctAnswer: "Tux (a penguin)"
}, {
    question: "4 . What was the first full length computer generated feature film?",
    answers: ["Ice Age", "Toy Story", "Final Destiny", "Lilo & Stitch"],
    correctAnswer: "Toy Story"
}, {
    question: "5 . Which company first manufactured CDs?",
    answers: ["Time-Warner", "Yamaha", "IBM", "Philips"],
    correctAnswer: "Philips"
}, {
    question: "6 . With over 17 million units produced, what was the highest selling single model of personal computer ever?",
    answers: ["Commodore Amiga 500", "Apple II", "Commodore 64", "iMac"],
    correctAnswer: "Commodore 64"
}, {
    question: "7 . 1 KB is equal to?",
    answers: ["1064 Bytes", "1256 Bytes", "1024 Bytes", "1000 Bytes"],
    correctAnswer: "1024 Bytes"
}, {
    question: "8 . In what year was the first Apple computer released?",
    answers: ["1980", "1983", "1978", "1976"],
    correctAnswer: "1976"
}, {
    question: "9 . In what year was DOS created?",
    answers: ["1981", "1973", "1977", "1985"],
    correctAnswer: "1981"
}, {
    question: "10 . TCP port number 80 is usually reserved for?",
    answers: ["Telnet", "HTTP", "E-mail", "FTP"],
    correctAnswer: "HTTP"
}];

var correct = 0;
var incorrect = 0;
var counter = 60;

function countdown() {
    if (counter>0);
    counter--;
    $('#counter-number').html(counter);
    console.log(counter);


    if (counter === 0) {
        console.log(counter);
        console.log('TIME UP');
        done();
    }
}

function start() {
    timer = setInterval(countdown(), 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
        panel.append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
            panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
        }
    }

    panel.append('<button id="done">Done</button>');
}

function done() {

    // $.each($("input[name='question-0']:checked"), function () {
    //     if ($(this).val() == questions[0].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-1']:checked"), function () {
    //     if ($(this).val() == questions[1].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-2']:checked"), function () {
    //     if ($(this).val() == questions[2].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-3']:checked"), function () {
    //     if ($(this).val() == questions[3].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-4']:checked"), function () {
    //     if ($(this).val() == questions[4].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-5']:checked"), function () {
    //     if ($(this).val() == questions[5].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-6']:checked"), function () {
    //     if ($(this).val() == questions[6].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-7']:checked"), function () {
    //     if ($(this).val() == questions[7].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-8']:checked"), function () {
    //     if ($(this).val() == questions[8].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    // $.each($("input[name='question-9']:checked"), function () {
    //     if ($(this).val() == questions[9].correctAnswer) {
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    // });
    
    for (var i = 0; i < 10; i++) {
        $.each($("input[name='question-"+i+"']:checked"), function () {
        if ($(this).val() == questions[i].correctAnswer) {
            correct++;
        } 
        else {
            incorrect++;
        }
    });
          this.result();
          console.log(this);
    }
}
        function result() {

            clearInterval(timer);

            $('#subwrapper h2').remove();
            panel.html('<h2>All Done!</h2>');
            panel.append('<h3> Correct Answers: ' + this.correct + '</h3>');
            panel.append('<h3> Incorrect Answers: ' + this.incorrect + '</h3>');
            panel.append('<h3> Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
}