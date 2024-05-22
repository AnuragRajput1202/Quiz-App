let questions = [
    {
        question: "What is the capital of Italy?",
        optionA: "Venice",
        optionB: "Rome",
        optionC: "Naples",
        optionD: "Florence", 
        correct: "optionB"
    },
    {
        question:"Which river flows through London?",
        optionA: "River Severn",
        optionB: "River Trent",
        optionC: "River Thames",
        optionD: "River Great Ouse",
        correct: "optionC"
    },
    {
        question: "On which continent is the Sahara Desert located?",
        optionA: "Asia",
        optionB: "South America",
        optionC: "Africa",
        optionD: "Europe",
        correct: "optionC"
    },
    {
        question: "How tall is Mount Everest?",
        optionA: "6,849 m",
        optionB: "7,849 m",
        optionC: "8,849 m",
        optionD: "9,849 m",
        correct: "optionC"
    },
    {
        question: "In which US state can you find the city of Chicago?",
        optionA: "Mississippi",
        optionB: "Missouri",
        optionC: "Illinois",
        optionD: "Arizona",
        correct: "optionC"
    },
    {
        question: "What is the capital of the United Arab Emirates?",
        optionA: "Dubai",
        optionB: "Abu Dhabi",
        optionC: "Sharjah",
        optionD: "Ajman",
        correct: "optionB"
    },
    {
        question: "What is the smallest country in the world?",
        optionA: "Andorra",
        optionB: "Luxembourg",
        optionC: "Vatican City",
        optionD: "Belgium",
        correct: "optionC"
    }
]

let playButton = document.querySelector("#start-next-btn");
let content = document.querySelector(".content");
let ques = document.querySelector(".question");
let options = document.querySelectorAll(".options");

let questionCounter = 0;
let userScore = 0;
var clickCount = 0;

const playQuiz = () =>{
    questionCounter = 0;
    resetGame();
} 

const resetGame = () =>{
    content.style.display = "none";
    playButton.addEventListener("click", () => {

        questionCounter++;
        clickCount = 0;
        showQuestion();
    });
}

const showQuestion = () =>{
    document.getElementById("optionA").style.display = "block";
    document.getElementById("optionB").style.display = "block";
    document.getElementById("optionC").style.display = "block";
    document.getElementById("optionD").style.display = "block";
    if(questionCounter<=7){
        document.getElementById("optionA").style.backgroundColor = "Initial";
        document.getElementById("optionB").style.backgroundColor = "Initial";
        document.getElementById("optionC").style.backgroundColor = "Initial";
        document.getElementById("optionD").style.backgroundColor = "Initial";
        ques.innerText = questionCounter + ". " + questions[questionCounter-1]["question"];
        document.getElementById("optionA").innerText = questions[questionCounter-1]["optionA"];
        document.getElementById("optionB").innerText = questions[questionCounter-1]["optionB"];
        document.getElementById("optionC").innerText = questions[questionCounter-1]["optionC"];
        document.getElementById("optionD").innerText = questions[questionCounter-1]["optionD"];
        content.style.display = "block";
        playButton.innerText = "Next";
        userChoice();
    } else{
        showScore();
    }
}

const userChoice = () =>{
    options.forEach(option=>{
        option.addEventListener("click", function firstChoice(e){
            clickCount++;
            if(clickCount<=1){
                if(e.target.id === questions[questionCounter-1]["correct"]){
                    userScore++;
                    showAnswer();
                } else{
                    e.target.style.backgroundColor = "#ef476f";
                    showAnswer();
                }
            }
        })
    });
}

const showScore = () =>{
    ques.innerText = `You scored ${userScore} out of ${questions.length}!`;
    document.getElementById("optionA").style.display = "none";
    document.getElementById("optionB").style.display = "none";
    document.getElementById("optionC").style.display = "none";
    document.getElementById("optionD").style.display = "none";

    playButton.innerText = "Play Again";
    questionCounter = 0;
    userScore = 0;
}
const showAnswer = () =>{
    document.getElementById(questions[questionCounter-1]["correct"]).style.backgroundColor = "#06d6a0";
}

playQuiz();
