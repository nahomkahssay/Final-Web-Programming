function saveToFile(){
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email'); 
    const telphone = document.getElementById('telephone'); 
    const date = document.getElementById('date');
    

    var data = "Full Name : " + fullName.value + "\n" + 
                "Email : " + email.value + "\n" + 
                "Telephone : " + telphone.value + "\n" + 
                "Date : " + date.value + "\n";

    
    const textToBLOB = new Blob([data], { type: "text/plain" });
            
     const sFileName = "reservation.txt"; // The file to save the data.

     window.localStorage.getItem('data');

            let newLink = document.createElement("a");
            newLink.download = sFileName;


            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();

            

            alert('Thank You for submitting! We will contact you shortly!')
            
}