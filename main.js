var SpeechRecognition = window.webkitSpeechRecognition;
console.log(window);
var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event)
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content
    if( (Content == "Take my selfie.")||(Content == "Take my selfie") ){
        Chatter()
    }
}

function Chatter() {
    var syn = window.speechSynthesis;
    var speakdata = "Taking your selfie in three seconds"
    var utter = new SpeechSynthesisUtterance(speakdata)
    syn.speak(utter)
    Webcam.attach('#camera');
    setTimeout(function () {
        TakePhoto();
        DownloadPic();
    }, 3000)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function TakePhoto() {
    Webcam.snap(function (Data_URI) {
        document.getElementById("result").innerHTML = '<img id="Selfie" src="' + Data_URI + '">';
    })
}

function DownloadPic() {
    var link = document.getElementById("link")
    img = document.getElementById("Selfie").src
    link.href = img
    link.click()
}