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
        this.enterArea.addEventListener('click', this.handleCompanyClickEvent)
        this.indivSelector = document.getElementById("companyIndivId")
        this.indivSelector.addEventListener('change', companiesAdapter.fetchIndivComp)
        
        
        
        
        // Companies.all.push(this)
    }


    attachTopToDom = (e) => {
        this.topCompArea = document.getElementById("topCompaniesList")
        this.topCompArea.innerHTML += 
        `<li id="company-${e.id}">${e.name} - ${e.hq_city}, ${e.hq_state}</li>`
    }

    handleCompanyClickEvent = (e) => {
        // debugger
        if (e.target.className === "moreInfo"){
            toggleMoreInfo(e.target) 
        } else if(e.target.className === "companyApply"){
            applyLink(e.target) 
        } else if(e.target.className === "companyTwitter"){
            twitterLink(e.target)
        } else if (e.target === companiesList){
            // fetchCompanies()
        }
    }
    
    addIndivComp = (e) => {
        // debugger
        this.indivCompSpace = document.getElementById("indivInfoSpace")
        this.indivCompSpace.append(this.indivRender(e))   
    }

    indivRender = (e) => {
        // debugger
        this.comp = e.attributes
        this.indivCompSpace.innerHTML =
        `<h3>${this.comp.name} </h3>
        <strong>Mission Statement:</strong> ${this.comp.mission_statement}<br/>
        <strong>HQ: ${this.comp.hq_city}, ${this.comp.hq_state}</strong><br/><br/>
        <button class="companyApply" data-id="${this.comp.website}">Apply Here</button>
        <button class="companyTwitter" data-id="${this.comp.twitter}">Twitter</button><br/>
        <button class="review-comp" data-id="${this.comp.id}">Write a Review</button><br/><br/>`
        return console.log("don't go again")
    } //"undefined showing in browser"
}