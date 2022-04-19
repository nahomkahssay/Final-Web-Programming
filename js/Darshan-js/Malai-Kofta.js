// List of images store in array
let myImagesArray = ["images/Darshan-Images/FinalKofta.jpg","images/Darshan-Images/Kofta1.jpg","images/Darshan-Images/Kofta2.jpg","images/Darshan-Images/Kofta3.jpg",
                    "images/Darshan-Images/Kofta4.jpg","images/Darshan-Images/Paste1.jpg","images/Darshan-Images/Paste2.jpg","images/Darshan-Images/Paste3.jpg"];

// Responsive Navigation Hamburgur Menu with show and hide function
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");  //Show Menu on click
}
function Hide() {
  navList.classList.remove("_Menus-show");  //Hide Menu on click
}

var i = myImagesArray.length; //calculate array length
// function for next slide 
function nextImage(){
  if (i<myImagesArray.length) {
      i= i+1;
  }else{
      i = 1;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1]; //move to next image on clicking arrow(>)
}
// function for prew slide
function prewImage(){
  if (i<myImagesArray.length+1 && i>1) {
      i= i-1;
  }else{
      i = myImagesArray.length;
  }
  document.getElementById('ControlImage').src=myImagesArray[i-1];  //move to next image on clicking arrow(<)
}
// script for auto image slider
//setInterval(nextImage , 4000);

const btn = document.querySelector("button"); //submit button
const post = document.querySelector(".post");  //message and edit option div container
const widget = document.querySelector(".star-widget");  //star input
const editBtn = document.querySelector(".edit");    //edit button
const title = document.querySelector(".ratingcontainer h4"); //rate recipe title
btn.onclick = ()=>{
  widget.style.display = "none";  //hide star
  post.style.display = "block";  //display message and edit option
  title.style.display="none";    //hide title(rate recipe)
  editBtn.onclick = ()=>{
      widget.style.display = "block"; //display star
      post.style.display = "none";  //hide message and edit option
      title.style.display="block";  //display title(rate recipe)
  }
  return false;
}