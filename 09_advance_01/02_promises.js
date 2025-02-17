const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Himanshu", email: "himanshu@gmail.com" });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) resolve({ name: "Himanshu Khairnar" });
    else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("in finally part");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) resolve({ name: "Javascript", password: "123" });
    else {
      reject("Error: something went wrong in js");
    }
  }, 2000);
});

const consumePromiseFive = async (params) => {
  try {
    const data = await promiseFive;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

const data = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Himanshu-Khairnar");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// data();

fetch("https://api.github.com/users/Himanshu-Khairnar")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
