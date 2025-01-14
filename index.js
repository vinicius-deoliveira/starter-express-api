const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser");

// initialize express
const app = express();
const PORT = 3000;

// app.use(bodyParser.json())
app.all('/', (req, res) => {
  // console.log(req.body) // Call your action on the request here
  axios.get('https://api.callmebot.com/whatsapp.php?phone=5519988889909&text=is+a+test&apikey=5310882')
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
  console.log('Axios Pass');
  res.status(200).end(); // Responding is important
  // .then(res => {
  //   console.log('Status Code:', res.status);
  // })
  // .catch(err => {
  //   console.log('Error: ', err.message);
  // });
})

// Start express on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));