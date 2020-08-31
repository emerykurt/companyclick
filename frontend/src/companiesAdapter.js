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
        .then(resToJson)
        .then(addIndivToDom)
    }

    
}