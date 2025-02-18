function multipleBy5(num) {
  this.num = num;
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(2));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("chai", 12);
const tea = new createUser("tea", 19);

chai.printMe();
tea.printMe();
