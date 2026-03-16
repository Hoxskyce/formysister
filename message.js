const title = document.getElementById("title")

const text = "Surprise Untuk Kamu 🎉"

let i = 0

function type(){

if(i < text.length){

title.innerHTML += text.charAt(i)

i++

setTimeout(type,100)

}

}

type()

const canvas = document.getElementById("confetti")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let confetti = []

for(let i=0;i<40;i++){

confetti.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*4+2,
speed:Math.random()*1.5+0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

confetti.forEach(p=>{

ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`

ctx.fillRect(p.x,p.y,p.size,p.size)

p.y += p.speed

if(p.y > canvas.height) p.y = 0

})

requestAnimationFrame(animate)

}

animate()