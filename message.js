const text = `Selamat ulang tahun kak 🎉

Hari ini mungkin hanya satu hari dari sekian banyak hari yang sudah Kak lewati, tapi buat iki hari ini terasa spesial. Karena hari ini adalah hari di mana seseorang yang sangat berarti di hidup iki dilahirkan.
Terima kasih sudah selalu ada. Terima kasih sudah menjadi kakak yang sabar, yang sering membantu, yang kadang diam-diam menjaga tanpa banyak bicara. Mungkin iki jarang mengatakannya secara langsung, tapi sebenarnya iki sangat bersyukur punya kakak seperti Kak.
Semoga di umur yang baru ini, semua hal baik datang menghampiri Kak. Semoga langkah Kak selalu dipermudah, rezeki Kak dilancarkan, dan hati Kak selalu dipenuhi kebahagiaan.
Dan kalau suatu hari Kak merasa lelah atau dunia terasa berat, ingat saja… Kak tidak sendirian. Iki selalu ada di sini..`

let i=0

function type(){

if(i < text.length){

document.getElementById("text").innerHTML += text.charAt(i)

i++

setTimeout(type,40)

}

}

type()


const music=document.getElementById("music")
const btn=document.getElementById("musicBtn")

btn.onclick=()=>{

if(music.paused){

music.play()
btn.innerText="Pause Music"

}else{

music.pause()
btn.innerText="Play Music"

}

}


const canvas=document.getElementById("confetti")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let confetti=[]

for(let i=0;i<80;i++){

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

c.y+=2

if(c.y>canvas.height) c.y=0

})

requestAnimationFrame(draw)

}

draw()