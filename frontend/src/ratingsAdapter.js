class RatingsAdapter{

    constructor(){
        this.baseurl = "http://localhost:3000/ratings"
    }

    fetchAllReviews(){
        fetch(this.baseurl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((e) =>{
                let rating = new Ratings(e.attributes)
            })
        })
    }
    sendPatchRequest(e){
        const process = document.getElementById(`interviewProcess-update-${e}`)
        const lifestyle = document.getElementById(`companyLifestyle-update-${e}`)
        const compensation = document.getElementById(`compensation-update-${e}`)
        const mentorship = document.getElementById(`mentorship-update-${e}`)
        const diversity = document.getElementById(`diversity-update-${e}`) 
        const fname = document.getElementById(`firstName-update-${e}`)
        const lname = document.getElementById(`lastName-update-${e}`)
        const bootcamp = document.getElementById(`bootcamp-update-${e}`)
        const city = document.getElementById(`city-update-${e}`)
        const state = document.getElementById(`state-update-${e}`)

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

        fetch(this.baseUrl + `/${e}`, configObj)
        .then(res => res.json())
        .then(response => {
            let form = Ratings.all.find((r) => r.id === response.data.attributes.id)
            form.updateReviewOnDom(response.data.attributes)
        })

        let form = document.getElementById(`update-form-${e}`)
        form.remove
    }

    fetchIndivComp(e){
        // debugger
        fetch(`http://localhost:3000/companies/${e.id}`)
        .then(res => res.json())
        .then(addIndivToDom())
    }
}