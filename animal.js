//creating variables that animates the bear
var x = 195; //x-position
var y = 133; //y-position
var faceSize = 167; //face size

//defining function that draws bear
var bear = function() {
    noStroke();

    // drawing ears
    var earSize=faceSize*1/2;
    fill(89, 52, 17);
    ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize); //left ear
    ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize); //right ear

    //body
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(163, 113, 5);
    ellipse(x + 0, y + 148, faceSize + 10, faceSize + 10);
    
    // face
    fill(163, 113, 5);
    ellipse(x, y, faceSize, faceSize);

    //eyes 
    var face = faceSize /8;
    fill(0, 0, 0);
    ellipse(x - faceSize / 5, y - 33, face, face); //left eye
    ellipse(x + faceSize/5, y - 33, face, face); //right eye

    //nose
    fill(89, 52, 20);
    ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

    //feet
    
    //left foot
    pushMatrix();
    stroke(255, 0, 0);
    rotate(-14);
    translate(-96, 29);
    ellipse(x - 59, y + 213, earSize - 10, earSize + 20);
    popMatrix();

    //right foot
    pushMatrix();
    stroke(255, 0, 0);
    rotate(12);
    translate(73, -54);
    ellipse(x + 59, y + 213, earSize - 10, earSize + 20);
    popMatrix();
    
    //arms
    stroke(0, 0, 0);
    var h = 108;
    line(x - 58, y + 113, x - 162, h +25); //left arm
    line(x + 58, y + 113, x + 162, h + 25); //right arm

};

//calling function that draws the bear
bear();
