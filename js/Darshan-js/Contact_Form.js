const form = document.getElementById('contactForm');  //access form
//accessing each field in form using variables
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');

//checking validation
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent the form from submitting automatically
  validateInputs(); //validate the inputs and we can submit the form after every check succeed 
});
//two functions set the error or success states of the each of the input controls
const setError = (element, message) => {
  const inputControl = element.parentElement; //getting parentelement
  const errorDisplay = inputControl.querySelector('.error'); 

  errorDisplay.innerText = message; //display error in div container
  inputControl.classList.add('error'); //add on error
  inputControl.classList.remove('success'); //remove on success

  setTimeout(function(){errorDisplay.innerText = '';},2000); //displaying error for 2 seconds
}
/*Opposite function of setError */
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ''; //display nothing once success
  inputControl.classList.add('success'); 
  inputControl.classList.remove('error');
}

//Email Regular Expression Function
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//validation function
const validateInputs = () => {
  const fnameValue = fname.value.trim(); //trim remove whitespace
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const msgValue = msg.value.trim();
  var flag=1,letters = /^[A-Za-z]+$/,validnum=/^\d{10}$/; //regex for fname,lname and ContactNUmber //flag 1 means TRUE

  //check firstname
  if(fnameValue === '') {
      setError(fname, '[Firstname is required]'); //if null then display error message
      flag=0;
  }else if(fnameValue.match(letters)){
      if(fnameValue.length>2){
        setSuccess(fname);
      }
      else{
        setError(fname, '[Min. 3 Character]'); 
        flag=0;   
      }
  }
  else{
    setError(fname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
    flag=0;
  }
  //check lastname
  if(lnameValue === '') {
    setError(lname, '[Lastname is required]'); //if null then display error message
    flag=0;
  }else if(lnameValue.match(letters)){
    if(lnameValue.length>3){
      setSuccess(lname);
    }
    else{
      setError(lname, '[Min. 4 Character]');    
      flag=0;
    }
}
  else {
    setError(lname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
    flag=0;
  }
  //check email using RE.
  if(emailValue === '') {      //if null then display error message
    setError(email, '[Email is required]');
    flag=0;
  } 
  else if (!isValidEmail(emailValue)) {  //if email does not match regex display error message
    setError(email, '[Provide a valid email address]');
    flag=0;
  } 
  else {
    setSuccess(email);
  }
  //check phone length must be 10.
  if(phoneValue === '') {           //if null then display error message
    setError(phone, '[ContactNumber is required]');
    flag=0;
  } 
  else if (phoneValue.length==10) {  //number should be 10 digits and no aplhaber allowed 
    if(phoneValue.match(validnum)){
      setSuccess(phone);
    }
    else{
      setError(phone, '[Enter Number Only.]');
      flag=0;
    }
  }  
  else {   //number!=10 and aphabet present then display error message
    setError(phone, '[10 digits Required]');
    flag=0;
  }
  //check message is not null and having minimum 40 characters.
  if(msgValue === '') {           //if null then display error message
    setError(msg, '[Message cannot be empty]');
    flag=0;
  } 
  else if (msgValue.length>40) {     //Need more than 40 character
    setSuccess(msg);
  }  
  else {   //display error message if not more than 40 character
    setError(msg,'[Minimum 40 character]');
    flag=0;
  }
  //all success then clear form after showing pop-up
  if(flag==1){ 
    setTimeout(() => { alert('Message Recorded!!!') },10) //display pop-up
    //clear all fields filed-up
    fname.value="";  
    lname.value="";
    email.value="";
    phone.value="";
    msg.value="";
  }
};

//Reponsive Navigation
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");  //Show Menu on click
}
function Hide() {
  navList.classList.remove("_Menus-show");  //Hide Menu on click
}



/*
Example of valid email id
mysite@ourearth.com
my.ownsite@ourearth.org
mysite@you.me.net

Example of invalid email id
mysite.ourearth.com [@ is not present]
mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
@you.me.net [ No character before @ ]
mysite123@gmail.b [ ".b" is not a valid tld ]
mysite@.org.org [ tld can not start with dot "." ]
.mysite@mysite.org [ an email should not be start with "." ]
mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
mysite..1234@yahoo.com [double dots are not allowed]
 */