export default interface ICard {
  name: string;
  manaCost: string;
  cmc: number;
  colors: Array<string>;
  colorIdentity: Array<string>;
  type: string;
  types: Array<string>;
  subtypes: Array<string>;
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  rulings: Array<Object>;
  printings: Array<string>;
  originalText: string;
  originalType: string;
  id: string;
}