function setup(){
    canvas=createCanvas(500,500);
canvas.position(700,150);

video=createCapture(VIDEO);
video.size(600,600);
    
posenet=ml5.poseNet(video,model_loaded);

posenet.on("pose",gotPoses);
}

function draw(){
    background("#e3e3e3");
}

function model_loaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
