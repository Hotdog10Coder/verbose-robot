song1 = " ";
song2 = " ";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scorerightWrist = 0;
scoreleftWrist = 0;

songstatus1 = "";
songstatus2 = "";

function preload() {
    song1 = loadSound("Star Wars - The Imperial March (DJ AG Remix).mp3");
    song2 = loadSound("Pirates of the Caribbean  - He's a Pirate (DJ AG Remix).mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses)

}

function gotPoses(results) {
    if(results.length > 0 ) {
       console.log(results);
        leftWristX = results[0].pose.leftWrist.x 
    leftWristY = results[0].pose.leftwrist.y
    scoreleftWrist = results[0].pose.keypoints[9].score;
    songstatus1 = scoreleftWrist;
    console.log("Left Wrist X = " +leftWristX +"Left Wrist Y = " + leftWristY)

    rightWristX = results[0].pose.rightWrist.x 
   rightWristY = results[0].pose.rightWrist.y
   scorerightWrist = results[0].pose.keypoints[10].score;
songstatus2 = scorerightWrist;
    console.log("Right Wrist X = " +rightWristX +"Right Wrist Y = " + rightWristY)
    }
   }






function modelLoaded(){
    console.log("Posenet Is Initialized! :D")
}


function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000")

    if(scoreleftwrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2.stop()

        if(songstatus1 = false){
            song1.play()
            document.getElementById("song_name").innerHTML = "Song Name: Star Wars- The Imperial March(DJ AG REMIX)";
        }
    }

    
    if(scorerightwrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song1.stop()

        if(songstatus2 = false){
            song2.play()
            document.getElementById("song_name").innerHTML = "Song Name: Pirates of The Caribbean- He's a Pirate (DJ AG REMIX)";
        }
    }
}

