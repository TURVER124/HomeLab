const express = require("express");
const path = require('path');

const app = express();
const PORT = 8888;

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});