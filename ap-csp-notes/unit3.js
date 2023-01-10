// API
/* = application programming interface
= a set of functions and procedures allowing the creation of applications that access 
the features or data of an operating system, application, or other service.
*/

/*
built in Karel functions like move() and turnLeft() are an API.
because we can make Karel perform certain actions and then Karel responds to our commands.
*/





// basic user input
var name = readLine("What is your name? ");
var age = readInt("What is your age? ");
var finishedWork = readBoolean("Is your work done? ");

// how to print vars with string
println("statement " + name);






// Randomizers
// (low,high) => include high
Randomizer.nextInt(low, high);
Randomizer.nextBoolean();
Randomizer.nextFloat(low, high);
Randomizer.nextColor();






// graphics
// To get the type of the object
var type = obj.getType();

// circle
var circle = new Circle(50);
circle.setPosition(100, 200);
circle.setRadius(100);
circle.setColor("red");
add(circle);
/*
rect for rectangles

remove(circle) => Remove from screen
circle.move(dx, dy) => Move the circle dx horizontally and dy vertically
 */

// text
var txt = new Text(label, font);
txt.setPosition(x, y);
txt.setColor("blue");
add(txt);





// mouseclick events
function start(){
	mouseClickMethod(drawCircle);
}

function drawCircle(e){
	var circle = new Circle(20);
	circle.setPosition(e.getX(), e.getY());
	add(circle);
}
/*with random colors*/
function start(){
    mouseClickMethod(drawRect);
}

function drawRect(e){
	var rect = new Rectangle(200, 50);
    rect.setPosition(e.getX(), e.getY());
    var color=Randomizer.nextColor();
    rect.setColor(color);
	add(rect);
}





// key events
/*move u r d l*/
var square;

function start(){
	square = new Rectangle(40, 40);
	square.setPosition(100, 100);
	add(square);
	keyDownMethod(keyDown);
}

function keyDown(e){
	if(e.keyCode == Keyboard.LEFT){
		square.move(-5, 0);
	}
	
	if(e.keyCode == Keyboard.RIGHT){
		square.move(5, 0);
	}
	
	if(e.keyCode == Keyboard.letter('K')){
		square.move(0, -5);
	}
	
	if(e.keyCode == Keyboard.letter('J')){
		square.move(0, 5);
	}
}
/*size change*/
var radius = 40;
var ball = new Circle(radius);

function start(){
	ball.setPosition(100, 100);
	ball.setColor("blue");
	add(ball);
	
	keyDownMethod(keyDown);
}

function keyDown(e) {
    if (e.keyCode == Keyboard.letter('L')) {
        radius+=10;
        ball.setRadius(radius);
    } else if (e.keyCode == Keyboard.letter('S')){
        radius-=10;
        ball.setRadius(radius);
    }
}





// logical operators
function start(){
	var atLeastThirtyFive = readBoolean("Are you at least thirty five years old? ");
	var isUSCitizen = readBoolean("Are you a US Citizen? ");
	var canBePresident = atLeastThirtyFive && isUSCitizen;
	println("Can be president: " + canBePresident);
}   // can shorten code by using this, not long if statements

/*
"Determine whether the following expression would evaluate to true or false.
7 = 6 OR 8 ≥ 4"

ans: 7 = 6 OR 8 ≥ 4
     false OR true
     true
*/

/* important
(a OR b) AND NOT (c OR d)
 = (a OR b) AND (NOT c) AND (NOT d) 
!= (a OR b) AND ((NOT c) OR (NOT d)) <<<< important
*/

/* important
NOT (rainy OR tooCold) = ( NOT rainy) AND (NOT tooCold)
                      != ( NOT rainy) OR (NOT tooCold)
*/




// while statements
/*
"Which initial value of number would cause an infinite loop?

REPEAT UNTIL(number = 0)
{
  number ← number - 1
}"

ans: Any negative integer.
Since the number is decremented in each iteration, if the number in initialized as a negative number, it will never equal 0.
*/

/*
"Consider the following program, which is intended to print the sum of all the positive integers up to number.

sum ← 0
REPEAT number TIMES
{
    sum ← sum + number
}
DISPLAY sum

Which of the following best describes the behavior of this program?"

ans: The program does not work as intended but rather it displays the number squared.
Since the DISPLAY command is outside of the loop, only the last result of sum is displayed.
(number != i, number doesnt change)  <<<<< important
*/




// Karel
/*avenue: width
street: height*/





// array
// Add to an array
arr.push(elem);

// Remove last element from array
var last = arr.pop();

// Finding the index of an element in a list & string
var index = arr.indexOf(5);

// Remove an element from a list at index i
arr.remove(i)

/*
"aList ← ["dog", false, "bird"] 
Which of the following will throw an error?
I. aList[0]
II. aList[2]
III. aList[3]
IV. aList[4]"

ans: I and IV
in ap style, index starts from 1 <<<<< important
 */

