var planets = prompt('How many planets are in our solar system?');

if (planets == 8) {
    document.write(userName + 'you are correct! Astronomers currently state that we have 8 planets in our solar system.')
} else if (planets < 8) {
    document.write('Sorry ' + userName +', that is incorrect. There are 8 planets in our solar system.')
} else if (planets == 9) {
    document.write('I like how you think ' + userName + ', I would agree, Pluto doesn\'t get the credit it desearves. Unfortunatley, experts say there are only 8.')
} else if (planets > 9) {
    document.write('You must know about other planets that I don\'t! As far as I know there are 8.')
} else {
    document.write('Your input is too unexpected for my space probe to comprehend!')
}