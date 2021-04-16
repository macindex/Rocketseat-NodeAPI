const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// req - paramentros de requisição

// app.get('/', (req, res) =>{
//     res.send('')
// });

require('./controllers/authController')(app);

app.listen(3000);

