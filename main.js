var speechrecognition= window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML= Content;
    talk();

}
function talk(){
    var synth = window.speechSynthesis;
    speak_data= document.getElementById("textbox").value;
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    Webcam.attach(camera);
}
camera= document.getElementById("cam");
Webcam.set({
    width: 360,
    height: 250,
    image_format:"jpg",
    jpg_quality: 100
});