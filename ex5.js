
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const getRemainingDays = (daysPast, totalDays) => {
    return totalDays - daysPast;
};

const printRemainingDays = (days, cycleLength) => {
    console.log(`${days} days used, ${getRemainingDays(days, cycleLength)}`);
};

const getAvg = (total, length) => {
    return getDisplayNumber(total/length);
}

/* const getProjectedAvg = (planLimit, length) => {
    return planLimit / length;
} */

const printSuggestAvg = (planLimit, length) => {
    console.log(`Suggested daily use ${getAvg(planLimit, length)} GB/day`);
}

const getDisplayNumber = (num, decimalPlace) => {
    return parseFloat(num.toFixed(decimalPlace));
}



const getUsageFeedback = (planLimit, days, usage) => {
    const cycleLength = 30;
    const projectedAvg = getAvg(planLimit, cycleLength);
    const currentAvg = getAvg(usage,days);
    const projectedUsage = currentAvg * cycleLength;
    const adjustedAvg = getAvg((planLimit - usage), (cycleLength - days));
    
    printRemainingDays(days, cycleLength);
    printSuggestAvg(planLimit, cycleLength);

    output = "";
    
    if (currentAvg > projectedAvg) {
        output += `You are EXCEEEDING your averave daily use (${currentAvg} GB/day),
        continuing this high usage, you'll exceed your data plan by ${projectedUsage - planLimit}. To stay below your data plan, use no more than ${adjustedAvg} GB/day`;

    } else if (currentAvg < projectedAvg) {
        output += `You are UNDER your average daily use (${currentAvg} GB/day), continuing this low usage, you'll lose out on ${Math.abs(projectedUsage - planLimit)} GB`;
    } else {
        output += 'Your are AT your average daily use (${currentAvg} GB/day'; 
    }

    console.log(output);

}

getUsageFeedback(100, 15, 59);
