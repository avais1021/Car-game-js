

document.addEventListener("keydown" , keyDown);
document.addEventListener("keyup" , keyUp);

function keyDown (q) {
    q.preventDefault();
    console.log(q.key)
}

function keyUp (q) {
    q.preventDefault();
    console.log(q.key)
}


// document.addEventListener("mouseenter" , mouseDown );
// document.addEventListener("mousemove" , mouseUp);

// function mouseDown () {
//     startScreen.style.color = "red";
// }
// function mouseUp(){
//     startScreen.style.color = "green";
// }