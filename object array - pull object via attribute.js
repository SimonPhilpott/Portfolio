var peopleArray = [];
var person = function(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.total = (age * 5) + height;
    peopleArray.push(this);
}
var John = new person("John", 26, 120);
var Fred = new person("Fred", 18, 180);
var Amy = new person("Amy", 21, 140);
var bigBertha = new person("Big Bertha", 29, 300);

var winningScore = 0;
var winningName;
for (var i = 0; i < peopleArray.length; i++) {
    theScores = peopleArray[i].total;
    console.log(peopleArray[i].name + ": " + peopleArray[i].total);
    if (theScores > winningScore) {
        winningScore = peopleArray[i].total;
        winningName = peopleArray[i].name;
    }
}
console.log("*Drum Roll...*")
console.log("And the winner is " + winningName + " with a score of " + winningScore);