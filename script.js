var timer = 60;
var score = 0;
var hitrn = 0;


function changeHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 128; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTime() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(time);
        document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over<\h1>`;
    }
  }, 1000);
}

function increaseScore(){ 
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore(){
    score -= 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".panel-bottom").addEventListener("click", function(dets){
    var num = Number(dets.target.textContent);
    if(num === hitrn){
        increaseScore();
        makeBubble();
        changeHit();
    }else{
        decreaseScore();
    }
});

runTime();
makeBubble();
changeHit();
