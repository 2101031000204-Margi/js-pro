var score = 0;
var hitrn = 0;
var rn = 0;
function makeBubble() {
    var clutter = "";
    
    for (let i = 1; i <= 168; i++) {
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#p-btm").innerHTML = clutter;
}

function timerChng() {
    var timer = 60;
    var timerRng = setInterval(function () {
        if (timer>0) {
            timer--;
            document.getElementById("time").textContent = timer;            
        }
        else{
            clearInterval(timerRng);
            document.querySelector("#p-btm").innerHTML = "";
            alert("Your ran out of time");
        }
    },1000);

}

function hit() {
   hitrn = Math.floor(Math.random()*10);
   document.getElementById("hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.getElementById("scoreval").textContent = score;
}
document.querySelector("#p-btm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        dets.target.innerHTML = "";
        // makeBubble();
        hit();
    }
    else {
        alert("GameOver");
    }
})
makeBubble();
timerChng();
hit();