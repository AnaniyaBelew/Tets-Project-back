import express from 'express';
import mongoose from 'mongoose';
const Mongo= "mongodb+srv://Ananiya:root-ananiya@test-project.phuhwqq.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 2000;

mongoose.Promise=Promise;
mongoose.connect(Mongo);
mongoose.connection.on('error',((error:Error)=>console.log(error)));

app.get('/', (req, res) => {
  res.send('Hello This Is Test Project For Full stack developer position at Addis Software ');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
