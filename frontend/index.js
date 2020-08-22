let topCompaniesList = document.getElementById("topCompaniesList")
const loginButton = document.getElementById("login-user")
const signUpButton = document.getElementById("signUp-user")
const enterArea = document.querySelector('#enter-area')
const loginSubmitButton = document.getElementById("login-submit")
const signUpSubmitButton = document.getElementById("sign-up-submit")

function enterAreaClick (e){
    switch (e.target.id) {
        case "login-user":
            const loginForm = `<form id="user-login">
            <label for="username">Username:</label>
            <input type="text" name="Username" id="username"><br/>
            <label for="password">Password:</label>
            <input type="text" name="Password" id="password">
            <input type="submit" value="Login" id="login-submit">
            </form>`
            enterArea.innerHTML = loginForm
            const loginSubmitForm = document.getElementById("user-login")
            loginSubmitForm.addEventListener('submit', loginSubmit) 
            break;
        case "signUp-user":
            const signUpForm = `<form id="user-signup">
            <label for="username">Username:</label>
            <input type="text" name="Username" id="username"><br/>
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" id="first_name"><br/>
            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" id="last_name"><br/>
            <label for="city">City:</label>
            <input type="text" name="city" id="city"><br/>
            <label for="state">State:</label>
            <input type="text" name="state" id="state"><br/>
            <label for="bootcamp">What bootcamp did you go to?</label>
            <select name="bootcamp" id="bootcamp" form="signUpForm">
                <option value="FlatIron">FlatIron</option>
                <option value="General Assembly">General Assembly</option>
                <option value="Kenzie Academy">Kenzie Academy</option>
                <option value="Thinkful">Thinkful</option>
                <option value="Springboard">Springboard</option>
                <option value="App Academy">App Academy</option>
                <option value="Ironhack">Ironhack</option>
                <option value="Le Wagon">Le Wagon</option>
                <option value="CareerFoundary">CareerFoundary</option>
                <option value="Nucamp">Nucamp</option>
                <option value="Code Institute">Code Institute</option>
                <option value="Lambda School">Lambda School</option>
                <option value="other">other</option>
            </select><br/>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password"><br/>
            <input type="submit" value="Join CompanyClick!" id="sign-up-submit">
            </form>`
            enterArea.innerHTML = signUpForm
            const signUpSubmitForm = document.getElementById("user-signup")
            signUpSubmitForm.addEventListener('submit', signUpVerify)
            break;

        default:
            break;
    }
}

// login into profile
function loginSubmit(e){
    console.log("Submit Login")
    e.preventDefault()
    
}

// verify profile
function signUpVerify(s){
    s.preventDefault()
    let username = s.target.children[1].value
    let first_name = s.target.children[4].value
    let last_name = s.target.children[7].value
    let city = s.target.children[10].value
    let state = s.target.children[13].value
    let bootcamp = s.target.children[16].value
    let password = s.target.children[19].value

    enterArea.innerHTML = 
       `<h4>Verify Information is correct?</h4>
        <ul id="verify-info">
            <label for="username">Username:</label> ${username} <br/>
            <label for="username">Username:</label> ${first_name} <br/>
            <label for="last_name">Last Name:</label> ${last_name} <br/>
            <label for="city">City:</label> ${city} <br/>
            <label for="state">State:</label> ${state} <br/>
            <label for="bootcamp">Bootcamp:</label> ${bootcamp}<br/>
            <hidden for="password" value=${password}/>
            <button id="edit-info">Edit</button>
            <input type="submit" value="Signup" id="submit-signUp">
        </ul>`
        const verifiedInfo = document.getElementById("submit-signUp")
        verifiedInfo.addEventListener('click', infoVerified)
}

function infoVerified(){
    console.log("Info has been verified")
    // persist data to backend. Save in User database
}

document.addEventListener('DOMContentLoaded', (e) => {
    enterArea.addEventListener('click', enterAreaClick)
})
