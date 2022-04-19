// This is the function to show the list in hamburger at the time of responsive
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

// this function also helps in responsive design
function Hide() {
  navList.classList.remove("_Menus-show");
}

// this function helps in asking the user to input their email if they click on the check box
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  // if checkbox is checked then one dialog box will be open and ask the user to enter their email id
  if (checkBox.checked == true)
  {
    prompt("Enter the email");
  } 
}

// this function is used to clear the text area when submit button will be clicked
function Submit() {
 window.alert("Thank you for submitting");
 reset();
}

//This is the clearing function
function reset() {    
  document.getElementById("comment").value = "";
}