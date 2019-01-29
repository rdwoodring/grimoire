import {
        Router,
        Request,
        Response,
        NextFunction
    } from 'express';

import axios, { AxiosResponse } from 'axios';

import CardsHandler from '../../../../cards/cards-handlers/CardsHandler';
import TCGPriceCardHandler from '../../../../cards/cards-handlers/TCGPriceCardHandler';
import MagicTheGatheringIODataCardHandler from '../../../../cards/cards-handlers/MagicTheGatheringIODataCardHandler';

import TCGAndMTGIOMerger from '../../../../cards/results-mergers/TCGandMTGIOMerger';

const router: Router = Router();

router.post('/api/v1/cards/mass-entry', function (req: Request, res: Response, next: NextFunction) {
    const cardData: string = req.body.cardData,
        cardItems = cardData.split('\r\n')
            .map((cardLine: string) => {
                return cardLine.split(' ')
                    .slice(1)
                    .join('%20');
            });

    axios.get('https://api.magicthegathering.io/v1/cards?name=' + cardItems.join('|'))
        .catch((err) => {
            
        })
        .then((resp: AxiosResponse) => {
            console.log(resp.data);
        });
    
    res.json({
        results: cardItems
    });
});

router.get('/api/v1/cards/pricing', function(req: Request, res: Response, next: NextFunction) {
    const cardsHandler = new CardsHandler([
            new TCGPriceCardHandler(),
            new MagicTheGatheringIODataCardHandler()
        ], new TCGAndMTGIOMerger());

    cardsHandler.getCards(['Black Lotus'])
        .catch((err) => {
            console.log(err);

            res.status(500);

            return err;
        })
        .then((response) => {
            res.send(response);
        });
});



export default router;