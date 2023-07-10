let message = document.getElementById("output");
let password = document.getElementById('password');


function myFunction() {
  const pass = password.value;
  message.style.fontSize='1rem';
  message.style.color='red';

  if(pass.length == ""){
    message.innerHTML='insert password';
  }
  else if(pass.length >= 6 ){
    message.innerHTML='Successfully Submitted';
    message.style.color='green';
  }else{
    message.innerHTML= 'password must be 8 or more character';
  }
  
}