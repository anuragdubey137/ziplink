const express = require('express');
const { LinkRouter } = require('./Routes/Link.js');
const { UserRouter } = require('./Routes/User.js');  
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/link", LinkRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});