

const score = document.querySelector(".score");
const mobScore = document.querySelector(".mob");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");


startScreen.addEventListener("click" , start)

// let player = { speed: 9 };
let player = { speed: 5 , score:0 };
let mpoints = {mscore:0};

// -----------------
let keys = {  
    ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
 


function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
    // console.log(keys);
}

function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
    // console.log(e.key)
    // console.log(keys);
}

// -----------car touch ----

function isCollide(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    return !( (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || 
    (aRect.right < bRect.left) || (aRect.left > bRect.right) )

}

function endGame(){
    player.start = false;
    startScreen.classList.remove("hide");
    startScreen.innerHTML = "Game Over <br> Your final score is " +player.score+ " Press here to restart the Game.  ";

}

const mediaQuery = window.matchMedia('(max-width: 767.9px)')
if (mediaQuery.matches) {
    // alert(1234)
    function endGame(){
     player.start = false;
     startScreen.classList.remove("hide");
     startScreen.innerHTML = "Game Over <br> Your final score is " + mpoints.mscore + " Press here to restart the Game.  ";
    }
}

// -----------

function movelines() {
    let lines = document.querySelectorAll(".lines");

    lines.forEach(function(item) {

        if(item.y >= 700){
            item.y -= 750;
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}


function moveEnemyCar(car) {
    let enemy = document.querySelectorAll(".enemy");

    enemy.forEach(function(item){

        
        if (isCollide(car, item)){
        //    console.log("Crash");
           endGame();
        }

        if(item.y >= 700){
            item.y = -250;
            item.style.left = Math.floor(Math.random() * 289  ) + "px" ;

        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}


// ------------
function gamePlay(){
    // console.log("hiiiiiiii") ;

    let car = document.querySelector(".car");
    let road = gameArea.getBoundingClientRect();
    // console.log(road);

    movelines();
    moveEnemyCar(car);

    if (player.start){ 

        if(keys.ArrowUp && player.y > 140) {player.y -= player.speed}
        if(keys.ArrowDown && player.y < (road.height - 135)) {player.y += player.speed}
        if(keys.ArrowLeft && player.x > 0) {player.x -= player.speed}
        if(keys.ArrowRight && player.x < (road.width - 60) ) {player.x += player.speed}

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay); 
        // console.log(player.score++);
        player.score++;
        score.innerHTML= "Score <br>" + player.score++;
        mpoints.mscore++;
        mobScore.innerHTML = "Score <br>" + mpoints.mscore++;
        console.log(mpoints.mscore++);
        

    }
}

// ------------

function start(){

    // gameArea.classList.remove("hide");
    startScreen.classList.add("hide");
    gameArea.innerHTML= "";
    // gameArea.innerHTML= `<div class="score mob">Score ${mpoints.mscore++}</div>`;

    player.start = true;
    player.score = 0;
    mpoints.mscore = 0;
    // yourScore.score = 0;
    window.requestAnimationFrame(gamePlay);

    for(  x = 0 ; x < 5 ; x++) {
        let roadLine = document.createElement('div');
        roadLine.setAttribute("class" , "lines");
        roadLine.y = (x * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);
        // console.log(roadLine);

    }


    let car = document.createElement("div");
    car.setAttribute("class", "car");
    // car.innerHTML = "Hey i am your car";
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop; 

    // console.log(car.offsetLeft);
    // console.log(car.offsetTop);

    for (x=0 ; x<3 ; x++) {
        let enemycar = document.createElement('div');
        enemycar.setAttribute("class" , "enemy");
        // enemycar.y = (x*230);
        enemycar.y = ((x+1) * 350) * -1;  
        enemycar.style.top = enemycar.y + "px";
        enemycar.style.left = Math.floor(Math.random() * 289  ) + "px" ;
        // enemycar.style.left = Math.floor(Math.random() < (road.right) ) ;
        gameArea.appendChild(enemycar);
        // console.log(enemycar);
    }

}


// day 3 ka 9 minute chalega 

// car on road top view 