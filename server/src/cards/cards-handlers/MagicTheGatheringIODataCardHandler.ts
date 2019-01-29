import ICardsHandler from './ICardsHandler';

import axios, { AxiosResponse } from 'axios';

class MagicTheGatheringIODataCardHandler implements ICardsHandler {
  getCards(cards: Array<string>): Promise<any> {
    return axios.get('https://api.magicthegathering.io/v1/cards?name=' + cards.join('|'));
  }
}


export default MagicTheGatheringIODataCardHandler;
