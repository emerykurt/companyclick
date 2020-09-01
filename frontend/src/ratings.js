class Ratings{

    static all = []

    constructor({id, process, lifestyle, compensation, mentorship, diversity, fname, lname, bootcamp, city, state, company_id}){
        this.process = process
        this.lifestyle = lifestyle
        this.compensation = compensation
        this.mentorship = mentorship
        this.diversity = diversity
        this.fname = fname
        this.lname = lname
        this.bootcamp = bootcamp
        this.city = city
        this.state = state
        this.company_id = company_id
        this.id = id

        this.ratingsAdapter = new RatingsAdapter
        this.element = document.createElement('div')
        this.element.id = `review-${this.id}`
        this.enterArea = document.getElementById("enter-area")
        this.enterArea.addEventListener('click', Ratings.handleReviewClicks)
        

        // this.allReviewsBtn = document.getElementById('all-companiesReviews');
        // this.allreviewsBtn = document.getElementById('all-companies-reviews');

        Ratings.all.push(this)
    }

    static findById = (e) => {
            // debugger
            fetch(`http://localhost:3000/ratings/${e}`)
            .then(res => res.json().then(json =>{
                let rating = new Ratings(json.data)
                rating.updateReview(json.data)
            }))
    }

    static findId = (e) => {
        // debugger
        fetch(`http://localhost:3000/ratings/${e}`)
        .then(res => res.json().then(json =>{
            let rating = new RatingsAdapter(json.data)
            rating.deleteReview(json.data)
        }))
    }


    static handleReviewClicks = (e) => {
        // debugger
        if (e.target.className === "update"){
            let id = e.path[0].dataset.id
            Ratings.findById(id)
        } else if (e.target.id === "hiredCheckBox"){
            toggleHired(e.target)
        } else if (e.target.id === "interviewCheckBox"){
            toggleInterview(e.target)
        } else if(e.target.className === "delete"){
            let id = e.path[0].dataset.id
            Ratings.findId(id)
        }
    }
    
    attachToDom(){
        enterArea.append(this.partialReviewRender())
        this.addEventListener
    }

    partialReviewRender(){
        this.element.innerHTML = 
            `<li>
                Interview Process: ${this.process}<br/>
                Company Lifestyle: ${this.lifestyle}<br/>
                Mentorship: ${this.mentorship}<br/>
                Diversity: ${this.diversity}<br/>
                    <div id="review-identity"><br/>
                    -${this.first_name} ${this.last_name} (${this.bootcamp})<br/>
                    from: ${this.city}, ${this.state}
                    </div>
            </li>`
            return this.element
    }

    addReviewToDom = (e) => {
        // debugger
        const infoSubmitted = `
            <div id="review-${e.id}">
                <h3>${e.attributes.company.data.attributes.name}</h3>
                Interview Process: <span class="interviewProcess">${e.attributes.process}</span><br/>
                Company Lifestyle: <span class="companyLifestyle">${e.attributes.lifestyle}</span><br/>
                Mentorship: <span class="mentorship">${e.attributes.mentorship}</span><br/>
                Diversity: <span class="diversity">${e.attributes.diversity}</span><br/>
                Compensation: $<span class="compensation">${e.attributes.compensation}</span><br/><br/>
                -<span class="firstName">${e.attributes.fname}</span> <span class="lastName">${e.attributes.lname}</span> <span class="bootcamp">(${e.attributes.bootcamp})</span><br/>
                from: <span class="city">${e.attributes.city}</span>, <span class="state">${e.attributes.state}</span><br/><br/>
                <button class="delete" data-id="${e.id}">delete</button>
                <button class="update" data-id="${e.id}">update</button>
                <br/>
            </div>`
        this.enterArea.innerHTML = infoSubmitted 
    }

    updateReview = (e) => {
        // debugger
        this.review = document.querySelector(`#review-${e.id}`)
        let interviewProcess = this.review.querySelector('.interviewProcess').innerText
        let companyLifestyle = this.review.querySelector('.companyLifestyle').innerText
        let compensation = this.review.querySelector('.compensation').innerText
        let mentorship = this.review.querySelector('.mentorship').innerText
        let diversity = this.review.querySelector('.diversity').innerText
        let firstName = this.review.querySelector('.firstName').innerText
        let lastName = this.review.querySelector('.lastName').innerText
        let bootcamp = this.review.querySelector('.bootcamp').innerText
        let city = this.review.querySelector('.city').innerText
        let state = this.review.querySelector('.state').innerText

        this.updateForm = `
            First Name: <input type="text" name="firstName" value="${firstName}" id="firstName-update-${e.id}"><br/>
            Last Name: <input type="text" name="last_name" value="${lastName}" id="lastName-update-${e.id}"><br/>
            City: <input type="text" name="city" value="${city}" id="city-update-${e.id}"><br/>
            State: <input type="text" name="state" value="${state}" id="state-update-${e.id}"><br/>
            Bootcamp: <select name="bootcamp" value="${bootcamp}" id="bootcamp-update-${e.id}" form="company-review">
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
            Interview Process <select name="interviewProcess" value="${interviewProcess}" id="interviewProcess-update-${e.id}" form="company-review">
                <option value=" "> </option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="extensive">extensive</option>
            </select><br/>
            Company Lifestyle: <select name="companyLifestyle" value="${companyLifestyle}" id="companyLifestyle-update-${e.id}" form="signUpForm">
                <option value=" "> </option>
                <option value="innovative">innovative</option>
                <option value="challenging">challenging</option>
                <option value="progressive">progressive</option>
                <option value="micromanaged">micromanaged</option>
                <option value="flexible">flexible</option>
                <option value="problematic">problematic</option>
            </select><br/>
            Compensation (this information is for research purposes): <input type="number" min="50000.00" step="5.00" name="compensation" value="${compensation}" id="compensation-update-${e.id}"><br/>
            Mentorship:<select name="mentorship" value="${mentorship}" id="mentorship-update-${e.id}" form="signUpForm">
                <option value=" "> </option>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select><br/>
            Diversity: <select name="diversity" value="${diversity}" id="diversity-update-${e.id}" form="signUpForm">
            <option value=" "> </option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select>
            <button id="updated-review-submit" class="save" data-id="${e.id}">save</button>
        `
        
        document.getElementsByClassName("update")[0].style.display = "none"
        document.getElementsByClassName("delete")[0].style.display = "none"
        this.formDiv = document.createElement('div')
        this.formDiv.id = `updated-form-${e.id}`
        this.formDiv.innerHTML = this.updateForm
        this.review.append(this.formDiv)
        this.save = document.getElementById("updated-review-submit")
        this.save.addEventListener('click', this.ratingsAdapter.sendPatchRequest)
    }

    addAllReviews = (e) => {
        // debugger
        this.enterArea.innerHTML = " "
        // this.enterArea.innerHTML = `
        //     <strong>Look at individual company reviews:</strong> 
        //     <select name="companyIndivId" id="companyIndivId" form="company-review">
        //         <option class="individualComp" value=" "> </option>
        //         <option class="individualComp" value="1">HubSpot</option>
        //         <option class="individualComp" value="2">DocuSign</option>
        //         <option class="individualComp" value="3">Ultimate Software</option>
        //         <option class="individualComp" value="4">Google</option>
        //         <option class="individualComp" value="5">LinkedIn</option>
        //         <option class="individualComp" value="6">MathWorks</option>
        //         <option class="individualComp" value="7">Nvidia</option>
        //         <option class="individualComp" value="8">Microsoft</option>
        //         <option class="individualComp" value="9">Facebook</option>
        //         <option class="individualComp" value="10">Compass</option>
        //         <option class="individualComp" value="11">Survey Monkey</option>
        //         <option class="individualComp" value="12">Saleforce</option>
        //         <option class="individualComp" value="13">Kronos Incorporated</option>
        //         <option class="individualComp" value="14">VMware</option>
        //         <option class="individualComp" value="15">Adobe</option>
        //         <option class="individualComp" value="16">Appfolio</option>
        //         <option class="individualComp" value="17">SAP</option>
        //         <option class="individualComp" value="18">CDW</option>
        //         <option class="individualComp" value="19">Yardi Systems</option>
        //         <option class="individualComp" value="20">JDA Software (Blue Yonder)</option>
        //         <option class="individualComp" value="21">Nextiva</option>
        //         <option class="individualComp" value="22">Paycom</option>
        //         <option class="individualComp" value="23">Dell</option>
        //         <option class="individualComp" value="24">Slack</option>
        //         <option class="individualComp" value="25">Intuit</option>
        //         <option class="individualComp" value="26">Noon</option>
        //         <option class="individualComp" value="27">UST Global</option>
        //         <option class="individualComp" value="28">Cisco Systems</option>
        //         <option class="individualComp" value="29">Apple</option>
        //         <option class="individualComp" value="30">Epic Systems</option>
        //         <option class="individualComp" value="31">Intel</option>
        //     </select>`
        e.forEach( e => {
        this.enterArea.innerHTML += `
            <div id="review-${e.id}">
                <h3>* ${e.attributes.company.data.attributes.name}</h3>
                <small>Interview Process:</small> <span class="interviewProcess">${e.attributes.process}</span><br/>
                <small>Company Lifestyle:</small> <span class="companyLifestyle">${e.attributes.lifestyle}</span><br/>
                <small>Mentorship:</small> <span class="mentorship">${e.attributes.mentorship}</span><br/>
                <small>Diversity:</small> <span class="diversity">${e.attributes.diversity}</span><br/>
                <small>Compensation: </small>$<span class="compensation">${e.attributes.compensation}</span><br/><br/>
                -<span class="firstName">${e.attributes.fname}</span> <span class="lastName">${e.attributes.lname}</span> <em class="bootcamp">(${e.attributes.bootcamp})</em><br/>
                <span class="city">${e.attributes.city}</span>, <span class="state">${e.attributes.state}</span><br/><br/>
                ___________________________________________________________________
            </div>`
        })
    }
}