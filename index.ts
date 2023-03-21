import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Express App is listening on port ${PORT}`);
});
