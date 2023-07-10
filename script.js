let message = document.getElementById("output");
let password = document.getElementById('password');
let email = document.getElementById('email');


function myFunction() {
  const pass = password.value;
  const eml = email.value;

  message.style.fontSize='1rem';
  message.style.color='red';

  if(pass.length == ""){
    message.innerHTML='insert password/email';
  }
  else if(pass.length >= 6 && eml.includes('@')){
    message.innerHTML='Successfully Submitted';
    message.style.color='green';
  }else{
    message.innerHTML= 'password must be 8 or more character and email must include @';
  }
  
}