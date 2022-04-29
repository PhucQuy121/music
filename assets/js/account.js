function account() {
    const logIn = document.querySelector('.header-account-login')
    const signUp = document.querySelector('.header-account-signup')
    const formAccount = document.querySelector('.form-account')
    const formLogIn = document.querySelector('.form-login-main')
    const formSignUp = document.querySelector('.form-signup-main')
    
    logIn.onclick = () => {
        formAccount.style.display = 'block'
        formLogIn.style.display = 'flex'
    }

    signUp.onclick = () => {
        formAccount.style.display = 'block'
        formSignUp.style.display = 'flex'
    }

    formAccount.onclick = () => {
        formLogIn.style.display = 'none'
        formAccount.style.display = 'none'
        formSignUp.style.display = 'none'
    }
}