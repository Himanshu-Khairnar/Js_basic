let myName = "himanshu      ";

console.log(myName.truelength);

let myHeros = ["superman", "batman"];

let heroPower = {
  superman: "laser",
  batman: "suit",
  getSupermanPower: function () {
    console.log(`SuperMan power are ${this.superman}`);
  },
};

Object.prototype.himanshu = function () {
  console.log(`himanshu is present in all  objects`);
};

Array.prototype.helloHimanshu = function () {
  console.log("Hello Himanshu");
};
myHeros.himanshu();
myHeros.helloHimanshu();
// heroPower.helloHimanshu();

//teacher

const User = {
  username: "himanshu",
  workingAt: "google",
};
const Teacher = {
  name: "Hitest",
};
const TeacherSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "Make js assignment",
  fullTime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = User;
//modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUserName = "ChaiAurCode    ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};
anotherUserName.truelength();
"himanshu   ".truelength()
"iceTea ".truelength()