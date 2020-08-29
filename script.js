score = -1;
cross = true;
audio = new Audio('music.mp3');
audiogo= new Audio('gameover.mpeg');
 setTimeout(() => {
           audio.play();
        }, 1000);

document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 1000);
        /*this time is in milli seconds*/
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
       dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= dinoX + 112+"px";
    }
     if(e.keyCode==37){
        dino = document.querySelector('.dino');
       dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= (dinoX - 112)+"px";
    }
}
setInterval(() => {
         dino = document.querySelector('.dino');
         gameOver = document.querySelector('.gameOver');
         obstacle =  document.querySelector('.obstacle');
    //x axis k hisaab se current left value dx se milygi
         dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
         dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
         ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
         oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx-ox); //absolute value
        offsetY = Math.abs(dy-oy);
    
   // console.log(offsetX , offsetY);
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML= "Game Over - Reload to start over";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
         setTimeout(() => {
           audiogo.pause();
           audio.pause();
        }, 1000);
    }
    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross= false;
        setTimeout(() => {
           cross = true;
        }, 1000);
         setTimeout(() => {
           cross = true;
        }, 500);
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.05;
        obstacle.style.animationDuration = newDur + 's';
    }
        }, 100);


function updateScore(score){
    scoreCont.innerHTML = 'Your Score: ' + score;
}