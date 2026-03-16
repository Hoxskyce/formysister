let score = 0
let time = 20

const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")
const gameArea = document.getElementById("gameArea")
const nextBtn = document.getElementById("nextBtn")

function spawnHeart(){

let heart = document.createElement("div")

heart.className = "heart"

heart.innerHTML = "💖"

heart.style.left = Math.random()*90 + "%"

gameArea.appendChild(heart)

heart.onclick = ()=>{

score++

scoreEl.innerText = score

heart.remove()

if(score >= 10){

nextBtn.classList.remove("hidden")

}

}

setTimeout(()=>{

heart.remove()

},3000)

}

setInterval(spawnHeart,800)

let timer = setInterval(()=>{

time--

timeEl.innerText = time

if(time <= 0){

clearInterval(timer)

alert("Coba lagi")

location.reload()

}

},1000)

nextBtn.onclick = ()=>{

window.location.href = "wish.html"

}