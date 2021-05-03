const card=document.querySelector('.card')
const container=document.querySelector('.container')

const title=document.querySelector('.title')
const sneaker=document.querySelector('.hi')


container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/25
    let yAxis=(window.innerHeight/2-e.pageY)/25
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})


//animate in
container.addEventListener('mouseenter',e=>{
    card.style.transition='none'
    title.style.transform="translateZ(200px)"
    sneaker.style.transform=`translateZ(250px) rotateZ(-40deg)`
})
//animate out
container.addEventListener('mouseleave',e=>{
    card.style.transition="all 0.5s ease"
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform="translateZ(0px)"
    sneaker.style.transform=`translateZ(0px) rotateZ(0deg)`
})