

function speechToText(){

    var btnStart = 'Start';
    var btnStop = 'Stop';
    var btn = document.getElementById('start-stop-speech');

    // get output div reference
    var output = document.getElementById("speech-to-textarea");

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        console.log('clicked==>');
        btn.innerHTML = btnStop;
    };

    recognition.onspeechend = function() {
        btn.innerHTML = btnStart;
        recognition.stop();
        console.log('stop==>');
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = transcript;

        console.log('spoken==>',transcript);
    };

    // start recognition
    recognition.start();

}