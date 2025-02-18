// const user = {
//   username: "himanshu",
//   loginCount: 9,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log("got user details");
//     console.log(`username ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;
  this.greeting = function(){
    console.log(this.username);

    
  }

}

const userOne = new User("Himanshu Khairnar", 10, true);
const userTwo = new User("Khairnar", 1, false);


console.log(userOne.constructor);
//  