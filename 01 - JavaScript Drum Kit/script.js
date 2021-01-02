

// document.querySelector('#aButton').addEventListener('keydown', beatBox)

// grab DOM for all keys
// let soundA = document.querySelector('#aButton').play()



const mainKeyboard =document.querySelector("#keyBoard")
const buttonPressed = document.querySelectorAll('.key')
const firstAudio = document.querySelectorAll('audio')[0]
// const buttonPressedA = document.querySelector('#aButton')
mainKeyboard.addEventListener('keydown',beatBox)


function beatBox (button) {
if(button.key === 'a') {
        buttonPressed[0].classList.add('playing')
        // buttonPressedA.classList.toggle('playing')
        firstAudio.play()
        mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
            buttonPressed[0].classList.remove('playing')
            
        })
    console.log(button.key)
} else if (button.key === 's') {
        document.querySelectorAll('audio')[1].play()
    console.log(button.key)
} else if (button.key === 'd') {
    document.querySelectorAll('audio')[2].play()
 console.log(button.key)
} else if (button.key === 'f') {
    document.querySelectorAll('audio')[3].play()
 console.log(button.key)

} else if (button.key === 'g') {
    document.querySelectorAll('audio')[4].play()
 console.log(button.key)

} else if (button.key === 'h') {
    document.querySelectorAll('audio')[5].play()
 console.log(button.key)

} else if (button.key === 'j') {
    document.querySelectorAll('audio')[6].play()
 console.log(button.key)

} else if (button.key === 'k') {
    document.querySelectorAll('audio')[7].play()
 console.log(button.key)

} else if (button.key === 'l') {
    document.querySelectorAll('audio')[8].play()
 console.log(button.key)



}


}



















