
const question = [
{
    question: "Which is my favourite dessert?",
    answers :[
        { text:"Ice-cream", correct: true},
        { text:"Pastries", correct: false},
        { text:"Cookies", correct: false},
        { text:"Pudding", correct: false},
    ]

},
{
    question: "Whats my favourite day of the week?",
    answers :[
        { text:"monday", correct: false},
        { text:"Thursday", correct: false},
        { text:"Saturday", correct: false},
        { text:"Sunday", correct: true},
    ]

},
{
    question: "Which is my favourite Place?",
    answers :[
        { text:"Mumbai", correct: false},
        { text:"Maldives", correct: true},
        { text:"keral", correct: false},
        { text:"Goa", correct: false},
    ]

},
{
    question: "Which is my favourite bird?",
    answers :[
        { text:"Peacock", correct: true},
        { text:"crow", correct: false},
        { text:"Sparrow", correct: false},
        { text:"Parrot", correct: false},
    ]

},
{
    question: "Which is my favourite Animal?",
    answers :[
        { text:"Cat", correct: false},
        { text:"Tiger", correct: false},
        { text:"Dog", correct: true},
        { text:"Lion", correct: false},
    ]

},
{
    question: "Which is my favourite hobby?",
    answers :[
        { text:"Painting", correct: true},
        { text:"Singing", correct: false},
        { text:"Reading", correct: false},
        { text:"Dancing", correct: false},
    ]

}
];



const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const NextBtn = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0; //reset
    score = 0;
    NextBtn.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){

    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        
        const button = document.createElement("button");
        button.innerHTML = answers.text;
         button.classList.add("btn1");
         answerButton.appendChild(button);

        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}



 function resetState(){

    NextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
     }
 }

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
        
    }

    Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        NextBtn.style.display = "block";
        

}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${question.length}!`;
    NextBtn.innerHTML = "Play Again";
    NextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else
    {
        showScore();
    }
}

NextBtn.addEventListener("click", () =>{
if(currentQuestionIndex < question.length){
    handleNextButton();
}
else
{
    startQuiz();
}
});

startQuiz();

