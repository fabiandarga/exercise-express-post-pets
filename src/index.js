import express from 'express';
import { addPet, getPet } from './database';

const port = 4000;
const app = express();

// Server config


// Server start
app.listen(port, () => {
    console.log('Server is running http://localhost:'+port);
});
