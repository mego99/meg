require('path');
require('http');
const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
const marked = require('marked');
const hljs = require('highlight.js');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: process.env.DB_PASS,
  database: 'megunaco',
});

const renderer = new marked.Renderer();
marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight(code) {
    return hljs.highlightAuto(code).value;
  },
});

connection.connect((err) => {
  if (err) throw err;
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(3005, '127.0.0.1', () => {});

app.get('/api/static/:folder/:file', (req, res) => {
  const options = {
    root: `${__dirname}/assets/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };

  const fileName = req.params.file;
  const folderName = req.params.folder;
  res.sendFile(`${folderName}/${fileName}`, options);
});

app.get('/api/pc/:filename', (req, res) => {
  const path = `${__dirname}/content/page-content/${req.params.filename}.txt`;
  const file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});

app.get('/api/getposts/:slug', (req, res) => {
  connection.query('select * from posts where (slug=? and status=1)', [req.params.slug], (error, results) => {
    if (error) throw error;
    if (res === []) {
      res.end(JSON.stringify([]));
    } else {
      res.end(JSON.stringify(results[0]));
    }
  });
});

app.use('/static', express.static('assets/postimages'));
