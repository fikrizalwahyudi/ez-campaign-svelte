import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

const express = require("express");
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const cors = require('cors');
const NodeFetch = require('node-fetch')
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
const client = redis.createClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


app.use(compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
).listen(PORT, err => {
	if (err) console.log('error', err);
});
