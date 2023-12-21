let random = Math.floor(Math.random()*3);
let con = document.querySelectorAll(".button , .Line");
let computer = document.querySelectorAll(".button");
console.log(computer);
let user = document.querySelector("#t1");
let machine = document.querySelector("#t2");
let youwin = document.querySelector("#youwin");
let youloose = document.querySelector("#youloose");
let tie = document.querySelector("#Tie");
let nextbt = document.querySelector("#Next");
let playAgain = document.querySelector("#PA");
let Replay = document.querySelector("#Replay");
let myscore = document.querySelector(".scorep");
let cpscore = document.querySelector(".scorec");
let ScoreOfPC = localStorage.getItem("CPSCORE")||0;
let ScoreOfUser = localStorage.getItem("MYSCORE")||0;
cpscore.innerText = ScoreOfPC;
myscore.innerText = ScoreOfUser;


con.forEach((element,index) => {
    element.addEventListener("click", () =>{
        con.forEach(item =>{
            item.style.display = "none";
        });
        console.log(element);
        user.style.display = "block";
        element.style.display="block";
        element.classList.add("show");
      

        setTimeout(() => {
            setTimeout(() => {
            machine.style.display = "block";
            computer[random].style.display = "block";
            console.log(computer[random]);
            computer[random].classList.add("right");
          });

          if(index ==0 && random == 1 || index == 1 && random == 2 || index == 2 && random == 0){
            youwin.style.display = "flex";
            playAgain.style.display = "flex";
            nextbt.style.display = "flex";
            ScoreOfUser++;
            localStorage.setItem("MYSCORE", ScoreOfUser);
            myscore.innerText = ScoreOfUser;
            console.log(myscore);
          }

          else if(index == 0 && random == 0 || index == 1 && random == 1 || index == 2 && random == 2){
            tie.style.display = "flex";
            Replay.style.display = "flex";    
            con.style.display = "block";
            computer[random].style.display = "block";
          }
          else{
            youloose.style.display = "flex";
            playAgain.style.display = "flex";
            ScoreOfPC++;
            localStorage.setItem("CPSCORE", ScoreOfPC);
            console.log("CPscore: ", ScoreOfPC);
            cpscore.innerText = ScoreOfPC;
            console.log(cpscore);
          }
        },1000)
      }, 1000) 
      
    });


    playAgain.addEventListener("click", () => {
      window.location.reload();
    });
    Replay.addEventListener("click", () => {
      window.location.reload();
    })

let rule = document.querySelector("#Rule");
let desc = document.querySelector("#Description");
let cross = document.querySelector("#cross");

rule.addEventListener("click", () => {
  desc.style.display = "flex";
  cross.style.display = "flex";
})

cross.addEventListener("click", () => {
  window.location.reload();
})
