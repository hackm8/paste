const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ posts: [] })
  .write()


router.post('/', async (req, res) => {
    const { code } = req.body;
    if(code !== '') {
        const id = shortid.generate();
        db.get('posts')
            .push({ id: id, code: code, views: 1})
        res.render('index', {
            
        })
    }
});
module.exports = router;
