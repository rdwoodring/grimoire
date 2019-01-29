import ICardsHandler from './ICardsHandler';

import axios, { AxiosResponse } from 'axios';

class TCGPriceCardHandler implements ICardsHandler {
    getCards(cards: Array<string>): Promise<any> {
        // return Promise.resolve();
        let token: string;
        // authenticate
        return axios.post('https://api.tcgplayer.com/token', /* { */
            'grant_type=client_credentials&client_id=' + process.env.TCG_PUBLIC_KEY + '&client_secret=' + process.env.TCG_PRIVATE_KEY, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .then((resp: AxiosResponse) => {
                token = resp.data.access_token;
            })
            .then(() => {
                return axios.get('http://api.tcgplayer.com/v1.5.0/catalog/products?categoryId=1&productName=black%20lotus', {
                        headers: {
                            'Authorization': 'bearer ' + token
                        }
                    });

            })
            .then((resp: AxiosResponse) => {
                const ids = resp.data.results.map((result: any) => {
                    return result.productId;
                });

                return axios.get('https://api.tcgplayer.com/current/pricing/product/' + ids.join(','), {
                        headers: {
                            'Authorization': 'bearer ' + token
                        }
                    })
                    .then((pricingData: AxiosResponse) => {
                        // slow AF
                        const priceShit = pricingData.data.results.reduce((accumulator: {}, price: any) => {
                            if (price.marketPrice) {
                                accumulator[price.productId] = accumulator[price.productId] || {};
    
                                accumulator[price.productId][price.subTypeName] = price.marketPrice;
                            }

                            return accumulator;
                        }, {});

                        const builtResponse = Object.keys(priceShit).map((key: string) => {
                            const card = resp.data.results.find((card: any) => {
                                return card.productId.toString() === key;
                            });

                            return {
                                ...card,
                                ...{
                                    price: priceShit[key]
                                }
                            };
                        });

                        return {
                            data: {
                                totalItems: builtResponse.length,
                                results: builtResponse
                            }
                        };
                    });
            });
    }
}

export default TCGPriceCardHandler;