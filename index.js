'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 4567;
app.use('/', express.static('./static'));

app.listen(port);
