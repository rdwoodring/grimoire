import ICardsHandler from './ICardsHandler';
import IResultsMerger from '../results-mergers/IResultsMerger';

import {AxiosResponse} from 'axios';

class CardsHandler implements ICardsHandler {
    subHandlers: Array<ICardsHandler>;
    resultMerger: IResultsMerger;

    constructor(subHandlers: Array<ICardsHandler>, resultMerger: IResultsMerger) {
        this.subHandlers = subHandlers;
        this.resultMerger = resultMerger;
    }

    getCards(cards: Array<string>): Promise<any> {
        // return Promise.resolve();
        const subHandlerPromises = this.subHandlers
            .map((subHandler) => {
                return subHandler.getCards(cards);
            });

        return Promise.all(subHandlerPromises)
            .then((responses: Array<AxiosResponse>) => {
                // const merged = responses[0].data
                //     .results
                //     .map((priceData: any) => {
                //         const matchedCard = responses[1].data
                //             .cards
                //             .find((card: any) => {
                //                 return card.name === priceData.productName && card.set === priceData.group.abbreviation;
                //             }),
                //             mergedCard = {
                //                 ...matchedCard,
                //                 ...priceData
                //             };

                //         return mergedCard;
                //     });

                // // console.log(merged);

                // return {
                //     results: merged,
                //     totalResults: merged.length
                // }
                // console.log(responses[1]);
                return this.resultMerger.mergeCards(responses[0], responses[1]);
                // return responses[0];
            });
    }
}

export default CardsHandler;