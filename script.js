function initialize(){
    //alert("hello!");
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    Xpos = 0;
    Ypos = 0;

}

function drawBox(x, y){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 20, 20);
}

function keyDown(e){
    //alert("Keycode: " + e.keyCode);
    kc = e.keyCode;
    if(kc == 37){
        Xpos = Xpos - 1;
    }
    if(kc == 38){
        Ypos = Ypos - 1;
    }
    if(kc == 39){
        Xpos = Xpos + 1;
    }
    if(kc == 40){
        Ypos = Ypos + 1;
    }

    drawBox(Xpos, Ypos);
}
