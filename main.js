var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();
var content="";
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event) {

    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="selfie")
    {
        speak();
    }
}
function speak()
{
var synth=window.speechSynthesis;
Webcam.attach(camera);
speakdata="taking your next selfie in 5 seconds!";
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);

setTimeout(function(){
    img_id="selfie1";
    takesnapshot();
    speakdata="taking your next selfie in 10 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
},5000);

setTimeout(function(){
    img_id="selfie2";
    takesnapshot();
    speakdata="taking your next selfie in 15 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
},10000);

setTimeout(function(){
    img_id="selfie3";
    takesnapshot();
},15000);
}

function takesnapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if (img_id=="selfie1"){
            document.getElementById("img1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie2"){
            document.getElementById("img2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie3"){
            document.getElementById("img3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
Webcam.set({
    width:500,
    height:400,
    image_format:"jpeg",
    jpeg_quality:90
});