import { AxiosResponse } from 'axios';

export default interface IResultsMerger {
    mergeCards(cardData: AxiosResponse, ...additionalCardData: Array<AxiosResponse>): {
        results: Array<any>,
        totalResults: number
    }
};