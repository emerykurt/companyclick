let topCompaniesList = document.getElementById("topCompaniesList")
const loginButton = document.getElementById("login-user")
const signUpButton = document.getElementById("signUp-user")
const enterArea = document.querySelector('#enter-area')
const loginSubmitButton = document.getElementById("login-submit")
const signUpSubmitButton = document.getElementById("sign-up-submit")

enterArea.addEventListener('click', enterAreaClick)
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
            <input type="text" name="password" id="password"><br/>
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

function loginSubmit(e){
// login into profile
    console.log("Submit Login")
    e.preventDefault()
}

function signUpVerify(s){
// verify profile
    debugger
    console.log("Verfy Info")
    e.preventDefault()
}


