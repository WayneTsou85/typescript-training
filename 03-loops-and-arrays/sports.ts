let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log("-------------------")

for (let element of sports) {
    if (element == 'Cricket') {
        console.log("What's Cricket?!!");
    }
    console.log(element);
}