const questions =[
    {
        question:"Name the folk dance of Andhra Pradesh?",
        answers:[
{ text:"Kuchipudi", correct:true},
{ text:" Bharatnatyam", correct:false},
{ text:"Marian Tranche", correct:false},
{ text:"Naurua", correct:false}
    
]
    },
    {
        question:"which is the smallest continent in the world?",
        answers:[
{ text:"Asia", correct:false},
{ text:" Anctarctica", correct:true},
{ text:"Europe", correct:false},
{ text:"Oceanic", correct:false}
        ]
    },
    {
        question:"which is the smallest continent in the world?",
        answers:[
{ text:"Shark", correct:false},
{ text:"Blue Whale", correct:true},
{ text:"Elephant", correct:false},
{ text:"Giraffe", correct:false}
        ]   
    },
    {
        question:"Which day is celebrated as Environment Day?",
        answers:[
{ text:"5 March", correct:false},
{ text:"5 July", correct:false},
{ text:"5 June", correct:true},
{ text:"5 August", correct:false}
        ]
    },
    {
        question:"Who is the executive head of the Union Territories?",
        answers:[
{ text:"Minister", correct:false},
{ text:" Prime Minister", correct:false},
{ text:"Home Minister", correct:false},
{ text:"President", correct:true}
        ]
    },

]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("nextbtn");

let currentQuestionindex=0;
let score = 0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextbutton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionindex];
let questionNo = currentQuestionindex+1;
questionElement.innerHTML=questionNo+". "+currentQuestion.
question;
currentQuestion.answers.forEach(answer => {
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
    }
    button.dataset.correct=answer.correct;
    button.addEventListener("click", selectanswer)
});
}
function resetState(){
    nextbutton.style.display="none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextbutton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out if ${questions.length}!`
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
        showQuestion();  
    } else{
        showScore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionindex<questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }

})
startQuiz();
