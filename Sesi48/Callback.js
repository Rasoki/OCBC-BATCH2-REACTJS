// // function myDisplayer(some) {
// //   document.getElementById("demo").innerHTML = some;
// // }

const { default: axios } = require("axios");

// // function myCalculator(num1, num2) {
// //   let sum = num1 + num2;
// //   return sum;
// // }

// // let result = myCalculator(5, 5);
// // myDisplayer(result);

// // function myDisplayer(some) {
// //   document.getElementById("demo").innerHTML = some;
// // }

// // function myCalculator(num1, num2, myCallback) {
// //   let sum = num1 + num2;
// //   myCallback(sum);
// // }

// // myCalculator(5, 5, myDisplayer);

// function display(value) {
//   console.log(value);
// }

// function calculator(number1, number2, callback) {
//   console.log(callback);
//   const result = number1 + number2;
//   callback(result);
// }

// const displayVar = function (value) {
//   console.log(value);
// };

// // calculator(10, 15, function () {});
// calculator(10, 15, displayVar);

// // console.log(display);

// calculator(10, 15, function (value) {
//   console.log(value);
// });

// promise

// function ambilData() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// ambilData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(ambilData());
// console.log(buatjanji("adakan kelas akhir tahun"));

function buatjanji(message) {
  return new Promise((resolve, reject) => {
    if (message === "") return reject("Isi janji harus diisi");

    return resolve(`berhasil ditepati: ${message}`);
  });
}

buatjanji("Kelas akhir tahun")
  .then((result) => {
    console.log(result);

    return buatjanji("Kelas awal tahun -- React");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // menangkap error/reject()
    console.log(error);
  });
