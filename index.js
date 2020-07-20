
var player = document.getElementById("character");

var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

function up() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    player.style.top = playerTop - 10 + "px";
}

function down() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));  
    player.style.top = playerTop + 10 + "px";
}

function left() {
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    player.style.left = playerLeft + 10 + "px";
}

function right() {
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    player.style.left = playerLeft - 10 + "px";
}
document.body.onkeydown = function(e){
    if(e.keyCode == 87){
        up();
    }

    if(e.keyCode == 83){
        down();
    }
    
    if(e.keyCode == 68){
        left();
    }

    if(e.keyCode == 65){
        right();
    }
}




/*
document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    player.style.left = x + 'px';
})
*/
