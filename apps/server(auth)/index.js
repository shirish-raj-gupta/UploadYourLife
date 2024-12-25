const express = require('express');

const PORT = 8080;
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({ 'status': true })
});



app.listen(PORT, () => {
    console.log('Server Is Starting On Port ', PORT);
})