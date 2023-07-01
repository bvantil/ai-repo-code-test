const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log('Voice recognition started. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
    console.log('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
        console.log('No speech was detected. Try again.');  
    }
}

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if(!mobileRepeatBug) {
        handleUserInput(transcript);
    }
};

function startSpeechRecognition() {
    recognition.start();
}

export { startSpeechRecognition };