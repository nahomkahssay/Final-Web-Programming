// automatic slide
let myImagesArray = ["images/images_Kaiyan/breakfast-skillet.jpg","images/images_Kaiyan/breakfast-skillet2.jpg","images/images_Kaiyan/breakfast-skillet3.jpg"];

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

    //form validity
    const $ = (selector) => document.querySelector(selector);
    
    const processEntries = () => {
      
      const email = $('#email_address');
      const phone = $('#phone');
      const country = $('#country');
      const terms = $('#terms');
    
      let isValid = true;
      if (email.value == '') {
        email.nextElementSibling.textContent = 'Invalid';
        isValid = false;
      } else {
        email.nextElementSibling.textContent = '';
      }
    
      if (phone.value == '') {
        phone.nextElementSibling.textContent = 'Invalid';
        isValid = false;
      } else {
        phone.nextElementSibling.textContent = '';
      }
    
      if (country.value == '') {
        country.nextElementSibling.textContent = 'Invalid';
        isValid = false;
      } else {
        $('#country').nextElementSibling.textContent = '';
      }
    
      if (terms.checked == false) {
        terms.nextElementSibling.textContent = 'This box must be checked.';
        isValid = false;
      } else {
        terms.nextElementSibling.textContent = '';
      }
    
      if (isValid == true) {
        $('form').submit();
      }
    };
    
    const resetForm = () => {
      $('form').reset();
      $('#email_address').nextElementSibling.textContent = '*';
      $('#phone').nextElementSibling.textContent = '*';
      $('#country').nextElementSibling.textContent = '*';
      $('#terms').nextElementSibling.textContent = '*';
      $('#email_address').focus();
    };
    
    document.addEventListener('DOMContentLoaded', () => {
      $('#register').addEventListener('click', processEntries);
      $('#reset_form').addEventListener('click', resetForm);
      $('#email_address').focus();
    });