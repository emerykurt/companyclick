class Companies{
    constructor(id, name, hq_city, hq_state, mission_statement, website, twitter){
        this.name = name
        this.hq_city = hq_city
        this.hq_state = hq_state
        this.mission = mission_statement
        this.website = website
        this.twitter = twitter
        this.id = id

        this.companiesAdapter = new CompaniesAdapter
        this.ratingsAdapter = new RatingsAdapter
        this.element = document.createElement('div')
        this.element.id = `company-${this.id}`
        this.companyList = document.getElementById('company-list')
        this.enterArea = document.getElementById("enter-area")
        this.enterArea.addEventListener('click', Companies.handleCompanyClickEvent)
        this.main = document.getElementById("main")
        this.main.addEventListener('click', Companies.handleCompanyClickEvent)     
    }

    attachTopToDom = (e) => {
        this.topCompArea = document.getElementById("topCompaniesList")
        this.topCompArea.innerHTML += 
        `<em id="company-${e.id}">${e.name} - ${e.hq_city}, ${e.hq_state}</em><br/>`
    }
    
    addIndivComp = (e) => {
        // debugger
        this.indivCompSpace = document.getElementById("indivInfoSpace")
        this.indivCompSpace.append(this.indivRender(e))   
    }

    indivRender = (e) => {
        this.indivCompSpace = document.getElementById("indivInfoSpace")
        this.indivCompSpace.innerHTML =
        `<br/><br/><h3 style="color:rgb(36, 35, 35)">${name} </h3>
        <strong style="color:rgb(36, 35, 35)">Mission Statement:</strong> ${e.mission_statement}<br/>
        <strong style="color:rgb(36, 35, 35)">HQ: ${e.hq_city}, ${e.hq_state}</strong><br/><br/>
        <button id="compApply" class="button" data-id="${e.website}">Apply Here</button>
        <button id="compTwitter" class="button" data-id="${e.twitter}">Twitter</button><br/>
        <button id="review-comp" class="button" data-id="${e.id}">Write a Review</button><br/><br/>`

        let comp = new Companies
        document.getElementById("review-comp").addEventListener('click', comp.renderReviewForm)
        document.getElementById("compApply").addEventListener('click', comp.applyToComp)
        document.getElementById("compTwitter").addEventListener('click', comp.twitterLink)
        let com = " "
        return  com
    } 

    applyToComp = (e) => {
        window.open(e.target.dataset.id, "_blank");
    }

    twitterLink = (e) => {
        window.open(e.target.dataset.id, "_blank");
    }

    renderReviewForm = (e) => {
        debugger
        this.main.style.display = "none"
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
        <input type="submit" value="Submit Review" id="review-submit">
        </form>
        <div class="infoSubmit" id:"review-results"></div>` 
        this.enterArea.innerHTML = reviewForm
        document.getElementById("companyId").selectedIndex = e.target.dataset.id
        document.getElementById("interviewCheckBox").addEventListener('click', this.toggleInterview)
        document.getElementById("review-submit").addEventListener('click', this.ratingsAdapter.postResults)
    }

    toggleInterview = (e) => {
        if (e.target.checked === true) {
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
        document.getElementById("hiredCheckBox").addEventListener('click', this.toggleHired)
        }else if (e.target.checked === false){
            const interviewExtenArea = document.getElementById("interviewExt")
            interviewExtenArea.innerHTML = " " 
        }
    }

    toggleHired = (e) => {
        if (e.target.checked === true){
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
        } else if (e.target.checked === false){
            document.getElementById("hiredExt").innerHTML = " "
        }
    }
}