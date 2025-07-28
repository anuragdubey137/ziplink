import express from 'express';
import { UserRouter } from './Routes.js/User';
import { LinkRouter } from './Routes.js/Link';


const app = express();

app.route("/api/v1/user",UserRouter);
app.route("/api/v1/link", LinkRouter);

UserRouter.listen(3000, () => {
  console.log('Server is running on port 3000');
});