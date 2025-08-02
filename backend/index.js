const express = require('express');
const { LinkRouter } = require('./Routes/Link.js');
const { UserRouter } = require('./Routes/User.js');  


const app = express();
app.use(express.json());


app.use("/api/v1/user",UserRouter);
app.use("/api/v1/link", LinkRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});