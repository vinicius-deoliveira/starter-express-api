const express = require('express')
const axios = require('axios')
const bodyParser = require("body-parser")

// initialize express
const app = express()
const PORT = 3000

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.use(bodyParser.json())
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
  axios.get('https://api.callmebot.com/whatsapp.php?phone=5519988889909&text=This+is+a+test&apikey=5310882')
  .then(res => {
    console.log('Status Code:', res.status);
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
})

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))