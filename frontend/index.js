document.addEventListener('DOMContentLoaded', (init)) 
function init(){ 
const topCompaniesList = document.getElementById("topCompaniesList");
const companiesList = document.getElementById("companiesList");
const quizButton = document.getElementById("quizButton");
const enterArea = document.querySelector('#enter-area');
const enterBody = document.getElementById("enter-area");
const loginSubmitButton = document.getElementById("login-submit");
const signUpSubmitButton = document.getElementById("sign-up-submit");
const navBar = document.getElementById("nav");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


//show all of the companies
function fetchTop(){
    fetch('http://localhost:3000/companies/top_companies')
    .then(res => res.json())
    .then(addTopToDom)
}
fetchTop()
function addTopToDom(response){
    response.data.forEach( company => {
        topCompaniesList.innerHTML += `<li id="company-${company.id}">${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}</li>`
    })
}


//navigator
function enterAreaClick (e){
    switch (e.target.id) {
        case "quizButton":
            enterArea.innerHTML = " "
            enterArea.innerHTML =
                `<div id="quiz"></div>
                <button id="submit">Get Results</button>
                <div id="results"></div>`
            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');
            quizContainer.innerHTML = buildQuiz
            function buildQuiz(){
                const myQuestions = []
            }
            submitButton.addEventListener('click', submitResults);
            function submitResults(){

            }

            break;
        case "companiesList":
            function fetchCompanies(){
                fetch('http://localhost:3000/companies')
                .then(res => res.json())
                .then(addCompaniesToDom)
            }
            fetchCompanies()

            function addCompaniesToDom(response){
                enterArea.innerHTML = " "
                response.data.forEach( company => {
                    enterBody.innerHTML += `<li id="company-${company.id}">${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}</li><br/>
                    <button class="review-comp" id="company-info-${company.id}">Write a Review</button>`
                    let review = document.getElementById(`company-info-${company.id}`)
                    review.addEventListener('submit', writeReview)
                })
            }
            break;
        default:
            break;
    }
}

// document.addEventListener('DOMContentLoaded', (e) => { 
    companiesList.addEventListener('click', enterAreaClick)
}

