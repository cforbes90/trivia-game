


const questionTime=10;
const gaugeWidth =150;
var count =0;
var score = 0;
const gaugeUnit = gaugeWidth/questionTime;
const start = document.getElementById("start");
const quiz=document.getElementById("quiz");
const qImg =document.getElementById("qImg");
const question =document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge =document.getElementById("timeGauge");

const choiceA=document.getElementById("A");
const choiceB=document.getElementById("B");
const choiceC=document.getElementById("C");

const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");
var userAnswer ="";
runningQuestion=0; 

var userAnswer="";
var questions = [{
    question: "1. Where did Goku learn Instant Transmission?",
    imgSrc: "assets/images/instanttransmission.jpg",
    choiceA: "The Next Dimension",
    choiceB: "Planet Yardrat",
    choiceC: "Extreme self training while in the Hyperbolic Time Chamber ",
    correct: "B",

}, {
    question: "2 . Who was responsible for adult Gohan's pictured outfit?",
    imgSrc: "assets/images/gohan.jpg",
    choiceA: "King Yemma",
    choiceB: "Kibito",
    choiceC: "King Kai", 
    correct: "B",
},  {
    question: "3. How many Dragonballs must one collect in order to make a wish?",
    imgSrc: "assets/images/shenron.jpeg",
    choiceA: "10",
    choiceB: "5",
    choiceC: "7",
    correct: "C",

},  {
    question: "4. What Z Fighter was able to remove Vegeta's tail? ",
    imgSrc: "assets/images/vegeta.jpg",
    choiceA: "Yamcha",
    choiceB: "Broly",
    choiceC: "Krillin",
    correct: "C",
}, {
    
},{ question: "5. Who is NOT a member of the Ginyu Force?",
    imgSrc: "assets/images/ginyu-force.png",
    choiceA: "Broly",
    choiceB: "Zarbon",
    choiceC: "Recoome",
    correct: "A",
}]
const lastQuestion= questions.length; 

$(document).ready(function() {

    $("#start").on("click", function () {
    start.style.display ="none";
    quiz.style.display ="block";
    progressRender();
    questionRender();
    startQuiz();
    
    }); 

    $(".choice").on("click", function () {
             userAnswer=$(this).attr("id");
             console.log("What is this with id? " + userAnswer);  
            //startQuiz();
            checkAnswer();
            progressRender();
            questionRender();
    });
            
function startQuiz() {
    start.style.display ="none";
    // questionRender();
    quiz.style.display ="block";
    counterRender();
    checkAnswer();
    // TIMER=setInterval(counterRender,1000);
    // progressRender();
}
function checkAnswer(){
    for (i=0; i<=questions.length; i++){
        if( userAnswer == questions[runningQuestion].correct){
            //console.log("User Answer is " +userAnswer);
            score++;
            answerIsCorrect();
            runningQuestion++;
            questionRender();
            clearInterval(TIMER);
            scoreRender();
        }
         else { 
            answerIsWrong();
            count=0;
            runningQuestion++;
            questionRender();
            clearInterval(TIMER);
            scoreRender();
        }
    }
};
function questionRender() {
    q=questions[runningQuestion];
    $("#question").text(q.question);
    $("#qImg").html("<img src=" +q.imgSrc + ">");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
}   



function progressRender(){
    for(qIndex=0; qIndex<lastQuestion; qIndex++){
        progress.innerHTML += "<div class ='prog' id="+ qIndex + "></div>";    
    }
}
function counterRender(){
    if(count <= questionTime){
        counter.innerHTML=count;
        timeGauge.style.width = gaugeUnit * count + "px"; 
        count++;   
    }
    else{
        count=0;
        answerIsWrong();
    }
    if(runningQuestion <lastQuestion){
        runningQuestion++;
        questionRender();
    }
    else{ 
        clearInterval(TIMER);
        scoreRender();
    }
};

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor ="green";
}
    
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor="red";
}
function TIMER(){
    setInterval(counterRender, 1000)
} 
function scoreRender(){
    scoreContainer.style.display="block";
    scorePercent=Math.round(100* score/ questions.length);
    img= (scorePercent>= 80)?"assets/images/5.jpg":
    (scorePercent>= 60)?"assets/images/4.jpg":
    (scorePercent>= 40)?"assets/images/3.png":
    (scorePercent>= 20)?"assets/images/2.png": "assets/images/1.png";
    scoreContainer.innerHTML ="<img src=" +img +"><p>" +scorePercent + "%</p>";
};
});