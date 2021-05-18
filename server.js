import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(express.json());

// Mongoose connection
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => {
    console.log('Database connected!');
});

// ROUTER
import routes from './routes/root.js';
app.use('/', routes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
