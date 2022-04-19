// this function will be called by clicking side button and will be redirected to the particluar division mentioned by giving id
function scrollEvent(division){
    const element = document.getElementById(division);
    element.scrollIntoView({behavior: 'smooth', block:'center'});
}

// onclicking the hamburger menu will be shown when a responsive screen is used
function showMenu(){
    var content= document.getElementById('LeftSlider');
    if(window.getComputedStyle(content).display === 'none'){
        content.style.display = 'block';   
    }
}

// onclicking the close button menu will be hidden when a responsive screen is used
function hideMenu(){
    var content= document.getElementById('LeftSlider');
    if(window.getComputedStyle(content).display === 'block'){
        content.style.display = 'none';   
    }
}

const d = new Date();
document.getElementById("date").innerHTML = d;
