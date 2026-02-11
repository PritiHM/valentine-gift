const noBtn=document.getElementById("noBtn")
const msg=document.getElementById("noMessage")

let attempt=0

const messages=[
"Please don't do this 🥺",
"Think again… are you sure? 😏",
"Come on… you know it's YES 💖",
"Why are you even trying 😭",
]

noBtn.addEventListener("mouseenter",handleNo)
noBtn.addEventListener("click",handleNo)

function handleNo(){
attempt++
document.body.appendChild(noBtn)
const btnWidth=noBtn.offsetWidth
const btnHeight=noBtn.offsetHeight
const padding=20
const maxX=window.innerWidth-btnWidth-padding
const maxY=window.innerHeight-btnHeight-padding
const randomX=padding+Math.random()*maxX
const randomY=padding+Math.random()*maxY
noBtn.style.position="fixed"
noBtn.style.left=randomX+"px"
noBtn.style.top=randomY+"px"
noBtn.style.zIndex="99999"
noBtn.style.transition="0.15s ease"
if(attempt<=messages.length){
msg.innerText=messages[attempt-1]
}else{
msg.innerText="Okay okay 😅 I know you love me... Just press YES already ❤️"
}
}

function startLove(){
const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")
const yesMsg=document.getElementById("yesMessage")
const noMsg=document.getElementById("noMessage")
noMsg.innerText=""
yesBtn.style.display="none"
noBtn.style.display="none"
yesMsg.innerText="I knew it 😌❤️ You just made my day!"
setTimeout(()=>{
yesMsg.innerText=""
const song=document.getElementById("loveSong")
song.volume=0.6
song.play().catch(()=>{})
song.onended=()=>{
stopSlideshow()
showFinalLove()
}
showGifts()
},2000)
}

function showGifts(){
questionCard.classList.add("hidden")
giftSection.classList.remove("hidden")
}

function openGift(n){
[1,2,3].forEach(i=>{
document.getElementById("gift"+i).classList.add("hidden")
})
stopSlideshow()
document.getElementById("gift"+n).classList.remove("hidden")
if(n===1)loadQuestion()
if(n===2)startTyping()
if(n===3)startSlideshow()
}

const quiz=[
{q:"Who loves more in this relationship?",o:["Me ❤️","You ❤️","Both 😍","Can't decide 😅"]},
{q:"Who says sorry first?",o:["Me","You","Depends","Both"]},
{q:"Will you always be mine?",o:["YES ❤️","Forever ♾️","Always","Of course 💍"]}
]

let qi=0

function loadQuestion(){
quizQuestion.innerText=quiz[qi].q
quizOptions.innerHTML=""
quiz[qi].o.forEach(ans=>{
const b=document.createElement("button")
b.innerText=ans
b.className="bg-white px-4 py-1.5 rounded-full text-xs font-semibold w-[150px]"
b.onclick=()=>{
qi++
qi<quiz.length?loadQuestion():
quizOptions.innerHTML=`<p class="text-center font-semibold text-sm mt-4">
Option dhundhne ki zarurat nahi 😌<br>
<span class="text-lg">You will always be <b>only mine</b> ❤️</span></p>`
}
quizOptions.appendChild(b)
})
}

const letter=`We fight,
we argue,
we don’t always understand each other…

But at the end of every day,
we still come back to each other.

Maybe our love isn’t perfect,
but it’s real.

And I wouldn’t trade that for anything ❤️`

let li=0

function startTyping(){
loveLetter.innerHTML=""
li=0
;(function type(){
loveLetter.innerHTML+=letter.charAt(li++)
if(li<letter.length){
setTimeout(type,60)
}
})()
}

let imgIndex=1
let imgTimer=null

function startSlideshow(){
stopSlideshow()
imgTimer=setInterval(()=>{
const img=document.getElementById("memoryImg")
if(!img)return
imgIndex++
if(imgIndex>22)imgIndex=1
img.src=`image/img${imgIndex}.jpeg`
},3000)
}

function stopSlideshow(){
if(imgTimer){
clearInterval(imgTimer)
imgTimer=null
}
}

function showFinalLove(){
finalLove.classList.remove("hidden")
}

setInterval(()=>{
const h=document.createElement("div")
h.innerHTML="❤️"
h.className="heart"
h.style.left=Math.random()*window.innerWidth+"px"
h.style.animationDuration=(3+Math.random()*2)+"s"
document.body.appendChild(h)
setTimeout(()=>{
h.remove()
},5000)
},350)
