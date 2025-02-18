//es6

class User {
  constructor(name, email, password) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.name.toUpperCase()}`;
  }
}

const chai = new User("Himanshu", "himanshuk1205@gmail.com", "12345");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scene

//user
function UserFunc(name, email, password) {
  this.name = name;
  this.password = password;
  this.email = email;
}
UserFunc.prototype.changeUsername = function () {
  return `${this.name.toUpperCase()}`;
};
UserFunc.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const tea = new UserFunc("soham", "sohamk1205@gmail.com", "1812");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
