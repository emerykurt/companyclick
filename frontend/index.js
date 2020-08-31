const ratings = new RatingsAdapter
const companies = new CompaniesAdapter
const allCompaniesBtn = document.getElementById('all-companiesList');
const allcompaniesBtn = document.getElementById('all-companies-list');
allCompaniesBtn.addEventListener('click', companies.fetchCompanies)
allcompaniesBtn.addEventListener('click', companies.fetchCompanies)
this.indivSelector = document.getElementById("companyIndivId")
this.indivSelector.addEventListener('change', companies.fetchIndivComp)
const allReviewsBtn = document.getElementById('all-companiesReviews');
const allreviewsBtn = document.getElementById('all-companies-reviews');

document.addEventListener('DOMContentLoaded', (init)) 
function init(){ 
    // debugger
    companies.fetchTopCompanies()
    
} 




