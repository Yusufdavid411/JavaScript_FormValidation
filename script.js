let message = document.getElementById("output");
let password = document.getElementById('password');


function myFunction() {
  const pass = password.value;

  if(pass.length >= 6){
    message.innerHTML='Good Job';
    message.style.color='red';
  }else{
    message.innerHTML= 'password';
  }
  
}