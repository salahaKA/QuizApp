const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let quizScore =0;


startButton.addEventListener('click', startGame)

nextButton.addEventListener('click' ,() =>{
    currentQuestionIndex++
    setnextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort(() =>Math.random() -0.5)
    currentQuestionIndex =0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore =0

    
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions(currentQuestionIndex))
}


function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer) =>{
        const button=document.createElement('button')
        button.innerText= answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}




function resetState(){
   clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
   } 
}


function selectAnswer(e){
    const selectedButton =e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button)=> {
        setStatusClass(button ,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answers').innerText= quizScore
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Which one of these is a JS frame work?',
        answers :[
            { text: 'Python' , correct: false},
            { text: 'Django' , correct: false},
            { text: 'React' , correct: true},
            { text: 'Eclips' , correct: false}
        ],
    },

    {
        question: 'Who is the Father of C?',
        answers :[
            { text: 'Dennis Richie' , correct: true},
            { text: 'ZukkerBurg' , correct: false},
        ],
    },

    {
        question: 'What is 4*3?',
        answers :[
            { text: '6' , correct: false},
            { text: '12' , correct: true},  
        ],
    },

]
