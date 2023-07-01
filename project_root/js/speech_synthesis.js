var speechSynthesis = window.speechSynthesis;

var startSpeechSynthesis = function(text) {
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        console.log('Sorry, your browser does not support speech synthesis.');
    }
};