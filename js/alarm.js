var x = document.getElementById("alarmSound");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

function alarmFunction() {
    $('#alarmModal').modal('toggle');
    playAudio();
}