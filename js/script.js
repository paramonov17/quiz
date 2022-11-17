const questions = [
    {   
        question: "Вопрос 1",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 4,
    },

    {   
        question: "Вопрос 2",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 2,
    },

    {   
        question: "Вопрос 3",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 4,
    },

    {   
        question: "Вопрос 4",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 1,
    },

    {   
        question: "Вопрос 5",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 1,
    },

    {   
        question: "Вопрос 6",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 3,
    },
    
    {   
        question: "Вопрос 7",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 2,
    },
    
    {   
        question: "Вопрос 8",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 3,
    },
    
    {   
        question: "Вопрос 9",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 1,
    },
    
    {   
        question: "Вопрос 10",
        answer: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"],
        correct: 2,
    },
    
];

let questionIndex = 0;

let score = 0;

const btnStart = document.querySelector('.start'); 

const btnControl = document.querySelector('.quiz__control-btn'); 

const btnProcessing = document.querySelector('.quiz__processing-btn'); 

const quizDescription = document.querySelector('.quiz__description');

const quizContent = document.querySelector('.quiz');

const quizHeader = document.querySelector('.quiz__header');

const quizList = document.querySelector('.quiz__list');

const quizWarning = document.querySelector('.quiz__warning');

const quizTitle = document.querySelector('.quiz__title');

btnStart.onclick = function (){
    quizDescription.innerHTML = '';
    btnStart.style.display = "none";
    btnControl.style.display = "block";
    quizContent.style.display = "block";
}

clearPage();

showQuestion();

btnControl.onclick = checkAnswer;

function clearPage() {
    quizHeader.innerHTML = '';
    quizList.innerHTML = '';
}

function showQuestion() {

    const headerTemplate = `<h2 class="quiz__header-title">%title%</h2>`;

    const title = headerTemplate.replace('%title%', questions[questionIndex].question);

    quizHeader.innerHTML = title;

    current = 1;

    for (answerText of questions[questionIndex].answer){
      

        const questionTemplate = '<li class="quiz__list-item"><label><input value="%number%" type="radio" class="quiz__input-answer" name="answer" /><span>%answer%</span></label></li>';

        const answerHTML = questionTemplate.replace('%answer%', answerText);

        const answerHTMLend = answerHTML.replace('%number%', current);

        quizList.innerHTML += answerHTMLend;

        current++;
    }
}



function rezultQuiz(){
    const rezult = score / questions.length;
    const rezultProz = rezult*100;
    clearPage();
    quizTitle.textContent = 'Результаты тестирования';
    if (rezultProz >=70){

    }
}


function checkAnswer(){

    const checkRadio = quizList.querySelector('input:checked');
   
    if (checkRadio){

        if (parseInt(checkRadio.value) == questions[questionIndex].correct){
            score++;
        }
        
        if (questionIndex < questions.length-1){
            questionIndex++;

            clearPage();

            showQuestion();

            quizWarning.style.display = "none";
        }
        else{
            rezultQuiz();
            btnControl.style.display = "none";
            btnProcessing.style.display = "flex";
        }


    }
    else{
        quizWarning.style.display = "inline-block"; 
}

}
btnProcessing.onclick = checkProcessing;

