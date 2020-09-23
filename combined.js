'use strict';

var correctCode = 'C0d3';

for(var i = 0; i < 5; i++){
    var userCode = prompt("Please enter the initialization code for the space probe:  Hint (C0d3)");
    if (userCode === correctCode){
        alert('Initiation Sequence Commencing!')
        i = 5;
    } 
    if (userCode !== correctCode && i == 4){
        alert('You have failed to start the space probe in the alloted number of attemtps. It has entered a decaying orbit and will now burn up in the atmosphere.')
    }
}

function askUserName(){
    var userName = prompt('Please enter your name');
    if (userName == 'Simon') {
        document.write('Sir ' + userName)
    } else {
        document.write(userName)
    }
    return userName;
}

function planetQuestion(){
    var planets = prompt('How many planets are in our solar system?');
    if (planets == 8) {
        document.write('You are correct! Astronomers currently state that we have 8 planets in our solar system.')
    } else if (planets < 8) {
        document.wright('Sorry, that is incorrect. There are 8 planets in our solar system.')
    } else if (planets == 9) {
        document.write('I like how you think! I would agree, Pluto doesn\'t get the credit it desearves. Unfortunatley, experts say there are only 8.')
    } else if (planets > 9) {
        document.write('You must know about other planets that I don\'t! As far as I know there are 8.')
    } else {
        document.write('Your input is too unexpected for my space probe to comprehend!')
    }
}

function starGazeTime(){
    var today = new Date();
    var hourNow = today.getHours();
    var starTime;
    if (hourNow >= 21 || hourNow <= 6) {
        starTime = 'Now is a good time to turn off your computer, go outside, and gaze at the stars.';
        document.write(starTime);
    } else {
        starTime = 'It is too bright out currently to go star gazing, I guess you will have to stay inside and get your work done.';
        document.write(starTime);
    }
}

function marsWeight(){
    var userWeightEarth = prompt('How many pounds do you weigh on Earth?')
    if (userWeightEarth % 1 == 0){
        var userWeightMars = userWeightEarth * (0.376);
        document.write('Thank you for sharing your personal information, it it will not be sold! On Mars you would weigh ' + userWeightMars + ' pounds.')
        return userWeightEarth;
    } else {
        document.write('You have entered an incorrect value and broken my space probe. Once the probe has developed an understanding of Loops you can try again.')
    }
    
}


// Following class 8 video

// While (x > 10 || x<1){
//     x = prompt('Enter a number between 1 and 10')
// }

// for (var i = 0; i <= 12; i = i + 1) {
//     console.log('The number is: ' + 1);
// }

// var password = 'abcd';

// var correctPassword = prompt('Enter password:');

// while(correctPassword !== password) {
//     for(i = 0; i < 5; i++){
//         correctPassword = prompt('Try again, enter password: ');


//     }
// }

// for(var i = 0; i <5; i++){
//     var correctPassword = prompt('Enter password: ')
//     console.log(i);
//     if (correctPassword === password){
//         alert('You entered the correct password.')
//         i = 5; //or could use `break;`
//     }
//     if (i === 4 && correctPassword 1+ password){
//         alert('You have been locked out for 5 minutes')
//     }
// }

// while (correctPassword !== password){
//     correctPassword = prompt ('Try again.');
// }

//guess a number between 1 and 100 then give x chances to get it correct