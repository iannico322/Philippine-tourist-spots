$(window).on('load',function(){
    $(".loading").fadeOut(2000);
    
    $(".container").fadein(2000);
})

const framer = [
    {
        color:"#bc8fee",
        images:"./resources/media/img/mayon.jpg",
        text:"MAYON"
    },
    {
       color:"  #4895f3",
        images:"./resources/media/img/palawan.jpg",
        text:"palawan"
    },
    {
        color:"#b4a730",
        images:"./resources/media/img/rice.jpg",
        text:"rice terraces"
    }
]


const onec = document.querySelector('#one').classList
const twoc = document.querySelector('#two').classList
const threec = document.querySelector('#three').classList
const textc = document.querySelector('.text').classList

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const next = document.querySelector('.next')


const bodys= document.querySelector('.bodyBG')
const text = document.querySelector('.text')

i=0

console.log()
next.addEventListener('click',()=>{

   
    
    if (i==framer.length) {
        i=0

        next.style.backgroundColor = framer[i].color
        bodys.src = framer[i].images
        next.style.pointerEvents = "none"

        

        document.body.style.backgroundImage = "url('./../media/img/mayon.jpg')";
        threec.add('rotate')



        

        setTimeout(()=>{
            three.src = framer[i].images
        },50)
        setTimeout(()=>{
            
            twoc.add('rotate')
            
        },100)

        setTimeout(()=>{
            two.src = framer[i].images
        },250)
        
        
        setTimeout(()=>{
            onec.add('rotate')
    
            textc.add('up')
        },200)

        setTimeout(()=>{
            one.src = framer[i].images
            text.textContent = framer[i].text
        },250)

       

        setTimeout(()=>{
            onec.remove('rotate')
            twoc.remove('rotate')
            threec.remove('rotate')
            textc.remove('up')
            next.style.pointerEvents = "auto"

        },3000)

    
    
        
    }else{
        i=i+1
        next.style.backgroundColor = framer[i].color
        bodys.src = framer[i].images
        next.style.pointerEvents = "none"

        

        document.body.style.backgroundImage = "url('./../media/img/mayon.jpg')";
        threec.add('rotate')



        

        setTimeout(()=>{
            three.src = framer[i].images
        },50)
        setTimeout(()=>{
            
            twoc.add('rotate')
            
        },100)

        setTimeout(()=>{
            two.src = framer[i].images
        },250)
        
        
        setTimeout(()=>{
            onec.add('rotate')
    
            textc.add('up')
        },200)

        setTimeout(()=>{
            one.src = framer[i].images
            text.textContent = framer[i].text
        },250)

       

        setTimeout(()=>{
            onec.remove('rotate')
            twoc.remove('rotate')
            threec.remove('rotate')
            textc.remove('up')
            next.style.pointerEvents = "auto"

        },3000)


    }


})




