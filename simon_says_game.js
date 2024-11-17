let gameseq = [];
let userseq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if (started == false) {
        console.log("key is pressed");
        started = true;

        levelUp();
    }
});

function btnflash (btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  } , 250);
};

function levelUp () {
  userseq = [];
    level++;
  h2.innerText = `level ${level}`;

  let randidx = Math.floor(Math.random() * 3);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);
 
  gameseq.push(randcolor);
  console.log(gameseq);
  btnflash(randbtn);
};

function btnpress () {
 let btn = this;
 btnflash(btn);

 usercolor = btn.getAttribute("id");
 userseq.push(usercolor);

 checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function checkans (idx) {


if(userseq[idx] === gameseq[idx]) {
  if(userseq.length == gameseq.length) {
   setTimeout(levelUp(), 1000);
  }
} else {
  h2.innerHTML = `Game over! Your Score was <b> ${level} </b> <br> Press any key to start`;
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white";
  },150);
  reset();
}
};



function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}