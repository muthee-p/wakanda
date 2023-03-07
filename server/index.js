const express = require('express')
const app = express();

app.use(express.json())

const db = require('./models')

//routers
const diseasesRouter = require('./routes/Diseases')
app.use('/Diseases', diseasesRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
    console.log('server okay');
});
});

