const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use('/upload', require('./routes/upload'));
app.use('/', require('./routes/code'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => res.render('index'));

app.listen(PORT, () => console.log(`Listining on *:${PORT}`));