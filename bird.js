let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext('2d');
let score = 0;
let bg = document.createElement('img');
bg.src = 'bg.png';
let bird = document.createElement('img');
bird.src = 'bird.png';
let x = 50;
let y = 250;
let se = 5;
let g = 0.3; 
let pipeBottom = document.createElement('img');
pipeBottom.src = 'pipeBottom.png';
let pipeUp = document.createElement('img');
pipeUp.src = 'pipeUp.png';
pipes_x = [cvs.width, cvs.width + 150];
pipes_y = [0, -80];
let gap = 100;
let floor = document.createElement('img');
floor.src = 'floor.jpg';
document.addEventListener('click', function(){
    se = 3;

})
function draw (){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(floor,0,400);
    for (i = 0; i< pipes_x.length; i++){
    ctx.drawImage(pipeUp,pipes_x[i],pipes_y[i]);
    ctx.drawImage(pipeBottom,pipes_x[i],pipes_y[i] + gap + pipeUp.height);
    pipes_x[i] = pipes_x[i] - 2;
    if (pipes_x[i] == 50){
        score ++;
        pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
            pipes_y.push((Math.floor(Math.random() * pipeUp.height) - pipeUp.height)* 0.5);
    }
    if (x + bird.width >= pipes_x[i] && x <= pipes_x[i] +pipeUp.width && (y <= pipes_y[i] + pipeUp.height || y + bird.height >= pipes_y[i] + pipeUp.height + gap || y + bird.height >= cvs.height - floor.height)){
        pipes_x = [cvs.width];
        pipes_y = [0];
        x = 50;
        y = 250;
        se = 5; 
        score = 0;
    }
    }
    y = y - se;
    se = se - g;
    ctx.drawImage(bird,x,y);
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('score: '+score, 20 , 450);
    window.requestAnimationFrame(draw);
}
draw();

