const accountId = 123445
let accountEmail = "himanshuk1205@gmail.com"
var accountPassword = "12345"
accountCity = "Vasai"
let accountState;
// accountId = 1 not allowed
console.log(accountId);

accountEmail = "hello@gmail.com"
accountPassword = "1234"
accountCity = "Palghar"

/*
dont use var 
because of issue in block and functional scope
*/

console.table([accountEmail,accountPassword,accountId,accountCity,accountState])