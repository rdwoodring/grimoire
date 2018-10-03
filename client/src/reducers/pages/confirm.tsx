import { Deck } from "../../types/deck";

const defaultState = {
    cards: {}
};

export default function deck(state: Deck = defaultState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}
