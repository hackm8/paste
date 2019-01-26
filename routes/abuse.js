const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/:id', async (req, res) => {
    if (!req.params.id) return res.redirect('/');
    request(
        `https://api.telegram.org/bot670399968:AAGxazPJbLOdQTqCgyPvHkt3fhUQ2boPf2k/sendMessage?chat_id=400674061&parse_mode=Markdown&text=Abuse+Reported:+\`${req.params.id}\`\nhttps://p.hackmate.tech/c/${req.params.id}`,
        () => res.end('The code was reported to the admin!')
    )
});
module.exports = router;
