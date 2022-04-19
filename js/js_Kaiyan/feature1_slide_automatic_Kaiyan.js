// automatic slide
let myImagesArray = ["images/images_Kaiyan/breakfast-burrito.jpg","images/images_Kaiyan/breakfast-burrito2.jpg","images/images_Kaiyan/breakfast-burrito3.jpg"];

let ImageNumber = 0;
let difference = myImagesArray.length -1;

let delay = 2000;

setInterval('ChangeImages(1)', delay);

function ChangeImages(direction)
    {
        
		ImageNumber = ImageNumber + direction;

		if(ImageNumber > difference)
		{
			ImageNumber = 0;
		}

		if(ImageNumber < 0)
		{
			ImageNumber = difference;
		}
		
		document.getElementById('slideshow').src = myImagesArray[ImageNumber];

       

    }



let comments = ["This looks so good, can't wait to try it!", "It only takes me 15 minutes, easy for breakfast!", "Super loooooove!!!"];

display = () => {
  let commentsList = "";
  comments.forEach((comment) => {
    commentsList += "<li>" + comment + "</li>";
  });
  document.querySelector("#comment-list").innerHTML = commentsList;
};

add = () => {
	let item = document.querySelector("#comments-input").value;
	comments.push(item);
	display();
  };

display();

    