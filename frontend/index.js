const ratings = new RatingsAdapter
const companies = new CompaniesAdapter
const allCompaniesBtn = document.getElementById('all-companiesList')
const allcompaniesBtn = document.getElementById('all-companies-list')
const indivSelector = document.getElementById("companyIndivId")
indivSelector.addEventListener('change', companies.fetchIndivComp)
const allReviewsBtn = document.getElementById('all-companiesReviews')
const allreviewsBtn = document.getElementById('all-companies-reviews')
allreviewsBtn.addEventListener('click', ratings.fetchAllReviews)
allReviewsBtn.addEventListener('click', ratings.fetchAllReviews)


document.addEventListener('DOMContentLoaded', (init)) 
function init(){ 
    // debugger
    companies.fetchTopCompanies()
    
} 

restart = () => {
    window.location.href="file:///Users/emerylumsden/Development/companyclick/frontend/index.html"
}




