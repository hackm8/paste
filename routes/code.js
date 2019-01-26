const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


router.get('/c/:id', async (req, res) => {
    const adapter = new FileSync('database.json');
    const db = low(adapter);
    let id = req.params.id;
    try {
        let { code, views } = db.get('posts').find({ id: id  }).value();
        db.get('posts').find({id: id}).assign({views: views + 1 || 1}).write();
        res.render('index', {value: code, views: views, id: id});
    } catch(e) {
        res.redirect('/');
    }    
});

router.get('/raw/:id', async (req, res) => {
    const adapter = new FileSync('database.json');
    const db = low(adapter);
    let id = req.params.id;
    try {
        let { code } = db.get('posts').find({ id: id  }).value();
        res.end(code);
    } catch(e) {
        res.redirect('/');
    }    
});


module.exports = router;
