 const message = "Thank you for your interest. We will respond as soon as we can!";

 document
 .getElementById("contactForm")
 .addEventListener("submit", function(event){
     event.preventDefault();
     alert(message);
 });


 function bigImg(id) {
    var img = document.getElementById(id);
    img.height = 240;
    img.width = 240;
}

document.getElementById("king").onmouseover = function() {
    bigImg("king")
};

document.getElementById("princess").onmouseover = function() {
    bigImg("princess")
};

document.getElementById("queen").onmouseover = function() {
    bigImg("queen")
};


function smallImg(id) {
    var img = document.getElementById(id);
    img.height = 200;
    img.width = 200;
}

document.getElementById("king").onmouseout = function() {
    smallImg("king")
};

document.getElementById("princess").onmouseout = function() {
    smallImg("princess")
};

document.getElementById("queen").onmouseout = function() {
    smallImg("queen")
};


