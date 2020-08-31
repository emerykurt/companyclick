const resToJson = (res) => res.json()
 



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

deleteReview = (e) => {
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

// function fetchIndivComp(e){
//     // debugger
//     fetch(`http://localhost:3000/companies/${e.target.value}`)
//     .then(resToJson)
//     .then(addIndivToDom)
// }

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