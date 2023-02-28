let reivews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;
for (let i = 0; i < reivews.length; i++) {
    console.log(reivews[i]);
    total += reivews[i];
}

let average: number = total / reivews.length;
console.log("Review average = " + average);