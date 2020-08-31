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
        this.testArea = document.getElementById('"test-area"')

        // this.allReviewsBtn = document.getElementById('all-companiesReviews');
        // this.allreviewsBtn = document.getElementById('all-companies-reviews');

        Ratings.all.push(this)
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

    addEventListeners(){
        document.addEventListener('click', this.handleReviewClicks)
    }


    handleReviewClicks = (e) => {
        debugger
        if (e.target.className === "review-comp"){
            writeReview(e.target)
        } else if (e.target.id === "sign-up-submit"){
            submitResults(e)
        } else if(e.target.className === "delete"){
            deleteReview(e.target)
        } else if(e.target.className === "update"){
            // debugger
            e.target.className = "save"
            e.target.innerText = "save"
            updateReview(e) 
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
        }
    }
}