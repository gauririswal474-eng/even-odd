// Check if a number is even or odd

// Four different variables with static values
const number1 = 5;
const number2 = 10;
const number3 = 7;
const number4 = 12;

const numbers = [number1, number2, number3, number4];
const resultsList = document.getElementById("results");

for (const num of numbers) {
  let message;
  let type;

  // if-else statement to determine even or odd
  if (num % 2 === 0) {
    message = `The number ${num} is even.`;
    type = "even";
  } else {
    message = `The number ${num} is odd.`;
    type = "odd";
  }

  // Display the result in the console and on the page
  console.log(message);

  const item = document.createElement("li");
  item.textContent = message;
  item.className = type;
  resultsList.appendChild(item);
}
