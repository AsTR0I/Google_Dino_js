const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
let score = 0
document.addEventListener("keydown", function(event){
    jump()
})

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(()=> {
        dino.classList.remove("jump")
    },200)
}

let isAlive = setInterval( ()=>{
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft == 0 ){
        score+=1
        console.log(cactusLeft)
        document.getElementById("score").innerHTML = score
    }

    if (cactusLeft < 65 && cactusLeft > 0 && dinoTop >= 140){
        alert("GAME OVER")
    }

})