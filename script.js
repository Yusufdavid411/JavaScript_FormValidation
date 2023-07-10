let message = document.getElementById("output");
let password = document.getElementById('password');


function myFunction() {
  const pass = password.value;
  message.style.fontSize='.8rem';
  message.style.color='red';

  if(pass.length >= 6){
    message.innerHTML='Good Job';
    
  }else{
    message.innerHTML= 'password';
  }
  
}