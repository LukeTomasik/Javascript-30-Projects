/*
1. Need to create some "logic" in order to make the second hand move EACH second
    60seconds = 1 min
    setInterval(x,1000)
2. need to create some "logic" in order to make the minute hand Move for every 60 seconds
    if/ else statement
    based off some sort of counter minuteCounter = 0 ~ add 1 to it
3. Need to create some "logic" in order to make the hour hand move for every 60 minutes
    if/ else statement
    based off some sort of counter minuteCounter = 0 ~ add 1 to it

*/

// Storing clock Variables
let secondHand = document.querySelector('.second-hand')
let minuteHand = document.querySelector('.min-hand')
let hourHand = document.querySelector('.hour-hand')

let secondsCounter = 60
let minuteCounter = 0
let hourCounter = 0

window.onload = () => {
    //call mainClock() to begin clock
    mainClock()
}

mainClock = () => {
   if (secondsCounter == 60) {
    setInterval(getSeconds, 1000)
   } 

}

// Each seconds, getseconds decrements by 1 starting from 60
function getSeconds () {
    if (secondsCounter == 60) {
        secondsCounter = 0
        getMinutes()
        // console.log(secondsCounter)
    } else {
        secondsCounter++
        secondHand.style.transform = `rotate(${secondsCounter*6}deg)`
        // console.log(secondsCounter)
    }
}

//  Each 60secon cycle of seconds, increment the minute counter by 1 
function getMinutes () {
            if (minuteCounter == 60) {
                minuteCounter = 0
                // console.log(`has been reset: ${minuteCounter} min`)
            } else {
                minuteCounter++
                hourCounter++
                getHours()
                minuteHand.style.transform = `rotate(${minuteCounter*6}deg)`
                console.log(`${minuteCounter} working`)
            }

        }

//OG
        // function getMinutes () {
        //     if (minuteCounter == 60) {
        //         minuteCounter = 0
        //         getHours()
        //         // console.log(`has been reset: ${minuteCounter} min`)
        //     } else {
        //         minuteCounter++
        //         minuteHand.style.transform = `rotate(${minuteCounter*6}deg)`
        //         console.log(`${minuteCounter} working`)
        //     }

        // }

// want hour hand to go from 0 to 360deg 1 minute at a time 0.5
// 0.5 * by minute untill you get to 60 minutes


function getHours () {
        if (hourCounter == 720) {
            hourCounter = 0
            // console.log(`has been reset: ${hourCounter} hour`)
        } else {
            hourCounter++
            console.log(hourCounter + " is this correct?")
            console.log(minuteCounter )
            hourHand.style.transform = `rotate(${hourCounter *.5}deg)`
            // console.log(`this is the hour:${hourCounter} `)
        }
    }



//OG
            // Each 60 minute cycle = 1 hr, increment the hour by 1

            // function getHours () {
            //     if (hourCounter == 12) {
            //         hourCounter = 0
            //         // console.log(`has been reset: ${hourCounter} hour`)
            //     } else {
            //         hourCounter++
            //         console.log(minuteCounter )
            //         hourHand.style.transform = `rotate(${hourCounter *30}deg)`
            //         // console.log(`this is the hour:${hourCounter} `)
            //     }
            // }
