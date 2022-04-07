function init(){
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PpfA20hPT/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("r").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("c").innerHTML = 'Accuracy - '+
        (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("r").style.color = "rgb("
        + red + "," + green + "," + blue + ")";
        document.getElementById("c").style.color = "rgb("
        + red + "," + green + "," + blue + ")";

        a = document.getElementById("cow");
        b = document.getElementById("dino");
        c = document.getElementById("cat");
        d = document.getElementById("doge");

        if(results[0].label == "Mooing"){
            a.src = 'cow-run.gif';
            b.src = 'dino.png';
            c.src = 'cat.png';
            d.src = 'dog.png';
        } else if (results[0].label == "Roaring"){
            a.src = 'cow.png';
            b.src = 'cute-baby-dino.gif';
            c.src = 'cat.png';
            d.src = 'dog.png';
        } else if (results[0].label == "Purring"){
            a.src = 'cow.png';
            b.src = 'dino.png';
            c.src = 'cutecatgif.gif';
            d.src = 'dog.png';
        } else if (results[0].label == "Barking"){
            a.src = 'cow.png';
            b.src = 'dino.png';
            c.src = 'cat.png';
            d.src = 'dog.gif';
        } else {
            a.src = 'cow-run.gif';
            b.src = 'cute-baby-dino.gif';
            c.src = 'cutecatgif.gif';
            d.src = 'doge.gif';
        }
    }
}