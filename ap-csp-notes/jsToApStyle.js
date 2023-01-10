function start(){
	var people = readInt("Num people: ");
	var peoplePerGroup = readInt("People per group: ");
	var groups = Math.floor(people / peoplePerGroup);
	var peopleLeft = people % peoplePerGroup;
	
	println("There are " + groups + " groups " + 
		"with " + peopleLeft + " left over.");
}

/*
people <- INPUT("Num people: ")
peoplePerGroup <- INPUT("People per group: ")
groups <- people / peoplePerGroup
peopleLeft <- people % peoplePerGroup
	
DISPLAY("There are " + groups + " groups " + "with " + peopleLeft + " left over.")
*/
// --------------------------------------------------------------

var DOLLARS_TO_POUNDS = 0.6462;

function start(){
	println("This program converts USD to GBP.");
	var dollars = readFloat("USD: ");
	var pounds = dollars * DOLLARS_TO_POUNDS;
	
	println("GBP: " + pounds);
}

/*
DOLLARS_TO_POUNDS <- 0.6462

DISPLAY("This program converts USD to GBP.")
dollars <- readFloat("USD: ");
pounds <- dollars * DOLLARS_TO_POUNDS;
	
DISPLAY("GBP: " + pounds)
}
*/
// --------------------------------------------------------------

function start(){
	var age = readInt("What is your age? ");
	var oldEnough = age >= 18;
	println("Can vote: " + oldEnough);
}

/*
age <- INPUT("What is your age? ")
oldEnough <- age >= 18
DISPLAY("Can vote: " + oldEnough)
*/
// --------------------------------------------------------------

var MAX = 1000, i=1,j=1,nextTerm=i+j;

function start(){
    println(i);
    println(j);
    
	while (nextTerm<=MAX) {
        println(nextTerm);
        
        i = j;
        j = nextTerm;
        nextTerm = i + j;
	}
}

/*
MAX <- 1000
i <- 1
j <- 1
nextTerm <- i+j

DISPLAY(i)
DISPLAY(j)

REPEAT UNTIL(nextTerm>MAX)
{
	i <- j
	j <- nextTerm
	nextTerm <- i + j
}
*/
// --------------------------------------------------------------

function start(){
	var arr = [7, 4, 14, 8, 3, 9];
	println(arr);
	arr.pop();
	println(arr);
	
	var elem = arr.remove(2);
	println(arr);
	
	println("We removed: " + elem);
}

/*
arr <- [7, 4, 14, 8, 3, 9]
DISPLAY(arr)
REMOVE(arr, LENGTH(arr))
DISPLAY(arr)

elem <- arr[3]
REMOVE(arr, 3)
DISPLAY(arr)

DISPLAY("We removed: " + elem)
*/