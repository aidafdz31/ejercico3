const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

const Books = require('./routes/books');
const Authors = require('./routes/authors');

app.use('/books',Books);
app.use('/authors',Authors);

app.use('/*',(req,res) => {
    res.status(404).json({
        message:'Incorrect route or params',
    })
})

app.listen(port,() =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
module.exports = app;