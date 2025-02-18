class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}himanshu`;
  }
  set password(value) {
    this._password = value;
  }
}

const himanshu = new User("himanshu@gmail.com", "abv");
console.log(himanshu.password);
console.log(himanshu.email);

function Userf(email, password) {
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const use = new Userf("himanshu@gmail.com", "chai");

console.log(use.email);

const UserO = {
  _email: "himanshu@gmail.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
const rea = Object.create(UserO);
console.log(rea.email);
