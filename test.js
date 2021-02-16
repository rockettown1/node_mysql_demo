const { promisify } = require("util");

const myFunction = (something, callback) => {
  if (something == true) {
    callback("", "Success");
  } else {
    callback("Rejected", "");
  }
};

// myFunction(false, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

const promisifiedMyFunction = promisify(myFunction);

const runFunc = async () => {
  try {
    const response = await promisifiedMyFunction(false);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

runFunc();
