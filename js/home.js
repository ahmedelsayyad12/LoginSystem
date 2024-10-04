// start pf welcome page
var welcomeMsg =document.querySelector('#welcomeMsg')
var logOutInput = document.querySelector('#logOut')
window.addEventListener('load',function(){
    welcomeDisplay()
})
function welcomeDisplay(){
    welcomeMsg.innerHTML = `<h1 class="fw-bold">Welcome ${localStorage.getItem('userName')}</h1>`
}
logOutInput.addEventListener('click',function(){
    localStorage.removeItem('userName')
    
})