const express = require('express'),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express();

app.use(express.static('client'));
app.use(express.static('client/assets'));
app.use(express.static('client/partials'));
app.use(express.static('bower_components'));
app.use(bodyParser.json());

require('./server/config/db');
require('./server/config/routes')(app);

app.listen(port, () => {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Server is up. Listening on port ${port}`);            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
});
