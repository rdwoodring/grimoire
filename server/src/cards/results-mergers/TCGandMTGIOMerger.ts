import {AxiosResponse} from 'axios';

import IResultsMerger from './IResultsMerger';

class TCGandMTGIOMerger implements IResultsMerger {
    mergeCards(mtgIOCardData: AxiosResponse, tcgPlayerCardData: AxiosResponse) {
        const mergedCards = mtgIOCardData.data
            .results
            .map((priceData: any) => {
                const matchedCard = tcgPlayerCardData.data
                    .cards
                    .find((card: any) => {
                        return card.name === priceData.productName && card.set === priceData.group.abbreviation;
                    }),
                    mergedCard = {
                        ...matchedCard,
                        ...priceData
                    };

                return mergedCard;
            });

        return {
            results: mergedCards,
            totalResults: mergedCards.length
        };
    }
}

export default TCGandMTGIOMerger;