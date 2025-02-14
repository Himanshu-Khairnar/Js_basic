//IIFE
(function connect() {
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected ${name}`);
})("Himanshu");
