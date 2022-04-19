// This is the function to show the list in hamburger at the time of responsive
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

// this function also helps in responsive design
function Hide() {
  navList.classList.remove("_Menus-show");
}

function validateEmail(x, email) {
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value.match(mailformat)) {
    window.alert("Thank you for submitting");
    myFunction(x);
    document.form1.text1.focus();
    return true;
  }
  else {
    document.getElementById("output").innerHTML = "Invalid email address";
    document.form1.text1.focus();
    return false;
  }

}

// this function helps in asking the user to input their email if they click on the check box
function myFunction(x) 
{
  email.remove();
  x.style.display = 'none';
  var dis = document.getElementById("output");
  dis.style.display = 'none';

}

// this function is used to clear the text area when submit button will be clicked
function Submit() {
  window.alert("Thank you for submitting");
  reset();
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//This is the clearing function
function reset() {
  document.getElementById("comment").value = "";
}

function myCollapse() {
  var coll = document.getElementsByClassName("collapse");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "100px";
      }
    });
  }
}



function RTxt() {
  var rTxt = document.getElementById("reviewtxt");
  var rDiv = document.querySelector('.star-widget');
  rTxt.style.display = "block";
  rDiv.style.display = "none";

  return false;
}

function ISPrint() {
  var divContents = document.getElementById("article").innerHTML;
  var a = window.open('', '');
  a.document.write('<html>');
  a.document.write('<body>');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
}


function myF1() {
  window.open("https://www.swiggy.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=700px,height=700px,left=600px,top=125px");
}
function myF2() {
  window.open("https://www.ubereats.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=700px,height=700px,left=600px,top=125px");
}
function myF1() {
  window.open("https://www.doordash.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=700px,height=700px,left=600px,top=125px");
}
function myF1() {
  window.open("https://www.skipthedishes.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=700px,height=700px,left=600px,top=125px");
}


function openForm() {
  document.getElementById("form-container").style.display = "block";
}

function closeForm() {
  document.getElementById("form-container").style.display = "none";
}

function myImages(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function validateE(email)
{
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value.match(mailformat)) {
    return true;
  }
  else {
    document.getElementById("output").innerHTML = "Invalid email address";
    document.form1.text1.focus();
    return false;
  }
}



function validate(email)
{
    var x = document.forms["myForm"]["text"].value;
    var y = document.forms["myForm"]["e-mail"].value;
    var z = document.forms["myForm"]["phone"].value;
    
    // alert("out");
    if (x == "") {
      // alert("in");
      document.getElementById("output1").innerHTML = "please enter name";
      // document.getElementById("output1").style.display="block";
      // alert("inner");
    }else if(y == ""){
      document.getElementById("output1").innerHTML = "";
      document.getElementById("output2").innerHTML = "please enter email";
    }
  else if(z == ""){
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "please enter phone";
  }
  else
  {
    document.getElementById("output3").innerHTML = "";
    validateE(email);
    alert("Thank you for submitting");
    closeForm();
    document.getElementById("text").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("phone").value = "";
    document.form1.text1.blur();
  }
    return "";
}



function abc()
{
  alert("Thank you for submitting");
}





