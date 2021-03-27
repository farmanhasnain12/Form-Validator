const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('confirm_password');


//function to check the passwords
function CheckPassword(input1,input2)
{
  if(input1.value!==input2.value)
  {
    showError(input2,'Passwords do not match ');
  }

}
//function to check the valid Email
function CheckEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  return re.test(String(email).toLowerCase());

  if(input.value==='')
  {
    showError(input,'Email is required');
  }
  else{
  if(re.test(input.value.trim()))
  {
    showSuccess(input);
  }
  else
  {
    showError(input,'Email is not valid')
  }
}
}
// functino to check the length of the username and password
function CheckLength(input,min,max)
{
  if(input.value=='')
  {}
  else{
  if(input.value.length<min)
  {
    showError(input,getString(input)+ " must be at least "+min+" characters.");
  }
  else if(input.value.length>max)
  {
    showError(input,getString(input)+" must less than "+max+" characters.");
  }
  else{
    showSuccess(input);
  }
}
}
// function to capitalize the first letter
function getString(input)
{
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// function to show the failure
function showError(input ,messgae)
{
  const formControl=input.parentElement;
  formControl.className='form-control error';

  const small=formControl.querySelector('small');
  small.innerHTML=messgae;
}

//function to show the success
function showSuccess(input)
{
  const formControl=input.parentElement;
  formControl.className='form-control success';
}


function CheckRequirement(inputArr)
{
  inputArr.forEach(function(input)
{
  if(input.value.trim()=='')
  {
    showError(input,getString(input)+" is required");
  }
  else
  {
    showSuccess(input);
  }
})
}

form.addEventListener('submit',function(event){
  event.preventDefault();

  CheckRequirement([username,email,password,confirm_password]);

  CheckLength(username,3,15);
  CheckLength(password,6,25);
  CheckEmail(email);
  CheckPassword(password,confirm_password);



});





//
// if (username.value==='')
// {
//   showError(username,'Username is required');
//
// }
// else{
//   showSuccess(username);
// }
//
//
// if (email.value==='')
// {
//   showError(email,'Email is required');
//
// }
// else{
//   showSuccess(email);
// }
// if (password.value==='')
// {
//   showError(password,'password is required');
//
// }
// else{
//   showSuccess(password);
// }
// if (pass1.value==='')
// {
//   showError(pass1,'Type the password Again');
//
// }
// else{
//   showSuccess(pass1);
// }
