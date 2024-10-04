// all inputs
var userEmailInput = document.querySelector('#userEmail');
var userNameInput = document.querySelector('#userName');
var userPasswordInput = document.querySelector('#userPassword');
var signUpBtn = document.querySelector('#signUpBtn');
var signUpSpan = document.querySelector('#signUpSpan');
var form  = document.querySelector('#signUpForm');
var loginBtn = document.querySelector('#loginBtn');
var loginSpan = document.querySelector('#loginSpan');
var signSuccess = document.querySelector('.sign-success')
var alertMsg = document.querySelector('.alertMsg')
var loginForm =document.querySelector('#login')
var loginEmailInput = document.querySelector('#loginUserEmail')
var loginPasswordInput = document.querySelector('#loginUserPassword')
var loginAlert = document.querySelector('.login-alert')
var inputAlert = document.querySelector('.input-alert')
var emailExist = document.querySelector('.email-exist')
var section = document.querySelector('section')
var allUsers =[];
// all inputs
// sign up page


if (localStorage.getItem('allUsers')!== null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validation(userName)&&
    validation(userEmail)&&
    validation(userPassword)){
    addUser();
}else{
    alertMsg.classList.remove('d-none')
    signSuccess.classList.add('d-none')
}
});
function  addUser(){
    var newUser={
        userEmail: userEmailInput.value,
        userName: userNameInput.value,
        userPassword: userPasswordInput.value
    };
    if(isExist(newUser)== true){
        console.log('is exist');
        
        emailExist.classList.remove('d-none')
        alertMsg.classList.add('d-none ')
    }else{
        allUsers.push(newUser);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        signSuccess.classList.remove('d-none')
        alertMsg.classList.add('d-none')
        emailExist.classList.add('d-none')
        clearForm()
        setTimeout(function(){
            loginForm.classList.remove('d-none')
            form.classList.add('d-none')
            section.style.backgroundImage =  "url(../images/nat-dA0-qxdbyyY-unsplash.jpg)"
        },1000)
    }


};
function clearForm(ele){
    userEmailInput.value = '';
    userNameInput.value = '';
    userPasswordInput.value = '';
    userEmailInput.classList.remove('is-valid')
    userNameInput.classList.remove('is-valid')
    userPasswordInput.classList.remove('is-valid')
}
function validation(ele){
    var regex={
        userName :/^[A-z][a-z]{3,}$/,
        userEmail :/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        userPassword :/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    }
    if(regex[ele.id].test(ele.value)){
        ele.classList.remove('is-invalid')
        ele.classList.add('is-valid')

        return true
    }else{
        ele.classList.add('is-invalid')
        ele.classList.remove('is-valid')

        return false;
    }
}
function isExist(newUser){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].userEmail.toLowerCase() == newUser.userEmail.toLowerCase()){
           return true
        }
        
    }
}

userEmailInput.addEventListener('input' , function(e){
   validation(e.target)
});
userNameInput.addEventListener('input' , function(e){
   validation(e.target)
});
userPasswordInput.addEventListener('input' , function(e){
   validation(e.target)
});
loginSpan.addEventListener('click',function(e){
    loginForm.classList.remove('d-none')
    form.classList.add('d-none')
    section.style.backgroundImage =  "url(../images/undraw_login_re_4vu2.svg)"


})
signUpSpan.addEventListener('click',function(e){
    loginForm.classList.add('d-none')
    form.classList.remove('d-none')
    signSuccess.classList.add('d-none')
    section.style.backgroundImage =  "url(../images/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg)"
    clearLoginForm()
})
// end of sign up
// start of log in

loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    login();
});
function login(){
    var loginData ={
        email:loginEmailInput.value,
        password:loginPasswordInput.value
    }
    if (loginData.email === '' || loginData.password === ''){
        inputAlert.classList.remove('d-none')
    }else{
        inputAlert.classList.add('d-none')
        if(isLoginValid(loginData) ==true){
            clearLoginForm()
            window.location.href = 'home.html'
            
        }else{
            loginAlert.classList.remove('d-none')
        }
        
    }

}
function isLoginValid(loginData){
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].userEmail.toLowerCase() == loginData.email.toLowerCase()&&
            allUsers[i].userPassword == loginData.password) {
                localStorage.setItem('userName', allUsers[i].userName);

            return true
        }
    }
}
function clearLoginForm(ele){
    loginEmailInput.value = '';
    loginPasswordInput.value = '';
   
}
// end of log in
