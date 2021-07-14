tintColor="";
function preload(){

}

function setup() {
    canvas=createCanvas(400,400);
    canvas.position(600,200);
    video=createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,400,400)
    tint(tintColor)
}

function Filter(){
    tintColor=document.getElementById("color_name").value;

}

function take_snapshot(){
    save('download.png')
}