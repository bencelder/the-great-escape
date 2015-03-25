function initialize(){
    //alert("hello!");
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    Xpos = 0;
    Ypos = 0;
    Xvel = 0;
    Yvel = 0;

    size = 20;
    move_vel = 3;


    var timer;
    clearInterval(timer);
    timer = setInterval(function(){update()}, 1);

    var audio = new Audio("Dreamscape.mp3");
    audio.play();


    clouds = new Array();
    clouds[0] = new Point(10, 10);
    clouds[1] = new Point(20, 20);

    starttime = Date.now();
    frames = 0;

    fps = 0;

}

function drawBox(x, y){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, size, size);
}

function update(){
    if (Ypos > c.height - size) Yvel = -Yvel;
    Yvel = Math.max(-5, Yvel);
    /*
    Xpos = Math.max(0, Xpos);
    Ypos = Math.max(0, Ypos);
    Xpos = Math.min(c.width  - size, Xpos);
    Ypos = Math.min(c.height - size, Ypos);
    */

    Xpos = Xpos + Xvel;
    Ypos = Ypos + Yvel;

    Yvel = Yvel + 0.005;

    draw()

    // *** compute fps *** //
    if (frames % 10 == 0){
        time = Date.now();
        fps = frames / (time - starttime) * 1000;
        fps = parseInt(fps);
    }

    if (frames % 1000 == 0){
        starttime = Date.now();
        frames = 0;
    }
    frames++;
}

function Point (x, y){
    this.x = x;
    this.y = y;
}

// needs work
function Rect(bottomleft, topright){
    this.bottomleft = bottomleft;
    this.topright = topright;
}

function collideRect(r1, r2){
    return false;
}

function draw(){
    ctx.clearRect(0, 0, c.width, c.height);
    drawBox(Xpos, Ypos);

    for (i = 0; i < clouds.length; i++){
        drawBox(clouds[i].x, clouds[i].y);
    }

    ctx.font="20px Georgia";
    ctx.fillText(fps, c.width - 40, c.height - 5);
}

function keyDown(e){
    //alert("Keycode: " + e.keyCode);
    kc = e.keyCode;
    if(kc == 37)
        Xpos = Xpos - move_vel;
    if(kc == 38)
        Ypos = Ypos - move_vel;
    if(kc == 39)
        Xpos = Xpos + move_vel;
    if(kc == 40)
        Ypos = Ypos + move_vel;
}
