class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(this.username);
  }
  static createId() {
    return "123";
  }
}

const himanshu = new User("Himanshu");

// console.log(himanshu.createId());

class Teacher extends User {
  constructor(email, username) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("himanshu@gmail.com", "himanshu");
// console.log(iphone.createId());
