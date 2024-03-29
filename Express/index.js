const express = require('express');
const router = require('./routes/index');
// const bodyParser = require('body-parser');
const app = express();
const connect = require('./config/db');

connect();
const port = process.env.PORT || 3000

// app.use(bodyParser.json());
app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// })

app.listen(port, console.log(`Server is running on port ${port}`))