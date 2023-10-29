// Generate a random color
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// START Functionality
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor , 1000);
    }

    function changeBgColor(){
       document.body.style.backgroundColor = randomColor();
    }

};

document.querySelector("#start").
addEventListener("click", startChangingColor)

// STOP Functionality
const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null; 
    /* 
    used this to fix the edgecase of pressting start button many times and when user do
    this stop button wont work. to avoide this what we did is after clearing Interval we set the variable
    intervalId to null. it dereference this problem and in start we made a check that if there is no
    value/null in intervalId then start button executes the bg changer function. 
    */       
};

document.querySelector("#stop").
addEventListener("click", stopChangingColor);