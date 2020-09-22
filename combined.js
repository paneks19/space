'use strict';

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