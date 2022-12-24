
var thebutton = document.getElementById("thebutton");
var audio = new Audio('scream.mp3');

thebutton.addEventListener("click", function(){
    var bunny = document.createElement("img");
    bunny.src = "cutebunny.jpeg";
    bunny.setAttribute("id", "bunnypicture")
    var image = document.getElementById("bunny");
    
    image.appendChild(bunny);

    setTimeout(function (){
        bunny.src = "witch.jpeg",
        audio.play()
        console.log("boo!")
    }, 5000);    
});
