// const buttonOne = document.getElementById("btn-one-blue")
// const buttonTwo = document.getElementById("btn-two-green")
// const buttonThree = document.getElementById("btn-three-red")
// const buttonFour = document.getElementById("btn-four-cyan")
// const resetColor = document.querySelector(".color-switch");
const buttons = document.querySelectorAll(".btn"); // Node list of button elements
const bodyColor = document.querySelector("body");



buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(e.target.id === "lightblue") {
            bodyColor.style.backgroundColor = e.target.id;
            // console.log(bodyColor.style.backgroundColor = e.target.id)
            // button.style.color - "white"
        }

        if(e.target.id === "lightgreen") {
            bodyColor.style.backgroundColor = e.target.id;
            // button.style.color - "white"
        }
        if(e.target.id === "orangered") {
            bodyColor.style.backgroundColor = e.target.id;
            // button.style.color - "white"
        }
        if(e.target.id === "cyan") {
            bodyColor.style.backgroundColor = e.target.id;
            // button.style.color - "white"
        }
    })

})



// resetColor.addEventListener("click", function(){
//     bodyColor.style.backgroundColor = "white";
//     buttonOne.style.color ="lightblue"
//     buttonTwo.style.color ="lightgreen"
//     buttonThree.style.color ="orangered"
//     buttonFour.style.color ="cyan"

// })