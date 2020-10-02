class CompaniesAdapter{

    constructor(){
        this.baseurl = "http://localhost:3000/companies"
    }

    fetchTopCompanies(){
        fetch(this.baseurl + `/top_companies`)
        .then(res => res.json())
        .then(json => {
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
            let company = new Companies(json.data.attributes)
            company.addIndivComp(json.data.attributes)
        })
    }   
}