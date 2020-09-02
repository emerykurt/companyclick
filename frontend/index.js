const ratings = new RatingsAdapter
const companies = new CompaniesAdapter
document.getElementById("companyIndivId").addEventListener('change', companies.fetchIndivComp)
document.getElementById('all-companiesReviews').addEventListener('click', ratings.fetchAllReviews)
document.getElementById("mainPg").addEventListener('click', main)




document.addEventListener('DOMContentLoaded', (init)) 
function init(){ 
    debugger
    companies.fetchTopCompanies()    
} 

function main (){
    document.getElementById("enter-area").innerHTML = " "
    document.getElementById("companyIndivId").value = "0"
    document.getElementById("indivInfoSpace").innerHTML = " "
    document.getElementById("main").style.display = "block"
}




