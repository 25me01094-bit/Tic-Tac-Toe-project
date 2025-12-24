document.querySelectorAll(".box").forEach(hack =>{
    hack.addEventListener("click",()=>{
    hack.disabled=true;
    hack.textContent=decider();
    hack.style.opacity="0.6"
    digital();
    checkWin();
    if(check()) drawcheck();
    });
})
function decider(){
    let count=0;
    document.querySelectorAll(".box").forEach(x => {
        if (x.disabled) count++;}
    )
    if(count%2!=0) return "X";
    else return "O";
}
function disableAll() {
    document.querySelectorAll(".box").forEach(x => {
        x.disabled = true;
    });
}
const wins = [
    ["c1","c2","c3"],["c4","c5","c6"],["c7","c8","c9"], // rows
    ["c1","c4","c7"],["c2","c5","c8"],["c3","c6","c9"], // columns
    ["c1","c5","c9"],["c3","c5","c7"]          // diagonals
];

function checkWin(){
    for (let w of wins) {
        let a = document.getElementById(w[0]).textContent;
        let b = document.getElementById(w[1]).textContent;
        let c = document.getElementById(w[2]).textContent;

        if (a !== "" && a === b && b === c) {
            disableAll();
            document.getElementById(w[0]).classList.add("win");
            document.getElementById(w[1]).classList.add("win");
            document.getElementById(w[2]).classList.add("win");
            document.getElementById(w[0]).style.opacity="1";
            document.getElementById(w[1]).style.opacity="1";
            document.getElementById(w[2]).style.opacity="1";
            let m = document.getElementById("player1").value;
            let n = document.getElementById("player2").value;
            if(a=="X") document.getElementById("result").value= m+"   "+"WINS";
            else  document.getElementById("result").value= n+"   "+"WINS";
            document.querySelector(".replay").classList.add("consider");
            return;
        }
    }
}
function check(){
    let k = 0;
    document.querySelectorAll(".box").forEach(x => {
        if (!x.disabled) {
            k = 1;
        }
    });
    if (k) return false;
    else return true;
}
function drawcheck(){
    let draw = true;
    for (let w of wins) {
        let a = document.getElementById(w[0]).textContent;
        let b = document.getElementById(w[1]).textContent;
        let c = document.getElementById(w[2]).textContent;

        if (a !== "" && a === b && b === c) draw= false;
    }    
    if(draw){
    document.getElementById("result").value = "DRAW";
    document.querySelector(".replay").classList.add("consider");
    }
    else return;
}

function play(){
    if(document.getElementById("player1").value!="" && document.getElementById("player2").value!="" &&document.getElementById("player1").value!=document.getElementById("player2").value){
    document.querySelector(".game").style = "display : flex";
    document.querySelector(".board").style = "display : flex ";
    document.querySelector(".intro").style = "display : none";
    document.getElementById("result").value = document.getElementById("player1").value + "'s turn - Give 'X'";
}
    else warning();
}
document.getElementById("play").addEventListener("click",play);
function digital(){
    if (document.getElementById("result").value.includes("WINS")) return;
    else if(document.getElementById("result").value.includes(document.getElementById("player1").value)){
        document.getElementById("result").value = document.getElementById("player2").value + "'s turn - Give 'O'";
    }
    else {
        document.getElementById("result").value = document.getElementById("player1").value + "'s turn - Give 'X'";
    }
}
function restart(){
    document.querySelectorAll(".box").forEach(x=>{
        x.disabled= false;
        x.textContent = "";
        x.classList.remove("win");
        x.style.opacity="1";
    }
)
    document.getElementById("result").value="";
    document.querySelector(".replay").classList.remove("consider")
    document.querySelector(".game").style = "display : none";
    document.querySelector(".board").style = "display : none ";
    document.getElementById("player1").value="";
    document.getElementById("player2").value="";
    document.querySelector(".intro").style = "display : flex";
}
function reset(){
     document.querySelectorAll(".box").forEach(x=>{
        x.disabled= false;
        x.textContent = "";
        x.classList.remove("win");
        x.style.opacity="1";
    }
)
     document.getElementById("result").value = document.getElementById("player1").value + "'s turn - Give 'X'";
     document.querySelector(".replay").classList.remove("consider");
}
document.getElementById("restart").addEventListener("click",restart);
document.getElementById("reset").addEventListener("click",reset);
function warning(){
    document.querySelector(".popup").style.display = "flex";
    document.getElementById("play").style.display="none";
}
document.getElementById("ok").addEventListener("click",()=>{
    document.querySelector(".popup").style.display = "none";
    document.getElementById("play").style.display="block";
})