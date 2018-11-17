// const express = require('express'),
//     router = express.Router();
import {
        Router,
        Request,
        Response,
        NextFunction
    } from 'express';
    
const router: Router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    // res.render('index', {
    //     title: 'Express'
    // });
    res.send(`
        <html>
            <head>
                <title>Express</title>
            </head>

            <body>
                <h1>Welcome to Express</h1>
            </body>
        </html>
    `)
});

// module.exports = router;
export default router;