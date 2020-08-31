class Companies{
    constructor(id, name, hq_city, hq_state, mission_statement, website, twitter){
        this.name = name
        this.hq_city = hq_city
        this.hq_state = hq_state
        this.mission_statement = mission_statement
        this.website = website
        this.twitter = twitter
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `item-${this.id}`
        this.itemList = document.getElementById('item-list')
        this.enterArea = document.getElementById("enter-area")
        this.enterArea.addEventListener('click', this.handleCompanyClickEvent)

        this.topCompArea = document.getElementById("topCompaniesList")
        
        
        
        // Companies.all.push(this)
    }


    attachTopToDom = (e) => {
        this.topCompArea.innerHTML += 
        `<li id="company-${e.id}">${e.name} - ${e.hq_city}, ${e.hq_state}</li>`
    }

    handleCompanyClickEvent = (e) => {
        debugger
        if (e.target.className === "moreInfo"){
            toggleMoreInfo(e.target) 
        } else if(e.target.className === "companyApply"){
            applyLink(e.target) 
        } else if(e.target.className === "companyTwitter"){
            twitterLink(e.target)
        } else if (e.target === companiesList){
            fetchCompanies()
        }
    }

    toggleMoreInfo = (e) => {
        
    }
}