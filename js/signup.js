const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const usersRegistered = Users.find(user => user.email === email)
    if(usersRegistered){
        return alert('El usuario ya esta registrado.')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro con éxito.')
    window.location.href = 'login.html'


})


