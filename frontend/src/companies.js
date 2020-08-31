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
        this.element = document.createElement('div')
        this.element.id = `company-${this.id}`
        this.companyList = document.getElementById('company-list')
        this.enterArea = document.getElementById("enter-area")
        this.enterArea.addEventListener('click', Companies.handleCompanyClickEvent)
         
        
        
        
        
        // Companies.all.push(this)
    }

    static handleCompanyClickEvent = (e) => {
        // debugger
        if (e.target.className === "moreInfo"){
            let comp = new Companies
            let apply = Companies.comp
            comp.toggleMoreInfo(e.target) 
        } else if(e.target.className === "companyApply"){
            let comp = new Companies
            let apply = Companies.comp
            comp.applyToComp(apply) 
        } else if(e.target.className === "companyTwitter"){
            let comp = new Companies
            let twitter = Companies.comp
            comp.twitterLink(twitter)
        } else if (e.target.className === "review-comp"){
            debugger
            let comp = new Companies
            let review = Companies.comp
            comp.renderReviewForm(review)
        } else if (e.target.id === "sign-up-submit"){
            let comp = new Companies
            let results = Companies.comp
            comp.submitResults(results)
        }
        // } else if (e.target === companiesList){
        //     // fetchCompanies()
        // }
    }

    attachTopToDom = (e) => {
        this.topCompArea = document.getElementById("topCompaniesList")
        this.topCompArea.innerHTML += 
        `<li id="company-${e.id}">${e.name} - ${e.hq_city}, ${e.hq_state}</li>`
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
        return;
    } //"it's running twice: undefined showing in browser"

    addCompToDom = (e) => {
        debugger
    }

    renderReviewForm = (e) => {
        debugger
    }

    applyToComp = (e) => {
        debugger
    }

    twitterLink = (e) => {
        debugger
    }

    submitResults = (e) => {
        debugger
    }
}