console.log('connected')

const submitForm =  document.querySelector('#submit-form')
const userName = document.querySelector('#user-name')
const title = document.querySelector('#title')
const body = document.querySelector('body')




/*        Pages      */

const landingPage = document.querySelector('#landing-page')
const home = document.querySelector('#home')
const quiz = document.querySelector('#quiz')




submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(userName.value))
    body.style.background = 'white'
    document.location.href="home.html"
    
    
})











