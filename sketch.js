setup = function () {
    createCanvas(400, 400);
};


//defining the function used to output the stars
var drawStars = function () {
    
    fill(29, 40, 115);
    noStroke();
    rect(0, 0, 400, 150);
  /*  
    //loop used to output the stars on the horizontal row
    for (var k = 0; k < 304; k += 5) {
        image(getImage("space/star"), k * 10, 4, 41, 41);
    } 
    
    //loop used to output the stars on the left-vertical row
    for (var n = 15; n < 90; n += 30) {
         image(getImage("space/star"), 0, n * 2 +10, 41, 41);
    }
    
    //loop used to output the stars on the right-vertical row
    for (var n = 15; n < 90; n += 30) {
         image(getImage("space/star"), 349, n * 2 +10, 41, 41);
    }    
}; */

//defining variable that represents the x-position for the moving square
var xPos = 5;
//defining variable that represents the x-position for the moving circle
var kPos = 405;
//defining variable that repr(controls) the speed for the moving square 
var speed = 15;
//defining variable that represents(controls) the speed for the moving circle
var speed2 = 15;

//calling the draw function
var draw = function() {
    //establishing the background of the canvas
background(29, 40, 115);

//drawing the moon
fill(224, 215, 224);
ellipse(300, 229, 150, 150);

/*
//defining variable that stores the image of grass
var grass = getImage("cute/GrassBlock");
//defining variable that stores the image of a tree
var tree = getImage("cute/TreeUgly"); */

//defining the variable used to operate the while-loop below
var x = 0;
//loop used to output the grass
while (x < 400) {
    /*
    //outputting the grass-image
    image(grass, x, 270);
    //outputting the tree-image
    image(tree, x, 200); */
    
    x += 100;
}
    
    //defining the function used to output the stars
    drawStars();
    
    //condition for if the x-position for the moving square is greater than 400
    if (xPos > 400) {
        //decreasing speed for moving circle
        speed = -5;
    
    //condition for if the x-position for the moving square is less than 10
    } else if (xPos < 10) {
        //increasing speed for moving sqaure
        speed = 5;
    }
    
    //creating the moving square
    noStroke();
    fill(255, 255, 255);
    rect(xPos, 100, 10, 10);
    
    xPos += speed;
    
    //condition for if the x-position for the moving circle is greater than 400
    if (kPos > 400) {
        //decreasing speed for moving circle
        speed2 = -5;
    
    //condition for if the x-position for the moving circle is less than 10
    } else if (kPos < 10) {
        //increasing speed for moving circle
        speed2 = 5;
    }
    
    //creating the moving circle
    noStroke();
    fill(255, 255, 255);
    ellipse(kPos, 70, 10, 10);
    
    kPos += speed2;
};
