import express from 'express';
import mongoose from 'mongoose';
import router from './Router';
import bodyParser from 'body-parser';
const Mongo= "mongodb+srv://Ananiya:root-ananiya@test-project.phuhwqq.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 2000;

mongoose.Promise=Promise;
mongoose.connect(Mongo);
mongoose.connection.on('error',((error:Error)=>console.log(error)));
app.use(bodyParser.json());
app.use('/',router());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
