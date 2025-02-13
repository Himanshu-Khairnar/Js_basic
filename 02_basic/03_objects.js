//singleton
// Object.create()


//obj literals
const sym = Symbol("123")
const jsUser = {
    name:"Himanshu",
    "full name":"Himanshu Khairnar",
    [sym]:"123",
    age:18,
    location:"Mumbai",
    email:"himanshu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[sym]);



// jsUser.email = "hello"
// Object.freeze(jsUser)

// jsUser.email= "himanshu"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


