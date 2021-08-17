const balloon = document.getElementById('airballoon')
const cloudOne= document.getElementById('cloud-One')
const cloudTwo= document.getElementById('cloud-Two')
const cloudThree= document.getElementById('cloud-Three')
const cloudFour= document.getElementById('cloud-Four')
const cloudFive= document.getElementById('cloud-Five')
const cotton_Candy = document.getElementById('cottonCandy')
const lolliPop = document.getElementById('lollipop')
const cupCake =document.getElementById('cupcake')


const balloonYFromBotton = 10
balloon.style.bottom = balloonYFromBotton +'%'

function move(){
    //console.log('i have scrolled') - Counts the number of scrolls on the page
   const incrementer = window.scrollY
   // console.log(incrementer)
   balloon.style.bottom = balloonYFromBotton +incrementer * 0.1 +'%'
    //balloon.style.bottom = 10 + incrementer * 0.1 + '%'
                      //starts at 10 - height from bottom value
     cloudOne.style.bottom = 40 + incrementer *0.12 +'%'
     cloudOne.style.left = 75 + incrementer *0.1 +'%'
     cloudTwo.style.bottom = 80 + incrementer *0.12 +'%'
     cloudTwo.style.left = 70 + incrementer *0.1 +'%'
     cloudThree.style.bottom = 60 + incrementer *0.12 +'%'
     cloudThree.style.left = 0 + incrementer * -0.12 +'%'
     cloudFour.style.bottom = 70 + incrementer *0.16 +'%'
     cloudFour.style.left = 20 + incrementer * -0.15 +'%'
     cloudFive.style.bottom = 60 + incrementer *0.2 +'%'
     cloudFive.style.left = 60 + incrementer *0.16 +'%'

     lolliPop.style.left = 20 + incrementer * -0.9 + '%'
     cotton_Candy.style.left=26 +incrementer*-0.8+'%'
     cupCake.style.left=32 +incrementer *-0.7+'%'
}

window.addEventListener('scroll', move)