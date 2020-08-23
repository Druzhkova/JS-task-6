let containerButton = document.querySelector('.container-button');
let buttonSignUp = document.querySelector('.button-sign-up');
let buttonSignIn = document.querySelector('.button-sign-in');
let buttonCloseSignUp = document.querySelector('.close-sign-up');
let buttonCloseSignIn = document.querySelector('.close-sign-in');
let buttonCreateAccount = document.querySelector('.create-account');
let buttonSignInConfirm = document.querySelector('.button-sign-in-confirm');
let buttonRegistrationOk = document.querySelector('.button-ok-registration');
let buttonOkPopupSigned = document.querySelector('.button-ok-signed');
let buttonSignOut = document.querySelector('.button-sign-out');
let popupSignUp = document.querySelector('.popup-sign-up');
let popupSignIn = document.querySelector('.popup-sign-in');
let popupRegistrationOk = document.querySelector('.popup-registration-ok');
let popupSigned = document.querySelector('.popup-signed');
let popupUserDate = document.querySelector('.popup-user-date')
let formSignUp = document.forms['user-form-sign-up'];
let formSignIn = document.forms['user-form-sign-in'];
let userName = document.querySelector('#user-name');
let userAge = document.querySelector('#user-age');

buttonSignUp.addEventListener('click', function(){
  popupSignUp.style.display = 'block';
  containerButton.style.display = 'none';
});

buttonCloseSignUp.addEventListener('click', CloseSignUp)
function CloseSignUp() {
  popupSignUp.style.display = 'none';
  containerButton.style.display = 'block';
}

buttonSignIn.addEventListener('click', function(){
  popupSignIn.style.display = 'block';
  containerButton.style.display = 'none';
});

buttonCloseSignIn.addEventListener('click', CloseSignIn);
function CloseSignIn() {
  popupSignIn.style.display = 'none';
  containerButton.style.display = 'block';
}

function getNoEmptyFields(object) {
	for(let key in object) {
		if(object[key] === '') return false;
	}
	return true;
}

let userList = [];
let Hello = document.querySelector('.hello');
let userData = {};
buttonCreateAccount.addEventListener('click', function() {
  userData.login = formSignUp.elements.login.value;
  userData.password = formSignUp.elements.password.value;
  userData.name = formSignUp.elements.username.value;
  userData.age = formSignUp.elements.age.value;

  if(getNoEmptyFields(userData)) {
    userList.push(userData);
    popupSignUp.style.display = 'none';
    popupRegistrationOk.style.display = 'block';
    containerButton.style.display = 'none';
    formSignUp.reset();
  } else alert('Please, fill all the fields');
});

buttonRegistrationOk.addEventListener('click', function(){
  popupRegistrationOk.style.display = 'none';
  containerButton.style.display = 'block';
})

buttonOkPopupSigned.addEventListener('click', function(){
  popupSigned.style.display = 'none';
  userName.append(document.createTextNode(`Name: ${userData.name}`));
  userAge.append(document.createTextNode(`Age: ${userData.age}`))
  popupUserDate.style.display = 'block';
})

buttonSignOut.addEventListener('click', function(){
  popupUserDate.style.display = 'none';
  containerButton.style.display = 'block';
})

buttonSignInConfirm.addEventListener('click', function(){
  let userData = {
    login: formSignIn.elements.login.value,
    password: formSignIn.elements.password.value,
  }

  let userCheck;

  if(getNoEmptyFields(userData)) {
    userCheck =  userList.find(function(item) {
      if(item.login === userData.login && item.password === userData.password)
        return true
    }) 
  } else {
    alert('Please, fill all the fields');
    return false;
  } 

	if(userCheck) {
    popupSignIn.style.display = 'none';
    popupSigned.style.display = 'block';
    formSignIn.reset();
	} else {
		alert('Invalid login or password, try again');
		formSignIn.reset();
		return;
  } 
})