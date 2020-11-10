(function() {
    
    const firstNameError = document.getElementById('firstNameError')
    const firstName = document.getElementById('firstName')
    
    const lastNameError = document.getElementById('lastNameError')
    const lastName = document.getElementById('lastName')
    
    const passwordError = document.getElementById('passwordError')
    const password = document.getElementById('password')
    
    const emailError = document.getElementById('emailError')
    const email = document.getElementById('email')

    function setError(el, errEl) {
        errEl.classList.remove('hidden')
        el.classList.add('input_err')
    }

    function clearError(el, errEl) {
        errEl.classList.add('hidden')
        el.classList.remove('input_err')
    }
    
    function validateElementLen (el, errEl) {
        if (el.value.trim().length === 0) {
            setError(el, errEl)
        } else {
            clearError(el, errEl)
        }
    }

    function validateEmail(el, errEl) {
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value.trim()))) {
            setError(email, emailError)
        }
        else {
            clearError(el, errEl)
        }
    }
    
    document.getElementById('validator').addEventListener('click', e => {
        e.preventDefault()
    
        validateElementLen(firstName, firstNameError)
        validateElementLen(lastName, lastNameError)
        validateElementLen(password, passwordError)
        validateEmail(email, emailError)
    })
    
})()

