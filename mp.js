let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let p = document.querySelector("p")
let gameseq = []
let userseq = []
let started = false
let level = 0
let arr = ["blue" , "green" , "yellow" , "red"]


document.addEventListener("click", function(){
    if(started == false){
        console.log("game is started")
        started = true
        levelup()
    }
});

function gameflash(y){
    y.classList.add("flash");
    setTimeout(function(){
        y.classList.remove("flash");
    }, 1000)
}

function userflash(x){
    x.classList.add("flash2");
    setTimeout(function(){
        x.classList.remove("flash2");
    },100) 
}

function levelup(){
    userseq = []
    level = level + 1
    h2.innerText = `Level ${level}`
    h3.innerText = ""
    let randindx = Math.floor(Math.random() * 3)
    let randcolor = arr[randindx]
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor)
    console.log(gameseq)
    gameflash(randbtn)

}

function checkans(idx){
    if (userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(function(){
                levelup()
            },1)
        }
        console.log("samevalue")
    }
    else{
        h2.innerText = "Gmae over please wait for 5 seconds for the game to start again"
        h3.innerText = `your score was ${level}`
        let mainscore = 0
        if(level > mainscore){
            mainscore = level
            p.innerHTML = `<b>Highest socre => ${mainscore}</b>`
        }
        let body = document.querySelector("body")
        body.classList.add("gameend")
        setTimeout(function(){
            body.classList.remove("gameend")
            reset()
            setTimeout(function(){
                h2.innerText = "click the white space to start the game again!"
            },1)
        },5000)
        
          
    }
}
function btnPress(){
    let btn = this 
    userflash(btn)
    usercolor = btn.getAttribute("id")
    userseq.push(usercolor)
    checkans(userseq.length-1)  
}

let allbtn = document.querySelectorAll(".div")
for(btn of allbtn){
    btn.addEventListener("click", btnPress)

}

function reset(){
    started = false;
    gameseq= []
    userseq = []
    level = 0
   

}