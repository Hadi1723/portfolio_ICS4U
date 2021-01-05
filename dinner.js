//establishing the background for the canvas
background(186, 145, 20); 

//creating the plate
ellipse(200, 200, 350, 350); 
ellipse(200, 200, 300, 304); 

//defining the function used to draw the chips
var drawChip = function() {
    //the two statements below define variables used to represent positions of the chips
    var i = 248; //x-position representation
    var y = 350; //y-position representation
    noStroke();
    //coloring the chips
    fill(209, 128, 23);
    
    //loop used to draw the chips
    while (i < 358 && y < 420) {
        triangle(i - 38, y - 136, i + -4, y -122, i -85, y - 62);
        
        //changing the values of "i" and "y" to ensure that each chip has a different location
        i += 28;
        y += 31;
    }
};

//calling the function that draws chips
drawChip();

//defining the function used to draw the doughnut
var drawD = function(w, x) {
    //creating the pink circle
    fill(255, 0, 106);
    stroke(181, 134, 23);
    strokeWeight(5);
    ellipse(w, x, 90, 90);
    
    //creating the inner-white circle
    fill(255, 255, 255);
    ellipse(w, x, 40, 40);
};

//calling the function that draws doughnut
drawD(235, 171);

//defining the function used to draw the pizza slice
var drawPizza = function (j) {
    noStroke();
    //creating the crust of the pizza
    fill(227, 139, 16);
    triangle(j, j + 176, j + 61, j + 102, j - 63, j + 65);
    fill(212, 171, 68);
    triangle(j - 7, j + 164, j + 48, j + 98, j - 63, j + 65);
    
    //creating the pepperoni of the pizza
    fill(255, 0, 0);
    ellipse(j - 33, j + 87, 13, 13);
    ellipse(j + 30, j + 107, 13, 13);
    ellipse(j - 5, j + 144, 13, 13);
    
};

drawPizza(124);

//defining the function used to draw the French Fries
var drawFries = function (a, b, c, d, e, f, g, h) {
    stroke(214, 207, 0);
    strokeWeight(3);
    fill(252, 210, 0);
    quad( a, 200- b, c, 200 - d, e, 200 - f, g, 200 -  h);
};

//calling the function that draws the French Fries
drawFries(218, 109, 175, 59, 164, 77, 216, 136); //right
drawFries(97, 46, 100, 108, 116, 103, 115, 24); //left
drawFries(150, 9, 136, 81, 148, 103, 167, 15);  //middle

//creating the banana
stroke(0, 0, 0);
strokeWeight(1);
rotate(-24);
translate(56, 68);
fill(250, 250, 50);
beginShape();
vertex(133,123);
bezierVertex(240,166,161,286,84,292);
bezierVertex(110,252,188,201,133,123);
endShape();









