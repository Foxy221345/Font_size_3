function setup()
{
    console.log("inside the setup")
 video=createCapture(VIDEO);
 video.size(550,500);

 console.log("before create");

 canvas=createCanvas(550,550);
 canvas.position(560,160);

console.log("after create");

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function draw()
{
    background("#c45ab8");
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
 if(results.length>0)
 {
    console.log(results);

    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    console.log("Before difference calculation");
    difference=floor(leftWristX-rightWristX);
    console.log("Difference value is " + difference);
 }
}

function draw()
{
    background("#9172d6");
    textSize(difference);
    fill("#73c3de");
    text('Harini',50,400);
}