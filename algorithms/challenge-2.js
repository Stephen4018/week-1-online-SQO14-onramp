function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    console.log("fizzbuzz");
  } else if (input % 3 === 0) {
    console.log("fizz");
  } else if (input % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(input);
  }
}
fizzBuzz(7);

module.exports = fizzBuzz;
