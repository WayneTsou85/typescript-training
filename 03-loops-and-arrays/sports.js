var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log("-------------------");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var element = sports_1[_i];
    if (element == 'Cricket') {
        console.log("What's Cricket?!!");
    }
    console.log(element);
}
