let score = 0
const target = 10

function createHeart(){

let heart = document.createElement("div")
heart.className = "heart"
heart.innerHTML = "❤️"

heart.style.left = Math.random()*100 + "vw"

heart.onclick = function(){

score++

document.getElementById("score").innerText = score + " / 10"

heart.remove()

if(score >= target){

document.getElementById("nextBtn").style.display="block"

}

}

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},4000)

}

setInterval(createHeart,800)

function nextPage(){

window.location.href="wish.html"

}