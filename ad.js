// establishing the background of the canvas
background(136, 67, 204);

//drawing small box in the bottom-right corner
fill(109, 10, 171);
noStroke();
rect(268, 304, 159, 272);

//outputting texts inside the small box in the bottom-right corner
fill(255, 255, 255);
textSize(25);
text("Dairy Milk!", 277, 339);

textSize(20);
text("Melt with Joy!", 276, 387);


//defining function used to draw the ice creams
var icecreamDraw = function (x, y, z, Z) {
    //drawing the cone of a ice cream
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(219, 117, 21);
    triangle(x, Z, y, Z, z, 284);
    
    //defining variable to store text that can be used in all conditions below
    textSize(22);
    var hw = "Help ";
    
    //conditon for if the value of the first parameter for this function is less than 100
    if (x < 100) {
        //outputting unique text for red ice cream
        fill(255, 0, 77);
        stroke(128, 44, 70);
        strokeWeight(2);
        text( hw + "Stimulates the Brain!", 7, 319);
        
    //conditon for if the value of the first parameter for this function is between 100 and 200
    } else if (x > 100 && x < 200) {
        //outputting unique text for green ice cream
        fill(30, 224, 16);
        strokeWeight(2);
        stroke(31, 252, 90);
        text( hw + "You Smile!", 11, 352);
    }
    
    //conditon for if the value of the first parameter for this function is greater than 200
    else {
        //outputting unique text for the white ice cream
        fill(247, 247, 247);
        strokeWeight(2);
        stroke(242, 239, 239);
        text( hw + "Gain Nutrients!", 11, 385);
    }
    //drawing the actual ice cream
    arc(z, Z + 1, 106, -150, 1, 180);
    
};

//defining variable used to control animation
var x = 0;

//calling the draw function
draw = function() {
    //outputting the text on the top of the canvas
    noStroke();
    fill(136, 67, 204);
    rect(0, 0, 400, 113);
    fill(255, 255, 255);
    textSize(49);
    text("Ice Cream!", 96, 41);
    
    //condition for if "x" is between 100 and 300
    if (x > 100 && x < 200) {
        //calling function used to draw the ice creams
        icecreamDraw(20, 120, 70, 187);
    
    //condition for if "x" is between 200 and 300   
    } else if (x > 200 && x < 300) {
        //calling function used to draw the ice creams
        icecreamDraw(140, 240, 190, 187);
    
    //condition for if "x" is between 300 and 410
    } else if (x > 300 && x < 410) {
        //calling function used to draw the ice creams
        icecreamDraw(260, 360, 310, 187);
    
    //condition for if "x" is greater than 410   
    } else if (x > 410) {
        //outputting text below the text "Ice Cream"
        fill(232, 152, 60);
        textSize(30);
        text("BUY NOW!!", 120, 92);
    }
    //animating the image from Khan Academy
    image(getImage("avatars/mr-pink-green"), x, 40, 80, 68);
    x += 1;
};
