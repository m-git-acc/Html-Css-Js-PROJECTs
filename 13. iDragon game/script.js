score = 0;
cross = true;

audio = new Audio("./music.mp3")
audiogo = new Audio("./gameover.mp3");

setTimeout(()=>{
    audio.play();
},1000);

document.onkeydown = function(e){
    cond_dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    if(e.keyCode==38){
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");

        setTimeout(()=>{
            dino.classList.remove("animateDino");
        },1500)
    }
    if(e.keyCode==39  && cond_dx<=(1400)){
        dino = document.querySelector(".dino");
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx+60)+"px";
    }
    if(e.keyCode==37 && cond_dx>=(-104)){
        dino = document.querySelector(".dino");
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx-60)+"px";
    }

}

const myInterval = setInterval(()=>{
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX<150 && offsetY<52){
        clearInterval(myInterval);
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove("obstacleAni");
        audiogo.play();
        audio.pause();
        setTimeout(()=>{
            audiogo.pause();
        },1000)
    }
    else if(offsetY>100 && offsetX<100 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross = true;
        },1000);

        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        },1000);   
    }

},0);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score
}