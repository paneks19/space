var today = new Date();
var hourNow = today.getHours();
var starTime;

if (hourNow >= 21) {
    starTime = 'Now is a good time to turn off your computer, go outside, and gaze at the stars.';
    document.write(starTime);
} else if (hourNow <= 6) {
    starTime = 'Now is a good time to turn off your computer, go outside, and gaze at the stars.';
    document.write(starTime);
} else {
    starTime = 'It is too bright out currently to go star gazing, I guess you will have to stay inside and get your work done.';
    document.write(starTime);
}