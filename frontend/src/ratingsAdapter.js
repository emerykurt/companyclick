class RatingsAdapter{

    constructor(){
        this.baseurl = "http://localhost:3000/ratings"
        this.enterArea = document.getElementById("enter-area")
    }

    fetchAllReviews = () => {
        this.enterArea.innerHTML = " "
        fetch("http://localhost:3000/ratings")
        .then(res => res.json())
        .then(json => {
            json.data.forEach ((e) => {
                let rating = new Ratings(e.attributes)
                rating.attachToDom()
            })  
        })
    }

    postResults = (e) => {
        e.preventDefault()
        const interviewProcess = document.getElementById("interviewProcess")
        const companyLifestyle = document.getElementById("companyLifestyle")
        const compensation = document.getElementById("compensation")
        const managementMentorship = document.getElementById("managementMentorship")
        const diversity = document.getElementById("diversity") 
        const firstName = document.getElementById("firstName")
        const lastName = document.getElementById("lastName")
        const bootcamp = document.getElementById("bootcamp")
        const city = document.getElementById("city")
        const state = document.getElementById("state")
        const companyId = document.getElementById("companyId")

        let newInfoObj = {
            process: interviewProcess.value,
            lifestyle: companyLifestyle.value,
            compensation: compensation.value,
            mentorship: managementMentorship.value,
            diversity: diversity.value,
            fname: firstName.value,
            lname: lastName.value,
            bootcamp: bootcamp.value,
            city: city.value,
            state: state.value,
            company_id: companyId.value 
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(newInfoObj)
        }

        fetch('http://localhost:3000/ratings', configObj)
        .then(res => res.json().then(json =>{
            let rating = new Ratings(json.data)
            rating.addReviewToDom(json.data)
        }))
        return
    }

    sendPatchRequest(e){
        e.preventDefault()
        let process = e.currentTarget.parentElement.children[10].value
        let lifestyle = e.currentTarget.parentElement.children[12].value
        let compensation = e.currentTarget.parentElement.children[14].value
        let mentorship = e.currentTarget.parentElement.children[16].value
        let diversity = e.currentTarget.parentElement.children[18].value
        let fname = e.currentTarget.parentElement.children[0].value
        let lname = e.currentTarget.parentElement.children[2].value
        let bootcamp = e.currentTarget.parentElement.children[8].value
        let city = e.currentTarget.parentElement.children[4].value
        let state = e.currentTarget.parentElement.children[6].value

        let newInfoObj = {
            process,
            lifestyle,
            compensation,
            mentorship,
            diversity,
            fname,
            lname,
            bootcamp,
            city,
            state
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(newInfoObj)
        }

        fetch("http://localhost:3000/ratings" + `/${e.currentTarget.dataset.id}`, configObj)
        .then(res => res.json()).then(json => {
            let rating = new Ratings(json.data)
            rating.addReviewToDom(json.data)
        })
    }

    deleteReview = (e) => {
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }
    
        fetch(`http://localhost:3000/ratings/${e.id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        .then(main()) 
    }
}