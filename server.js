// Import Express
const express = require("express");

// Create an instance of express
const app = express();

// Create a variable for the port
const port = 3000;

// Responses for 8 Ball quotes
const quotes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Create routes
// Greeting Route
app.get("/greeting/:name", (req, res) => {
  res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

// Tip Calculator Route
app.get("/tip/:total/:tipPercentage", (req, res) => {
  console.log(req.params);
  res.send(`Tip is ${req.params.tipPercentage}`);
});

// Magic 8 Ball Route
app.get("/magic/:question", (req, res) => {
  console.log(req.params);

  const idx = Math.floor(Math.random() * quotes.length);
  res.send(`<h1>Will you become a millionaire...? ${quotes[idx]}</h1>`)
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
