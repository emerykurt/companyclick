// All functions/Variables that need local scope

function fetchTop(){
    fetch('http://localhost:3000/companies/top_companies')
    .then(res => res.json())
    .then(addTopToDom)
} //working
function addTopToDom(response){
    response.data.forEach( company => {
        topCompaniesList.innerHTML += `<li id="company-${company.id}">${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}</li>`
    })
}//working

function fetchCompanies(){
    fetch('http://localhost:3000/companies')
    .then(res => res.json())
    .then(addCompaniesToDom)
} //working

function addCompaniesToDom(response){
    enterArea.innerHTML = " "
    let buttons = []
    response.data.forEach( company => {
        enterBody.innerHTML += `<li id="company-${company.id}">${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}</li><br/>
        <button class="review-comp" id="company-info-${company.id}">Write a Review</button>`
       
    
    })
  
    
}  // infested

const handleClickEvent = (e) => {
    if (e.target.id.includes('company-info')){
        writeReview()
    } else if (e.target === quizButton){
        debugger
        renderQuiz()
    } else if (e.target === companiesList){
        fetchCompanies()
    } else if (e.target === moreInfoBtn){
        renderMoreInfo() //WIP
    }
}//working



const writeReview = () => {
    console.log("form is showing")
    const reviewForm = `<form id="company-review">
    <label for="interview">Interview:</label>
    <input type="checkbox" name="Username" id="interview"><br/>
    <label for="first_name">First Name:</label>
    <input type="text" name="first_name" id="first_name"><br/>
    <label for="username">Username:</label>
    <input type="text" name="Username" id="username"><br/>
    <input type="submit" value="Submit Review" id="company-review-submit">
    </form>`
    enterArea.innerHTML = reviewForm
} // working

function renderQuiz(){
    console.log("The quiz is on FYAH")
    enterArea.innerHTML = " "
            enterArea.innerHTML =
                `<div id="quiz"></div>
                <button id="submit">Get Results</button>
                <div id="results"></div>`
}
function buildQuiz(){
    const myQuestions = []
}
function submitResults(){

}