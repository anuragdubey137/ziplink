const express = require('express');
const { LinkRouter } = require('./Routes/Link.js');
//const UserRouter = require('./routes/user');  

const app = express();

// app.route("/api/v1/user",UserRouter);
app.route("/api/v1/link", LinkRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});