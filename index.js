var buttons = document.querySelectorAll(".drum");      // ALTERNATIVE LOOP
var sounds = [
            "sounds/tom-1.mp3", 
            "sounds/tom-2.mp3", 
            "sounds/tom-3.mp3", 
            "sounds/tom-4.mp3", 
            "sounds/snare.mp3", 
            "sounds/crash.mp3", 
            "sounds/kick-bass.mp3"
            ];

for (var i = 0; i < buttons.length; i++) {              // for (var btn of buttons)
    
   
    buttons[i].addEventListener("click", function () {  // btn.addEventListener("click", function ()
        /*
         for (var a = 0; a < buttons.length; a++) {
            var letter = buttons[a].innerHTML
            if (this.innerHTML === letter) {
                var audio = new Audio(sounds[a]);
                audio.play();
            }
        }
        */
        var buttonInnerHTML = this.innerHTML;

        makeSaund(buttonInnerHTML);

    });    
}

document.addEventListener("keydown", function(event) {
    makeSaund(event.key)
})

function makeSaund(key) {

     // Switch function
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
}