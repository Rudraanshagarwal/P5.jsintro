function preload(){

}


function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,300);
    camera=createCapture(VIDEO);
    camera.hide();
    tint_colour="";
}


function draw(){
    image(camera,0,0,400,400);
    tint(tint_colour);
}

function filter_tint(){
    tint_colour=document.getElementById("color_input").value;
}

function take_snapshot(){
    save('filter_image');
}