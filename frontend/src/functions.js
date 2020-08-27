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
    // .then(renderMoreInfo)
    // .then(renderLessInfo)
} //working

function addCompaniesToDom(response){
    enterArea.innerHTML = " "
    response.data.forEach( company => {
        enterBody.innerHTML += `
        <li id="company-${company.id}">${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}
        <div id="element-moreInfoCheckBox-${company.id}" class="moreInfoCheckBox-${company.id}" style="display:none">Mission Statement: ${company.attributes.mission_statement}<br/>
        <button id="${company.attributes.website}">Apply Here</button>
        <button id="${company.attributes.twitter}">Twitter</button><br/><br/>
        </div>
        </li>
        <label for="more-info" id="moreInfoLabel-moreInfoCheckBox-${company.id}">more...</label>
        <input type="checkbox" name="moreInfo" id="moreInfoCheckBox-${company.id}"><br/>
        <button class="review-comp" id="company-info-${company.id}">Write a Review</button>`
    }) 
    return response.data   
}  // working

const handleClickEvent = (e) => {
    // debugger
    if (e.target.id.includes('company-info')){
        writeReview()
    } else if(e.target.id.includes('moreInfoCheckBox-')){
        toggleMoreInfo(e.target) 
    } else if(e.target.id.includes('https://')){
        applyLink(e.target) 
    } else if(e.target.id.includes('https://www.twitter')){
        twitterLink(e.target) 
    } else if (e.target === quizButton){
        renderQuiz() //WIP
    } else if (e.target === companiesList){
        fetchCompanies()
    } else if (e.target.id === "hiredCheckBox" && e.target.checked === true){
        renderHiredExtension()
    } else if (e.target.id === "hiredCheckBox" && e.target.checked === false){
        clearHiredExtension()
    } else if (e.target.id === "interviewCheckBox" && e.target.checked === true){
    renderInterviewExtension()
    } else if (e.target.id === "interviewCheckBox" && e.target.checked === false){
    clearInterviewExtension()
    }
}//working

const toggleMoreInfo = (info) => {
    // debugger
    if (info.checked === true){
        // debugger
        const moreInfoArea = document.getElementById(`element-${info.id}`)
        moreInfoArea.style.display = 'block'
        const moreInfoLabel = document.getElementById(`moreInfoLabel-${info.id}`)
        moreInfoLabel.innerHTML = "less..."
    }
    else if (info.checked === false){
        // debugger
        const moreInfoArea = document.getElementById(`element-${info.id}`)
        moreInfoArea.style.display = 'none'
        const moreInfoLabel = document.getElementById(`moreInfoLabel-${info.id}`)
        moreInfoLabel.innerHTML = "more..."
    }
}

const applyLink = (info) => {
    console.log("APPLY")
    window.open(info.id, "_blank");
}

const twitterLink = (info) => {
    console.log("TWITTER")
    window.open(info.id, "_blank");
}

const writeReview = () => {
    const reviewForm = `<form id="company-review">
    <label for="interview">Did you interview?</label>
    <input type="checkbox" name="Interview" id="interviewCheckBox"><br/>
        <div id="interviewExt" form="interview-portion">
        </div>
    <label for="firstname">First Name:</label>
    <input type="text" name="firstName"><br/>
    <label for="last_name">Last Name:</label>
    <input type="text" name="last_name" id="last_name"><br/>
    <label for="city">City:</label>
    <input type="text" name="city" id="city"><br/>
    <label for="state">State:</label>
    <input type="text" name="state" id="state"><br/>
    <label for="bootcamp">What bootcamp did you go to?</label>
    <select name="bootcamp" id="bootcamp" form="signUpForm">
        <option value="FlatIron">FlatIron</option>
        <option value="General Assembly">General Assembly</option>
        <option value="Kenzie Academy">Kenzie Academy</option>
        <option value="Thinkful">Thinkful</option>
        <option value="Springboard">Springboard</option>
        <option value="App Academy">App Academy</option>
        <option value="Ironhack">Ironhack</option>
        <option value="Le Wagon">Le Wagon</option>
        <option value="CareerFoundary">CareerFoundary</option>
        <option value="Nucamp">Nucamp</option>
        <option value="Code Institute">Code Institute</option>
        <option value="Lambda School">Lambda School</option>
        <option value="other">other</option>
    </select><br/>
    <input type="submit" value="Submit Review" id="sign-up-submit">
    </form>` 
    enterArea.innerHTML = reviewForm
} // working

function renderInterviewExtension(){
    // debugger
    const interviewExtenArea = document.getElementById("interviewExt")
    const interviewExtForm = `
    <label for="interview">Interview Process:</label>
    <input type="text" name="Interview Process" id="interview-process"><br/>
    <label for="hired">Were you hired?</label>
    <input type="checkbox" name="hired" id="hiredCheckBox"><br/>
        <div id="hiredExt" form="hired-portion">
        </div>`
    interviewExtenArea.innerHTML = interviewExtForm
}

function clearInterviewExtension(){
    const interviewExtenArea = document.getElementById("interviewExt")
    interviewExtenArea.innerHTML = " " 
}

function renderHiredExtension(){
    const hiredExtenArea = document.getElementById("hiredExt")
    const hiredExtForm = `
    <label for="company-lifestyle">Company Lifestyle:</label>
    <input type="text" name="Company Lifestyle" id="company-lifestyle"><br/>
    <label for="compensation">Compensation (this information will not be displayed or connected with your name):</label>
    <input type="number" min="50000.00" step="500.00" name="compensation" id="compensation"><br/>
    <label for="management-mentorship">Management/Mentorship:</label>
    <input type="text" name="Management Mentorship" id="management-mentorship"><br/>
    <label for="diversity">Diversity:</label>
    <input type="text" name="Diversity" id="diversity"><br/>`
    hiredExtenArea.innerHTML = hiredExtForm
}

function clearHiredExtension(){
    const hiredExtenArea = document.getElementById("hiredExt")
    hiredExtenArea.innerHTML = " "
}

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