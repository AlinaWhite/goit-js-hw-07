const inputForm = document.querySelector('.login-form');

const personInfo = event => {
   event.preventDefault();
   const infoUser = event.target;

   const userEmail = infoUser.elements.email.value.trim();
   const userPass = infoUser.elements.password.value.trim();
   if (userEmail === '' || userPass === '') {
    return alert('All form fields must be filled in');
    }

    const userInform = {
        email: userEmail,
        password: userPass
    }

    console.log(userInform);

    inputForm.reset();
}

inputForm.addEventListener('submit', personInfo);