

// document.querySelector('#aButton').addEventListener('keydown', beatBox)

// grab DOM for all keys
// let soundA = document.querySelector('#aButton').play()



const mainKeyboard =document.querySelector("#keyBoard")
const buttonPressed = document.querySelectorAll('.key')
const firstAudio = document.querySelectorAll('audio')
// const buttonPressedA = document.querySelector('#aButton')
mainKeyboard.addEventListener('keydown',beatBox)


function beatBox (button) {
if(button.key === 'a') {
        buttonPressed[0].classList.add('playing')
        firstAudio[0].currentTime = 0
        firstAudio[0].play()
        mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
            buttonPressed[0].classList.remove('playing')
            
        })
    
} else if (button.key === 's') {
    buttonPressed[1].classList.add('playing')
    firstAudio[1].currentTime = 0
    firstAudio[1].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[1].classList.remove('playing')
        
    })
    
} else if (button.key === 'd') {
    buttonPressed[2].classList.add('playing')
    firstAudio[2].currentTime = 0
    firstAudio[2].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[2].classList.remove('playing')
        
    })
    
} else if (button.key === 'f') {
    buttonPressed[3].classList.add('playing')
    firstAudio[3].currentTime = 0
    firstAudio[3].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[3].classList.remove('playing')
        
    })
    
} else if (button.key === 'g') {
    buttonPressed[4].classList.add('playing')
    firstAudio[4].currentTime = 0
    firstAudio[4].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[4].classList.remove('playing')
        
    })
    

} else if (button.key === 'h') {
    buttonPressed[5].classList.add('playing')
    firstAudio[5].currentTime = 0
    firstAudio[5].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[5].classList.remove('playing')
        
    })
    

} else if (button.key === 'j') {
    buttonPressed[6].classList.add('playing')
    firstAudio[6].currentTime = 0
    firstAudio[6].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[6].classList.remove('playing')
        
    })
    
} else if (button.key === 'k') {
    buttonPressed[7].classList.add('playing')
    firstAudio[7].currentTime = 0
    firstAudio[7].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[7].classList.remove('playing')
        
    })
    
} else if (button.key === 'l') {
    buttonPressed[8].classList.add('playing')
    firstAudio[8].currentTime = 0
    firstAudio[8].play()
    mainKeyboard.addEventListener('keyup', stopPlaying = () =>  {
        buttonPressed[8].classList.remove('playing')
        
    })
    

}


}















