function Button() {
  const name = "Submit";
  let value = 1;
  function changeName() {
    // handler

    // name = "Send";
    value = 100;
  }

  changeName();

  //   console.log(value);

  return "done";
}

Button();

let otherNumbers = [
  [[0, 1], 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

// console.log(otherNumbers[0]); // masih mengembalikan array
// console.log(otherNumbers[0][1]); // 2
// console.log(otherNumbers[0][0][1]); // 1

let numbers = [1, 2, 3, 4];

numbers.push(0);
numbers.unshift(6);

// console.log(numbers);

// const counter = {
//   val: 0,
//   increment() {
//     this.val += 1;
//   },
// };

// console.log(counter);
// counter.increment();
// console.log(counter);

// console.log(this);

const sumArrow = (a, b) => a + b; // implicit return
const thisArrow = () => this;
const thisFunction = function () {
  return this;
};

this.value = 1;

// console.log(this);
// console.log(thisArrow()); // var
// console.log(thisFunction()); // let

class Participant {
  constructor(name) {
    this.name = name;
  }
}

// console.log(new Participant("Oki"));
// console.log(new Participant("Oki").name);

const oki = new Participant("Oki");
const ika = new Participant("Ika");

// console.log({
//   oki,
//   ika,
// });

const classroom = {
  participants: ["Pieter", "Esra", "Agung", "Alwi"],
  session: 47,
  name: "FSD OCBC Batch 2",
};

const { name, participants, session } = classroom;

const [a, b, c, d] = participants;

console.log(a, b, c, d);
// console.log(`
// Halo ${name}!
// Kita masuk ke dalam sesi ${session}
// Ada beberapa peserta: ${participants.join(", ")}
// `);

function getClassroom() {
  return {
    participants: ["Pieter", "Esra", "Agung", "Alwi"],
    session: 47,
    name: "FSD OCBC Batch 2",
  };
}

const {
  name: className,
  participants: classParticipants,
  session: classSession,
} = getClassroom();

// console.log(`
// Halo ${className}!
// Kita masuk ke dalam sesi ${classSession}
// Ada beberapa peserta: ${classParticipants.join(", ")}
// `);

const [anto, budi] = ["Budi", "Anto"];

// console.log(budi, anto);
