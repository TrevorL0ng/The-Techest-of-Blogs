// Pulling in all required modules
const path = require('path');
const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require(connect-session-sequelize);

const app = express();
const PORT = process.env.PORT || 3003;


