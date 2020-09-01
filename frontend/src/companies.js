class Companies{
    constructor(id, name, hq_city, hq_state, mission_statement, website, twitter){
        this.name = name
        this.hq_city = hq_city
        this.hq_state = hq_state
        this.mission_statement = mission_statement
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
        
        // Companies.all.push(this)
    }

    static handleCompanyClickEvent = (e) => {
        // debugger
        if (e.target.className === "companyApply"){
            let comp = new Companies
            let apply = Companies.comp
            comp.applyToComp(apply) 
        } else if(e.target.className === "companyTwitter"){
            let comp = new Companies
            let twitter = Companies.comp
            comp.twitterLink(twitter)
        } else if (e.target.className === "review-comp"){
            let comp = new Companies
            let review = Companies.comp
            comp.renderReviewForm(review)
        } else if (e.target.id === "sign-up-submit"){
            let comp = new Companies
            let results = Companies.comp
            comp.submitResults(results)
        } else if (e.target.id === "compToggle"){
            let comp = new Companies
            let results = Companies.comp
            comp.toggleMoreInfo(e)
        }
    }

    attachTopToDom = (e) => {
        this.topCompArea = document.getElementById("topCompaniesList")
        this.topCompArea.innerHTML += 
        `<em id="company-${e.id}">${e.name} - ${e.hq_city}, ${e.hq_state}</em><br/>`
    }
    
    addIndivComp = (e) => {
        // debugger
        this.indivCompSpace = document.getElementById("indivInfoSpace")
        this.indivCompSpace.append(Companies.indivRender(e))   
    }

    static indivRender = (e) => {
        // debugger
        this.comp = e.attributes
        this.indivCompSpace = document.getElementById("indivInfoSpace")
        this.indivCompSpace.innerHTML =
        `<h3>${this.comp.name} </h3>
        <strong>Mission Statement:</strong> ${this.comp.mission_statement}<br/>
        <strong>HQ: ${this.comp.hq_city}, ${this.comp.hq_state}</strong><br/><br/>
        <button class="companyApply" data-id="${this.comp.website}">Apply Here</button>
        <button class="companyTwitter" data-id="${this.comp.twitter}">Twitter</button><br/>
        <button class="review-comp" data-id="${this.comp.id}">Write a Review</button><br/><br/>`

        let com = " "
        return  com
    } //"it's running twice: undefined showing in browser"

    addCompsToDom = (e) => {
        // debugger
        this.enterArea.innerHTML = " "
        e.forEach( company => {
        this.enterArea.innerHTML += 
        `<li class="company" data-id="${company.id}">
            ${company.attributes.name} - ${company.attributes.hq_city}, ${company.attributes.hq_state}
            <label for="more-info" id="moreInfoText-${company.id}" class="moreInfoText" data-id="${company.id}">more...</label>
            <input type="checkbox" id="compToggle" class="moreInfo" data-id="${company.id}"><br/>
                <div id="element-${company.id}" style="display:none">
                    Mission Statement: ${company.attributes.mission_statement}<br/>
                    <button class="companyApply" data-id="${company.attributes.website}">Apply Here</button>
                    <button class="companyTwitter" data-id="${company.attributes.twitter}">Twitter</button><br/><br/>
                </div>
            <button class="review-comp" data-id="${company.id}">Write a Review</button><br/><br/>
        </li>`
    })
    // this.toggle = document.querySelector("#compToggle")
    // this.toggle.addEventListener('click', this.toggleMoreInfo)
    }

    toggleMoreInfo = (e) => {
        // debugger
        let click = e.target
        let id = e.target.dataset.id
        if (click.checked === true){
            // debugger
            const moreInfoArea = document.getElementById(`element-${id}`)
            moreInfoArea.style.display = 'block'
            const moreInfoLabel = document.getElementById(`moreInfoText-${id}`)
            moreInfoLabel.innerHTML = "...less"
        }
        else if (click.checked === false){
            // debugger
            const moreInfoArea = document.getElementById(`element-${id}`)
            moreInfoArea.style.display = 'none'
            const moreInfoLabel = document.getElementById(`moreInfoText-${id}`)
            moreInfoLabel.innerHTML = "more..."
        }
    }//WIP

    applyToComp = (e) => {
        debugger
        window.open(e.website, "_blank");
    }

    twitterLink = (e) => {
        window.open(e.twitter, "_blank");
    }

    renderReviewForm = (e) => {
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
        <input type="submit" value="Submit Review" id="review-submit">
        </form>
        <div class="infoSubmit" id:"review-results"></div>` 
        this.enterArea.innerHTML = reviewForm
        document.getElementById("companyId").selectedIndex = e.id
        this.toggleInter = document.getElementById("interviewCheckBox")
        this.toggleInter.addEventListener('click', this.toggleInterview)
        this.submit = document.getElementById("review-submit")
        this.submit.addEventListener('click', this.ratingsAdapter.postResults)
    }

    toggleInterview = (e) => {
        // debugger
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
        }else if (e.target.checked === false){
            const interviewExtenArea = document.getElementById("interviewExt")
            interviewExtenArea.innerHTML = " " 
        }
        this.hired = document.getElementById("hiredCheckBox")
        this.hired.addEventListener('click', this.toggleHired)
    }

    toggleHired = (e) => {
        // debugger
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
            const hiredExtenArea = document.getElementById("hiredExt")
            hiredExtenArea.innerHTML = " "
        }
    }
}