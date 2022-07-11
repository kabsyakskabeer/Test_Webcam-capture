
const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [];
let currentQuestion = [];
const myAnswers = [];

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");


window.onload = function(){


  fetch('https://kabsyakskabeer.github.io/TheHare/questions.json')
  .then((response) => {
    if (!response.ok) {
       throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  
  })
  .then((data) => { 
    let counter = 1;
   for( let datum of data){
    
    let qAndA = {};
    qAndA.question =  `<p>${counter}. ${datum.quest}</p>
        
    <div>
    <input type="radio" name="questiona" value="a" class="rad_butn">
    a:  ${datum.ans.a}
    </div>
    <div>
    <input type="radio" name="questiona" value="b" class="rad_butn">
    b:  ${datum.ans.b}
    </div>
    <div>
    <input type="radio" name="questiona" value="c" class="rad_butn">
    c:  ${datum.ans.c}
    </div>
    <div>
    <input type="radio" name="questiona" value="d" class="rad_butn">
    d:  ${datum.ans.d}
    </div>

   `;
   qAndA.answer = datum.cAns;



      myQuestions.push(
        qAndA
      );
      counter = counter + 1;

  }
 
   quizBox.innerHTML =  myQuestions[0].question;

   currentQuestion = myQuestions[0];

  });

  
}
nextButton.addEventListener('click', function(){
   // currentQuestion = myQuestions[1];
    let my = function(){
      let index = myQuestions.indexOf(currentQuestion);
      return index +1;
    };
    currentQuestion = myQuestions[my()];
   if (currentQuestion !== undefined){
    quizBox.innerHTML = currentQuestion.question;
   }
    
   
} );

previousButton.addEventListener('click', function(){
    
  let my = function(){
      let index = myQuestions.indexOf(currentQuestion);
      return index -1;
    };
    currentQuestion = myQuestions[my()];
   if(currentQuestion !== undefined){
    quizBox.innerHTML = currentQuestion.question;
   }
   resultsBox.innerHTML = ' ';
   
} );
submitButton.addEventListener('click',function(){

  const checkedItem = document.querySelector('input[name=questiona]:checked').value;

  if(currentQuestion !== undefined && checkedItem !== null){
    if(checkedItem === currentQuestion.answer){
      resultsBox.innerHTML = currentQuestion.answer;
    }else{
      resultsBox.innerHTML = '<p>wrong</p>'
    }

    //myAnswers[myQuestions.indexOf(currentQuestion)];
  }
});