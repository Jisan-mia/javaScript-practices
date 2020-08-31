//Change the color of all butoon 

var all_btn = document.getElementsByTagName('button')

//copying present second class of all the buttons
var copyAllButtons = [];
for(let i = 0; i < all_btn.length; i++){
    copyAllButtons.push(all_btn[i].classList[1]);
}


//main function of all the button color change
function buttonColorChange (clikedButton){
    if(clikedButton.value === 'red'){
        changeToRedButtons();
    }
    else if(clikedButton.value === 'green'){
        changeToGreenButtons();
    }
    else if(clikedButton.value === 'black'){
        changeToBalckButton();
    }
    else if(clikedButton.value === 'yellow'){
        changeToYellowkButton();
    }
    else if(clikedButton.value === 'blue'){
        changeToBlueButton();
    }
    else if(clikedButton.value === 'reset'){
        resetAllTheButtons();
    }
    else if (clikedButton.value === 'random'){
        randomButtons()
    }
}

// change to red color buttons
function changeToRedButtons(){
    for(let i = 0; i < all_btn.length ; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-danger');
    }
}


//change to green color buttons
function changeToGreenButtons(){
    for(let i = 0; i < all_btn.length ; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-success');
    }
}

//change to balck color buttons
function changeToBalckButton(){
    for(let i = 0; i< all_btn.length; i++) {
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-dark');
    }
}

//change to yellow color buttons
function changeToYellowkButton(){
    for(let i = 0; i < all_btn.length; i++) {
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-warning');
    }
}

// change to blue buttons
function changeToBlueButton() {
    for(let i = 0; i < all_btn.length; i++) {
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-primary');
    }
}

//reset all the buttons
function resetAllTheButtons(){
    for(let i = 0; i < all_btn.length ; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(copyAllButtons[i]);
    }
}

// giving random color of all the buttons
function randomButtons(){
    for(let i = 0; i< all_btn.length; i++){
       
        let randomNumber = Math.floor(Math.random() * all_btn.length);
        
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(copyAllButtons[randomNumber]);
    }
}




