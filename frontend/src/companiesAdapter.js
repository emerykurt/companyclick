class CompaniesAdapter{

    constructor(){
        this.baseurl = "http://localhost:3000/companies"
    }

    fetchTopCompanies(){
        fetch(this.baseurl + `/top_companies`)
        .then(res => res.json())
        .then(json => {
            // debugger
            json.data.forEach((e) =>{
                let company = new Companies(e.attributes)
                company.attachTopToDom(e.attributes)
            })
        })
    }

    fetchIndivComp = (e) => {
        // debugger
        fetch(this.baseurl + `/${e.target.value}`)
        .then(res => res.json())
        .then( json => {
            let company = new Companies(json.data)
            company.addIndivComp(json.data)
        })
    }

    fetchCompanies = () => {
        fetch(this.baseurl)
        .then(res => res.json())
        .then(json => {
            // debugger
            let companies = new Companies(json.data)
            companies.addCompToDom(json.data)
        })
    }

    
}