
var catCount = document.getElementById("catCount");

var count = 0;

var showImageArea = document.getElementById("result-area");

function showImg(){
    count +=1;
    var img = document.createElement('img');
    img.src= 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    
//    img.classList.add('imgStyle');
//    
//    showImageArea.classList.add('flex-box-result');
//    
    catCount.innerHTML = " You've generated  " + count + " cats."
    showImageArea.appendChild(img);
}


function resetImg(){
    count = 0;
    catCount.innerHTML = 'Again click generate to generate cat!';
    showImageArea.innerHTML = "";
}



