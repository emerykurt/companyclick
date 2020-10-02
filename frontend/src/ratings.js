class Ratings{

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
        this.main = document.getElementById("main")
        this.main.addEventListener('click', Ratings.handleReviewClicks)
    }

    static findById = (e) => {
            fetch(`http://localhost:3000/ratings/${e.target.dataset.id}`)
            .then(res => res.json().then(json =>{
                let rating = new Ratings(json.data)
                rating.updateReview(json.data)
            }))
    }

    static findId = (e) => {
        fetch(`http://localhost:3000/ratings/${e.target.dataset.id}`)
        .then(res => res.json().then(json =>{
            let rating = new RatingsAdapter(json.data)
            rating.deleteReview(json.data)
        }))
    }
    
    attachToDom(){
        this.main.style.display = "none"
        this.enterArea.append(this.partialReviewRender())
        document.getElementById("compDiversity").addEventListener('click', this.diversityFilter)
        document.getElementById("compMentorship").addEventListener('click', this.diversityFilter)
        document.getElementById("compMentorship").addEventListener('click', this.mentorshipFilter)
        // document.getElementById("compDiversity").addEventListener('click', this.mentorshipFilter)
        document.getElementById("companyIndivId").addEventListener('change', this.companyFilter)
    }

    companyFilter = (e) => {
        // debugger
        let compId = document.getElementById("companyIndivId")
        if (compId.value == 0){
            document.getElementById(`review-${this.id}`).style.display = "block"
        }else if (this.company_id == compId.value){
            document.getElementById(`review-${this.id}`).style.display = "block"
        } else {
            document.getElementById(`review-${this.id}`).style.display = "none"
        }

    }

    mentorshipFilter = (e) => {
        let review = document.getElementById(`review-list-${this.id}`)
        let mentorship = document.getElementById(`mentorship-${this.id}`)
        if (e.target.checked === true){
            if (mentorship.innerHTML === "no") {
                review.style.display = "none"
            } 
        } else {
            review.style.display = "block"
        }
    }

    diversityFilter = (e) => {
        // debugger
        let review = document.getElementById(`review-list-${this.id}`)
        let diversity = document.getElementById(`diversity-${this.id}`)
        if (e.target.checked === true){
            if (diversity.innerHTML === "no") {
                review.style.display = "none"
            } 
        } else {
            review.style.display = "block"
        }
    }

    partialReviewRender(){
        this.element.innerHTML = 
           `<div id="review-list-${this.id}">
           _____________________________________________________<br/><br/>
            Interview Process: ${this.process}<br/>
            Company Lifestyle: ${this.lifestyle}<br/>
            Mentorship:<div id="mentorship-${this.id}">${this.mentorship}</div><br/>
            Diversity:<div id="diversity-${this.id}">${this.diversity}</div><br/>
                <div id="review-identity"><br/>
                -${this.fname} ${this.lname} (${this.bootcamp})<br/>
                from: ${this.city}, ${this.state}
                </div><br/><br/>
            </div>`
            return this.element
    }

    addReviewToDom = (e) => {
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
                <button id="delete" class="delete" data-id="${e.id}">delete</button>
                <button id="update" class="update" data-id="${e.id}">update</button>
                <br/>
            </div>`
        this.enterArea.innerHTML = infoSubmitted 
        document.getElementById("delete").addEventListener('click', Ratings.findId)
        document.getElementById("update").addEventListener('click', Ratings.findById)
    }

    updateReview = (e) => {
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
}