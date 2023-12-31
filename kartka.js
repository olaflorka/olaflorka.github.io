

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tlo.jpg")
loadSprite("balwan","balwan.png")
loadSound("muzyka","Przybiezeli.mp3")

add([
    sprite("kartka")
])
const balwan = add([
    sprite("balwan"),
    pos(150,400)

])

onMouseRelease(()=>play("muzyka"))

let wprawo = true

balwan.onUpdate(() => {

    if(wprawo && balwan.pos.x < 600)
    balwan.pos.x += 1

    else if(!wprawo && balwan.pos.x > 50)
    balwan.pos.x -= 1

    else wprawo ^= true
})