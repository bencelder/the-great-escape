function initialize(){
    //alert("hello!");
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    Xpos = 0;
    Ypos = 0;
    size = 20;

    vel = 5;

    var timer;
    clearInterval(timer);
    timer = setInterval(function(){update()}, 33);

}

function drawBox(x, y){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, size, size);
}

function update(){
    Xpos = Math.max(0, Xpos);
    Ypos = Math.max(0, Ypos);
    Xpos = Math.min(c.width  - size, Xpos);
    Ypos = Math.min(c.height - size, Ypos);
    ctx.clearRect(0, 0, c.width, c.height);
    drawBox(Xpos, Ypos);
    //Ypos++;
}

function keyDown(e){
    //alert("Keycode: " + e.keyCode);
    kc = e.keyCode;
    if(kc == 37){
        Xpos = Xpos - vel;
    }
    if(kc == 38){
        Ypos = Ypos - vel;
    }
    if(kc == 39){
        Xpos = Xpos + vel;
    }
    if(kc == 40){
        Ypos = Ypos + vel;
    }
}
