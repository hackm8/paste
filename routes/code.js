const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ posts: [] })
  .write()


router.get('/c/:id', async (req, res) => {
    let id = req.params.id;
    let {code} = db.get('posts')
        .find({id: id})
        .value();
    res.render('index', {value: code});
    
});
module.exports = router;
