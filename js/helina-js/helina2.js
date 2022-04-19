// this function will be called by clicking side button and will be redirected to the particluar division mentioned by giving id
function scrollEvent(division) {
  const element = document.getElementById(division);
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
// onclicking the hamburger menu will be shown when a responsive screen is used
function showMenu() {
  var content = document.getElementById('LeftSlider');
  if (window.getComputedStyle(content).display === 'none') {
    content.style.display = 'block';
  }
}

// onclicking the close button menu will be hidden when a responsive screen is used
function hideMenu() {
  var content = document.getElementById('LeftSlider');
  if (window.getComputedStyle(content).display === 'block') {
    content.style.display = 'none';
  }
}

// image slider
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);

// automatic popup
window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    2000
  )
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});


const form = document.getElementById('contactForm');  //access form
//accessing each field in form using variables
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');

//checking validation
form.addEventListener('submit', e => {
  e.preventDefault(); 
  validateInputs();  
});

const setError = (element, message) => {
  const inputControl = element.parentElement; 
  const errorDisplay = inputControl.querySelector('.error'); 

  errorDisplay.innerText = message; 
  inputControl.classList.add('error'); //add on error
  inputControl.classList.remove('success'); //remove on success
}
/*Opposite function of setError */
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ''; 
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
  const fnameValue = fname.value.trim(); 
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const msgValue = msg.value.trim();
  var loop=true,letters = /^[A-Za-z]+$/,validnum=/^\d{10}$/; //regex for fname,lname and ContactNUmber

  //check firstname
  if(fnameValue === '') {
      setError(fname, '[Firstname is required]'); //if null then display error message
      loop=false;
  } else if(fname.value.match(letters) && fnameValue.length>2)
  {
    setSuccess(fname);
  }
  else {
    setError(fname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
  }
  //check lastname
  if(lnameValue === '') {
    setError(lname, '[Lastname is required]'); //if null then display error message
    loop=false;
  }else if(lname.value.match(letters) && lnameValue.length>4)
  {
    setSuccess(lname);
  }
  else {
    setError(lname, '[Only Aplhabets Allowed]'); //if number present then display error message as only alphabet
  }
  //check email using RE.
  if(emailValue === '') {      //if null then display error message
    setError(email, '[Email is required]');
    loop=false;
  } 
  else if (!isValidEmail(emailValue)) {  //if email does not match regex display error message
    setError(email, '[Provide a valid email address]');
    loop=false;
  } 
  else {
    setSuccess(email);
  }
  //check phone length must be 10.
  if(phoneValue === '') {         
    //if null then display error message
    setError(phone, '[ContactNumber is required]');
    loop=false;
  } 
  else if (phoneValue.length==10 && phoneValue.match(validnum)) {  
    //number should be 10 digits and no aplhaber allowed 
    setSuccess(phone);
  }  
  else {   
    //number!=10 and aphabet present then display error message
    setError(phone, '[Length 10 digits and Number Only.]');
    loop=false;
  }
  //check message is not null and having minimum 40 characters.
  if(msgValue === '') {           //if null then display error message
    setError(msg, '[Message cannot be empty]');
    loop=false;
  } 
  else if (msgValue.length>40) {     
    //Need more than 40 character
    setSuccess(msg);
  }  
  else {   
    //display error message if not more than 40 character
    setError(msg,'[Minimum 40 character]');
    loop=false;
  }
  //all success then clear form after showing pop-up
  if(loop===true){ 
    setTimeout(() => { alert('Message Recorded!!!') },10) //display pop-up
    //clear all fields filed-up
    fname.value="";  
    lname.value="";
    email.value="";
    phone.value="";
    msg.value="";
  }
};


// form validation
// function validate() {
//   var name = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var error_message = document.getElementById("error_message");

//   error_message.style.padding = "10px";

//   var text;
  // if(name.length < 5){
  //   text = "Please Enter valid Name";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  // if (isNaN(phone) || phone.length != 10) {
  //   text = "Please Enter valid Phone Number";
  //   error_message.innerHTML = text;
  //   // return false;
  // }
  // if (email.indexOf("@") == -1) {
  //   text = "Please Enter valid Email";
  //   error_message.innerHTML = text;
  //   // return false;
  // }
  // if(message.length <= 140){
  //   text = "Please Enter More Than 140 Characters";
  //   error_message.innerHTML = text;
  //   return false;
  // }
//   alert("Form Submitted Successfully!");
//   return true;

// }

// $(document).ready(function () {

//   $('#submit').change(function () {
//     alert("Hello");
    // var er = $('#ErNo').val();
    // $('#weeklyEr,#MidEr').val(er);
    // $.ajax({
    //   headers: { "X-CSRFToken": token },
    //   type: "POST",
    //   url: "getData",
    //   dataType: "JSON",
    //   data: { Enrollment: er },
    //   success: function (Received) {
    //     if (Received.weekly.Status == 'ok') {
    //       $('#weeklyAP').val(Received.weekly.Wap)
    //       $('#weeklyPDC').val(Received.weekly.Wpdc)
    //       $('#weeklySE').val(Received.weekly.Wse)
    //       $('#weeklyWDD').val(Received.weekly.Wwdd)
    //     } else {
    //       $('#weeklyAP').val('')
    //       $('#weeklyPDC').val('')
    //       $('#weeklySE').val('')
    //       $('#weeklyWDD').val('')
    //     }

    //     if (Received.mid.Status == 'ok') {
    //       $('#midAP').val(Received.mid.Map)
    //       $('#midPDC').val(Received.mid.Mpdc)
    //       $('#midSE').val(Received.mid.Mse)
    //       $('#midWDD').val(Received.mid.Mwdd)
    //     } else {
    //       $('#midAP').val('')
    //       $('#midPDC').val('')
    //       $('#midSE').val('')
    //       $('#midWDD').val('')
    //     }
    //   }
    // });
//   });
// });
