const express = require('express'),
    router = express.Router(),
    html = `
        <html>
            <head>
                <title>
                    Grimoire - Magic the Gathering Deck Builder
                </title>
            <head>

            <body>
                <div id="root">
                    <!-- content here -->
                </div>
            </body>
        </html>
    `;

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', {
    //     title: 'Express'
    // });

    res.send(html);
});

module.exports = router;