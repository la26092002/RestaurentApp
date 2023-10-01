const express = require('express');
const cors = require('cors')

const connectDB = require('./config/db');

const app = express();

connectDB()

app.use(express.json());
app.use(cors())

// Init Middleware
app.use(express.json({extended:false}))

app.get('/',(req, res) => res.send('API RUNNING'))

//Define Routes
app.use('/api/data', require('./routes/api/data'));
app.use('/api/resto', require('./routes/api/restoAuth'));
app.use('/api/resto/employer', require('./routes/api/employer'));
app.use('/api/resto/commande', require('./routes/api/commande'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));