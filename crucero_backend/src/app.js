require('./database/sync');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const crucerorouter = require('./routers/cruceroRouter');
const usuariorouter = require('./routers/usuarioRouter');
const camaroterouter = require('./routers/camaroteRouter');
const reservarouter = require('./routers/reservaRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('The application is running on port ' + port); 
});

app.use('/api', crucerorouter);
app.use('/api', usuariorouter);
app.use('/api', camaroterouter);
app.use('/api', reservarouter);