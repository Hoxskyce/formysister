function next(){

window.location.href="message.html"

}

const canvas = document.getElementById("confetti")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let confetti=[]

for(let i=0;i<60;i++){

confetti.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="pink"

confetti.forEach(c=>{

ctx.beginPath()
ctx.arc(c.x,c.y,c.r,0,Math.PI*2)
ctx.fill()

c.y+=1.5

if(c.y>canvas.height) c.y=0

})

requestAnimationFrame(draw)

}

draw()