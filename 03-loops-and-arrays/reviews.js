var reivews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reivews.length; i++) {
    console.log(reivews[i]);
    total += reivews[i];
}
var average = total / reivews.length;
console.log("Review average = " + average);
