console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 1) {
        console.log("Count is less than 1");
    }
    else {
        for (let i=1; i<=count; i++) {
            if (i % 2 === 1) console.log(i + " is odd");
        }
    }
}

printOdds(10);
printOdds(19);
printOdds(0);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName="John Travolta", age=65) {
    let above16 = `${userName} can drive!!!`;
    let below16 = `Sorry, ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(below16);
    }
    else {
        console.log(above16);
    }
}

checkAge("Kelly", 20);
checkAge("Lisa", 15);
checkAge();


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesian(x,y) {

    if (x===0 && y===0){
        console.log(`${x}, ${y} is on the origin`);

    } else if (x === 0) {
            console.log (x + "," + y + " is on the x axis");
        } else if (y === 0) {
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

function triangle(a, b, c) {
    let type = "";
    if (a + b <= c || a + c <= b || b + c <= a) {
        type = "invalid";
    } else if (a === b && b === c) {
        type = "equilateral";
    } else if (a === b || a === c || b === c) {
        type = "isosceles";
    } else {
        type = "scalene";
    }
    return type;
}

console.log(`Triangle of 2, 4, 5: type is ${triangle(2, 4, 5)}`);
console.log(`Triangle of 1, 2, 2: type is ${triangle(1, 2, 2)}`);
console.log(`Triangle of 1, 1, 2: type is ${triangle(1, 1, 2)}`);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage) {
    const avgDailyPlan = planLimit / 30;
    const avgDailyActual = usage / day;
    const diff = avgDailyPlan - avgDailyActual;

    console.log(`${day} days used, ${30 - day} days remaining.`);
    console.log(`Average daily use: ${avgDailyPlan.toFixed(2)} GB/day.`);

    let phrase = "";
    if (diff > 0) phrase = "BELOW";
    else if (diff === 0) phrase = "EQUALLING";
    else phrase = "EXCEEDING";

    console.log(`You are ${phrase} your average daily use (${avgDailyActual.toFixed(2)} GB/day).`);
    if (diff < 0) {
        console.log("If you continue this high usage, you'll exceed your data plan");
        console.log(`by ${((30 - day) * avgDailyActual - planLimit + usage).toFixed(2)} GB.`);
    }
    console.log(`To stay on your data plan, use no more than ${((planLimit - usage) / (30 - day)).toFixed(2)} GB/day.`);
}

dataUsage(100, 15, 56);
dataUsage(100,15,50);
dataUsage(100, 2, 56);