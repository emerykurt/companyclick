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

        this.element = document.createElement('div')
        this.element.id = `review-${this.id}`
        this.enterBody = document.getElementById("enter-area")
        this.enterBody.addEventListener('click', Ratings.handleReviewClicks)
        

        // this.allReviewsBtn = document.getElementById('all-companiesReviews');
        // this.allreviewsBtn = document.getElementById('all-companies-reviews');

        Ratings.all.push(this)
    }

    static handleReviewClicks = (e) => {
        debugger
        if (e.target.className === "update"){
            let review = Ratings.findbyId(id)
            review.updateReview(e) 
        } else if (e.target.className === "save"){
            // debugger
            let revId = e.target.dataset.id
            e.target.className = "update"
            e.target.innerText = "update"
            submitUpdate(revId)
        } else if (e.target.id === "hiredCheckBox"){
            toggleHired(e.target)
        } else if (e.target.id === "interviewCheckBox"){
            toggleInterview(e.target)
        } else if(e.target.className === "delete"){
            deleteReview(e.target.dataset)
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

    updateReview = (e) => {
        debugger
        this.review = document.querySelector(`#review-${e.id}`)
        this.interviewProcess = review.querySelector('.interviewProcess').innerText
        this.companyLifestyle = review.querySelector('.companyLifestyle').innerText
        this.compensation = review.querySelector('.compensation').innerText
        this.mentorship = review.querySelector('.mentorship').innerText
        this.diversity = review.querySelector('.diversity').innerText
        this.firstName = review.querySelector('.firstName').innerText
        this.lastName = review.querySelector('.lastName').innerText
        this.bootcamp = review.querySelector('.bootcamp').innerText
        this.city = review.querySelector('.city').innerText
        this.state = review.querySelector('.state').innerText

        this.updateForm = `
            First Name: <input type="text" name="firstName" value="${firstName}" id="firstName-update-${e.id}">
            Last Name: <input type="text" name="last_name" value="${lastName}" id="lastName-update-${e.id}">
            City: <input type="text" name="city" value="${city}" id="city-update-${e.id}">
            State: <input type="text" name="state" value="${state}" id="state-update-${e.id}">
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
            </select>
            Interview Process <select name="interviewProcess" value="${interviewProcess}" id="interviewProcess-update-${e.id}" form="company-review">
                <option value=" "> </option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="extensive">extensive</option>
            </select>
            Company Lifestyle: <select name="companyLifestyle" value="${companyLifestyle}" id="companyLifestyle-update-${e.id}" form="signUpForm">
                <option value=" "> </option>
                <option value="innovative">innovative</option>
                <option value="challenging">challenging</option>
                <option value="progressive">progressive</option>
                <option value="micromanaged">micromanaged</option>
                <option value="flexible">flexible</option>
                <option value="problematic">problematic</option>
            </select>
            Compensation (this information is for research purposes): <input type="number" min="50000.00" step="5.00" name="compensation" value="${compensation}" id="compensation-update-${e.id}">
            Mentorship:<select name="mentorship" value="${mentorship}" id="mentorship-update-${e.id}" form="signUpForm">
                <option value=" "> </option>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
            Diversity: <select name="diversity" value="${diversity}" id="diversity-update-${e.id}" form="signUpForm">
            <option value=" "> </option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select>
        `
        this.formDiv = document.createElement('div')
        this.formDiv.id = `update-form-${e.id}`
        this.formDiv.innerHTML = this.updateForm
        review.append(formDiv)
    }
}