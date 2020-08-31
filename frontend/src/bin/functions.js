const resToJson = (res) => res.json()
// const ratingsAdapter = new RatingsAdapter
// const companiesAdapter = new CompaniesAdapter
// const handleClickEvent = (e) => {
//     // debugger
//     if (e.target.className === "review-comp"){
//         writeReview(e.target)
//     } else if (e.target.id === "sign-up-submit"){
//         submitResults(e)
//     } else if(e.target.className === "moreInfo"){
//         toggleMoreInfo(e.target) 
//     } else if(e.target.className === "companyApply"){
//         applyLink(e.target) 
//     } else if(e.target.className === "companyTwitter"){
//         twitterLink(e.target)
//     } else if(e.target.className === "delete"){
//         deleteReview(e.target)
//     } else if(e.target.className === "update"){
//         // debugger
//         e.target.className = "save"
//         e.target.innerText = "save"
//         updateReview(e) 
//     } else if (e.target.className === "save"){
//         // debugger
//         let revId = e.target.dataset.id
//         e.target.className = "update"
//         e.target.innerText = "update"
//         submitUpdate(revId)
//     } else if (e.target === companiesList){
//         fetchCompanies()
//     } else if (e.target.id === "hiredCheckBox"){
//         toggleHired(e.target)
//     } else if (e.target.id === "interviewCheckBox"){
//         toggleInterview(e.target)
//     }
// }

// function fetchTop(){
//     fetch('http://localhost:3000/companies/top_companies')
//     .then(resToJson)
//     .then(addTopToDom)
// } 



function fetchCompanies(){
    fetch('http://localhost:3000/companies')
    .then(resToJson)
    .then(addCompaniesToDom)
}

function addCompaniesToDom(response){
    enterArea.innerHTML = " "
    response.data.forEach( company => {
        enterArea.innerHTML += 
        `<li class="company" data-id="${company.id}">
            ${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}
            <label for="more-info" id="moreInfoText-${company.id}" class="moreInfoText" data-id="${company.id}">more...</label>
            <input type="checkbox" class="moreInfo" data-id="${company.id}"><br/>
                <div id="element-${company.id}" style="display:none">
                    Mission Statement: ${company.attributes.mission_statement}<br/>
                    <button class="companyApply" data-id="${company.attributes.website}">Apply Here</button>
                    <button class="companyTwitter" data-id="${company.attributes.twitter}">Twitter</button><br/><br/>
                </div>
            <button class="review-comp" data-id="${company.id}">Write a Review</button><br/><br/>
        </li>`
    }) 
} 

const toggleMoreInfo = (e) => {
    // debugger
    if (e.checked === true){
        // debugger
        const moreInfoArea = document.getElementById(`element-${e.dataset.id}`)
        moreInfoArea.style.display = 'block'
        const moreInfoLabel = document.getElementById(`moreInfoText-${e.dataset.id}`)
        moreInfoLabel.innerHTML = "...less"
    }
    else if (e.checked === false){
        // debugger
        const moreInfoArea = document.getElementById(`element-${e.dataset.id}`)
        moreInfoArea.style.display = 'none'
        const moreInfoLabel = document.getElementById(`moreInfoText-${e.dataset.id}`)
        moreInfoLabel.innerHTML = "more..."
    }
}

const applyLink = (e) => {
    console.log("APPLY")
    window.open(e.dataset.id, "_blank");
}

const twitterLink = (e) => {
    console.log("TWITTER")
    window.open(e.dataset.id, "_blank");
}

const writeReview = (e) => {
    // debugger
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
    <label for="first_name">First Name:</label>
    <input type="text" name="firstName" id="firstName">
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
    </form>
    <div class="infoSubmit" id:"review-results"></div>` 
    enterArea.innerHTML = reviewForm
    document.getElementById("companyId").selectedIndex = e.dataset.id
} 

function toggleInterview(e){
    // debugger
    if (e.checked === true) {
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
    }else if (e.checked === false){
        const interviewExtenArea = document.getElementById("interviewExt")
        interviewExtenArea.innerHTML = " " 
    }
}

const toggleHired = (e) => {
    if (e.checked === true){
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
        <label for="management-mentorship">Mentorship:</label>
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
    } else if (e.checked === false){
        const hiredExtenArea = document.getElementById("hiredExt")
        hiredExtenArea.innerHTML = " "
    }
}

function submitResults(e){
    // debugger
    e.preventDefault()
    console.log("we are here")
    const interviewProcess = document.getElementById("interviewProcess")
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

    let newInfoObj = {
        process: interviewProcess.value,
        lifestyle: companyLifestyle.value,
        compensation: compensation.value,
        mentorship: managementMentorship.value,
        diversity: diversity.value,
        fname: firstName.value,
        lname: lastName.value,
        bootcamp: bootcamp.value,
        city: city.value,
        state: state.value,
        company_id: companyId.value 
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(newInfoObj)
    }

    fetch('http://localhost:3000/ratings', configObj)
    .then(resToJson)
    .then(response => {
        addReviewToDom(response.data)
    })
}

function addReviewToDom(r){
    // debugger
    const infoSubmitted = `
        <div id="review-${r.id}>
            Interview Process: <span class="interviewProcess">${r.attributes.process}</span><br/>
            Company Lifestyle: <span class="companyLifestyle">${r.attributes.lifestyle}</span><br/>
            Mentorship: <span class="mentorship">${r.attributes.mentorship}</span><br/>
            Diversity: <span class="diversity">${r.attributes.diversity}</span><br/>
            Compensation: $<spanclass="compensation">${r.attributes.compensation}</spanclass=><br/>
            -<span class="firstName">${r.attributes.fname}</span> <span class="lastName">${r.attributes.lname}</span> <span class="bootcamp">(${r.attributes.bootcamp})</span><br/>
            from: <span class="city">${r.attributes.city}</span>, <span class="state">${r.attributes.state}</span><br/>
            <button class="delete" data-id="${r.id}">delete</button>
            <button class="update" data-id="${r.id}">update</button>
            <br/>
        </div>`
    enterArea.innerHTML = infoSubmitted 
    document.getElementsByClassName("delete").addEventListener('click', deleteReview())
    document.getElementsByClassName("update").addEventListener('click', updateReview(e))
}

// function fetchAllReviews(){
//     fetch('http://localhost:3000/ratings')
//     .then(resToJson)
//     .then(response => {
//         addReviewsToDom(response.data)
//     })
// }

// function addReviewsToDom(response){
//     // debugger
//     enterArea.innerHTML = " "
//     response.forEach( review => {
//         enterArea.innerHTML += 
//         `<div id="review-${review.id}">
//             <li>
//             Interview Process: ${review.attributes.process}<br/>
//             Company Lifestyle: ${review.attributes.lifestyle}<br/>
//             Mentorship: ${review.attributes.mentorship}<br/>
//             Diversity: ${review.attributes.diversity}<br/>
//                 <div id="review-identity"><br/>
//                 -${review.attributes.first_name} ${review.attributes.last_name} (${review.attributes.bootcamp})<br/>
//                 from: ${review.attributes.city}, ${review.attributes.state}
//                 </div>
//             </li>
//         </div><br/><br/>
//         `})
// }

function deleteReview(e){
    debugger
    let configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        }
    }

    fetch(`http://localhost:3000/ratings/${e.dataset.id}`, configObj)
    .then(resToJson)
    .then(json => {
        alert(json.message)
    })
    .then(fetchCompanies)   
}

function fetchIndivComp(e){
    // debugger
    fetch(`http://localhost:3000/companies/${e.target.value}`)
    .then(resToJson)
    .then(addIndivToDom)
}

function addIndivToDom(r){
    // debugger
    const indivInfo = `
    <div class="indivCompInfo" id="${r.data.id}">
       <h3>${r.data.attributes.name} </h3>
            <strong>Mission Statement:</strong> ${r.data.attributes.mission_statement}<br/>
            <strong>HQ: ${r.data.attributes.hq_city}, ${r.data.attributes.hq_state}</strong><br/><br/>
            <button class="companyApply" data-id="${r.data.attributes.website}">Apply Here</button>
            <button class="companyTwitter" data-id="${r.data.attributes.twitter}">Twitter</button><br/>
            <button class="review-comp" data-id="${r.data.id}">Write a Review</button><br/><br/>
    </div>
    `
    const infoSpace = document.getElementById("indivInfoSpace")
    infoSpace.innerHTML = " "
    infoSpace.innerHTML = indivInfo
}



/////////////////////////////////////WIP//////////////////////////////////////

function updateReview(r){
    console.log("update")
    // debugger
    let review = document.querySelector(`#review-${r.target.dataset.id}`)
    let interviewProcess = review.querySelector('.interviewProcess').innerText
    let companyLifestyle = review.querySelector('.companyLifestyle').innerText
    let compensation = review.querySelector('.compensation').innerText
    let mentorship = review.querySelector('.mentorship').innerText
    let diversity = review.querySelector('.diversity').innerText
    let firstName = review.querySelector('.firstName').innerText
    let lastName = review.querySelector('.lastName').innerText
    let bootcamp = review.querySelector('.bootcamp').innerText
    let city = review.querySelector('.city').innerText
    let state = review.querySelector('.state').innerText

    let updateForm = `
        First Name: <input type="text" name="firstName" value="${firstName}" id="firstName-update-${r.target.dataset.id}">
        Last Name: <input type="text" name="last_name" value="${lastName}" id="lastName-update-${r.target.dataset.id}">
        City: <input type="text" name="city" value="${city}" id="city-update-${r.target.dataset.id}">
        State: <input type="text" name="state" value="${state}" id="state-update-${r.target.dataset.id}">
        Bootcamp: <select name="bootcamp" value="${bootcamp}" id="bootcamp-update-${r.target.dataset.id}" form="company-review">
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
        </select>
        Interview Process <select name="interviewProcess" value="${interviewProcess}" id="interviewProcess-update-${r.target.dataset.id}" form="company-review">
            <option value=" "> </option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="extensive">extensive</option>
        </select>
        Company Lifestyle: <select name="companyLifestyle" value="${companyLifestyle}" id="companyLifestyle-update-${r.target.dataset.id}" form="signUpForm">
            <option value=" "> </option>
            <option value="innovative">innovative</option>
            <option value="challenging">challenging</option>
            <option value="progressive">progressive</option>
            <option value="micromanaged">micromanaged</option>
            <option value="flexible">flexible</option>
            <option value="problematic">problematic</option>
        </select>
        Compensation (this information is for research purposes): <input type="number" min="50000.00" step="5.00" name="compensation" value="${compensation}" id="compensation-update-${r.target.dataset.id}">
        Mentorship:<select name="mentorship" value="${mentorship}" id="mentorship-update-${r.target.dataset.id}" form="signUpForm">
            <option value=" "> </option>
            <option value="yes">yes</option>
            <option value="no">no</option>
        </select>
        Diversity: <select name="diversity" value="${diversity}" id="diversity-update-${r.target.dataset.id}" form="signUpForm">
        <option value=" "> </option>
        <option value="yes">yes</option>
        <option value="no">no</option>
        </select>
    `
    let formDiv = document.createElement('div')
    formDiv.id = `update-form-${r.target.dataset.id}`
    formDiv.innerHTML = updateForm
    review.append(formDiv)
}

function submitUpdate(revId){
    // debugger
    const interviewProcess = document.getElementById(`interviewProcess-update-${revId}`)
    const companyLifestyle = document.getElementById(`companyLifestyle-update-${revId}`)
    const compensation = document.getElementById(`compensation-update-${revId}`)
    const managementMentorship = document.getElementById(`mentorship-update-${revId}`)
    const diversity = document.getElementById(`diversity-update-${revId}`) 
    const firstName = document.getElementById(`firstName-update-${revId}`)
    const lastName = document.getElementById(`lastName-update-${revId}`)
    const bootcamp = document.getElementById(`bootcamp-update-${revId}`)
    const city = document.getElementById(`city-update-${revId}`)
    const state = document.getElementById(`state-update-${revId}`)

    let newInfoObj = {
        process: interviewProcess.value,
        lifestyle: companyLifestyle.value,
        compensation: compensation.value,
        mentorship: mentorship.value,
        diversity: diversity.value,
        first_name: firstName.value,
        last_name: lastName.value,
        bootcamp: bootcamp.value,
        city: city.value,
        state: state.value,
    }

    let configObj = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(newInfoObj)
    }

    fetch(`http://localhost:3000/ratings/${revId}`, configObj)
    .then(resToJson)
    .then(response => updateReviewOnDom(response.data))

    let form = document.getElementById(`update-form-${revId}`)
    form.remove()
}

function updateReviewOnDom(res){
    // debugger
    let updateInfo = document.querySelector(`#review-${res.id}`)
    updateInfo.querySelector('.interviewProcess').innerText = res.attributes.process
    updateInfo.querySelector('.companyLifestyle').innerText
    updateInfo.querySelector('.compensation').innerText
    updateInfo.querySelector('.mentorship').innerText
    updateInfo.querySelector('.diversity').innerText
    updateInfo.querySelector('.firstName').innerText
    updateInfo.querySelector('.lastName').innerText
    updateInfo.querySelector('.bootcamp').innerText
    updateInfo.querySelector('.city').innerText
    updateInfo.querySelector('.state').innerText
}