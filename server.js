// Import Express
const express = require('express');

// Create an instance of express
const app = express();

// Create a variable for the port
const port = 3000;

// Create routes
app.get('/greeting/:name', (req, res) => {
    const greeting =
    res.send(`<h1>Hello, ${req.params.name}!</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    res.send(`Tip is ${req.params.tipPercentage}`)
})


// Listen to the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})