console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 1) {
        alert("Count is less than 1");
    }
    else {
        for (let i=1; i<=count; i++) {
            if (i % 2 == 1) {
                console.log(i + " is odd");
            }
        }
    }
}

printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
    let above16 = "You can drive!";
    let below16 = "Sorry, but you need to wait until you're 16.";

    if (age < 16) {
        console.log(below16);
    }
    else {
        console.log(above16);
    }
}

checkAge(20);

// Exercise 2 Bonus Section
console.log("EXERCISE 2: BONUS \n==========\n");

function checkAgeBonus(name, age) {
    age = prompt("How old are you?");

    let above16 = "You can drive!";
    let below16 = "Sorry, but you need to wait until you're 16.";

    if (age < 16) {
        console.log(below16);
    }
    else {
        console.log(above16);
    }
}

checkAgeBonus();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesian(x,y) {

    if (x==0 && y==0){
        console.log(`${x}, ${y} is on the origin`);

    } else if (x == 0) {
            console.log (x + "," + y + " is on the x axis");
        } else if (y == 0) {
                console.log (x + "," + y + " is on the y axis");
            }
    

    if (x >0 && y >0) {
        console.log (x + "," + y + " is in quadrant 1");
    }

    if (x <0 && y >0) {
        console.log (x + "," + y + " is in quadrant 2");
    }

    if (x <0 && y <0) {
        console.log (x + "," + y + " is in quadrant 3");
    }

    if (x >0 && y <0) {
        console.log (x + "," + y + " is in quadrant 4");
    }

}

    cartesian(0,0);
    cartesian(0,1);
    cartesian(1,0);
    cartesian(-2,-20);
    cartesian(-2,20);
    cartesian(2, 20);
    cartesian(2, -20);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

var type;

function triangle(a,b,c) {
    
    if(a + b <= c && a + c >= b && b + c >= a) {
        type = "invalid";
    } else if (a == b && b == c) {
        type = "equilateral";
    } else if (a == b || a == c || b == c) {
        type = "isosceles";
    } else {
        type = "scalene";
    }
}

triangle(2,4,5);
console.log(`Triangle type is ${type}`);

