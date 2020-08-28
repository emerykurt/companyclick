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
    } else if (e.target.id === "sign-up-submit"){
        submitResults(e)
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

const toggleHired = (e) => {
    if (e.checked === true){
        const interviewExtenArea = document.getElementById("interviewExt")
        const interviewExtForm = `
        <label for="interview">Interview Process:</label>
        <select name="interviewProcess" id="interviewProcess" form="company-review">
            <option value=" "> </option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="extensive">extensive</option>
        </select><br/>
        <label for="hired">Were you hired?</label>
        <input type="checkbox" name="hired" id="hiredCheckBox"><br/>
        <div id="hiredExt" form="hired-portion">
        </div>`
        interviewExtenArea.innerHTML = interviewExtForm
    } else if (e.checked === false){
        const interviewExtenArea = document.getElementById("interviewExt")
        interviewExtenArea.innerHTML = " " 
    }
}
const toggleMoreInfo = (e) => {
    // debugger
    if (e.checked === true){
        // debugger
        const moreInfoArea = document.getElementById(`element-${e.id}`)
        moreInfoArea.style.display = 'block'
        const moreInfoLabel = document.getElementById(`moreInfoLabel-${e.id}`)
        moreInfoLabel.innerHTML = "less..."
    }
    else if (e.checked === false){
        // debugger
        const moreInfoArea = document.getElementById(`element-${e.id}`)
        moreInfoArea.style.display = 'none'
        const moreInfoLabel = document.getElementById(`moreInfoLabel-${e.id}`)
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
    <label for="company-id">Company:</label>
    <select name="companyId" id="companyId" form="company-review">
        <option value=" "> </option>
        <option value="1">HubSpot</option>
        <option value="2">DocuSign</option>
        <option value="3">Ultimate Software</option>
        <option value="4">Google</option>
        <option value="5">LinkedIn</option>
        <option value="6">MathWorks</option>
        <option value="7">Nvidia</option>
        <option value="8">Microsoft</option>
        <option value="9">Facebook</option>
        <option value="10">Compass</option>
        <option value="11">Survey Monkey</option>
        <option value="12">Saleforce</option>
        <option value="13">Kronos Incorporated</option>
        <option value="14">VMware</option>
        <option value="15">Adobe</option>
        <option value="16">Appfolio</option>
        <option value="17">SAP</option>
        <option value="18">CDW</option>
        <option value="19">Yardi Systems</option>
        <option value="20">JDA Software (Blue Yonder)</option>
        <option value="21">Nextiva</option>
        <option value="22">Paycom</option>
        <option value="23">Dell</option>
        <option value="24">Slack</option>
        <option value="25">Intuit</option>
        <option value="26">Noon</option>
        <option value="27">UST Global</option>
        <option value="28">Cisco Systems</option>
        <option value="29">Apple</option>
        <option value="30">Epic Systems</option>
        <option value="31">Intel</option>
    </select><br/>
    <label for="interview">Did you interview?</label>
    <input type="checkbox" name="Interview" id="interviewCheckBox"><br/>
        <div id="interviewExt" form="interview-portion">
        </div>
    <label for="firstname">First Name:</label>
    <input type="text" name="firstName" id="firstName><br/>
    <label for="last_name">Last Name:</label>
    <input type="text" name="last_name" id="lastName"><br/>
    <label for="city">City:</label>
    <input type="text" name="city" id="city"><br/>
    <label for="state">State:</label>
    <input type="text" name="state" id="state"><br/>
    <label for="bootcamp">What bootcamp did you go to?</label>
    <select name="bootcamp" id="bootcamp" form="company-review">
        <option value=" "> </option>
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
} 

function renderInterviewExtension(){
    // debugger
    const interviewExtenArea = document.getElementById("interviewExt")
    const interviewExtForm = `
    <label for="interview">Interview Process:</label>
    <select name="interviewProcess" id="interviewProcess" form="company-review">
        <option value=" "> </option>
        <option value="easy">easy</option>
        <option value="moderate">moderate</option>
        <option value="extensive">extensive</option>
    </select><br/>
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
    <select name="companyLifestyle" id="companyLifestyle" form="signUpForm">
        <option value=" "> </option>
        <option value="innovative">innovative</option>
        <option value="challenging">challenging</option>
        <option value="progressive">progressive</option>
        <option value="micromanaged">micromanaged</option>
        <option value="flexible">flexible</option>
        <option value="problematic">problematic</option>
    </select><br/>
    <label for="compensation">Compensation (this information will not be displayed or connected with your name):</label>
    <input type="number" min="50000.00" step="5.00" name="compensation" id="compensation"><br/>
    <label for="management-mentorship">Management/Mentorship:</label>
    <select name="managementMentorship" id="managementMentorship" form="signUpForm">
        <option value=" "> </option>
        <option value="yes">yes</option>
        <option value="no">no</option>
    </select><br/>
    <label for="diversity">Diversity:</label>
    <select name="diversity" id="diversity" form="signUpForm">
    <option value=" "> </option>
    <option value="yes">yes</option>
    <option value="no">no</option>
    </select><br/>`
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
function submitResults(e){
    debugger
    console.log("we are here")
    const interview = document.getElementById("interview")
    const interviewProcess = document.getElementById("interviewProcess")
    const hired = document.getElementById("hiredCheckBox")
    const companyLifestyle = document.getElementById("companyLifestyle")
    const compensation = document.getElementById("compensation")
    const managementMentorship = document.getElementById("managementMentorship")
    const diversity = document.getElementById("diversity") 
    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const bootcamp = document.getElementById("bootcamp")
    const city = document.getElementById("city")
    const state = document.getElementById("state")
    const companyId = document.getElementById("companyId")
}