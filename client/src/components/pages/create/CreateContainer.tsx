import * as React from 'react';
import {connect} from 'react-redux';
import axios, {AxiosResponse} from 'axios';

import updateRawCardList from '../../../actions/action-creators/updateRawCardList';
import updateFetchingInitialDeckList from '../../../actions/action-creators/updateFetchingInitialDeckList';
import updateInitialCardList from "../../../actions/action-creators/updateInitialDeckList";

import Create from './Create';

import Card from '../../../types/card';

interface IProps {
    updateRawCardList: Function,
    updateFetchingInitialDeckList: Function,
    updateInitialCardList: Function,
    rawCardsList: string    
};

class CreateContainer extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.onClickButton = this.onClickButton.bind(this);
        this.onChangeTextarea = this.onChangeTextarea.bind(this);
    }
    
    public render() {
        return (
            <Create 
                textarea={{
                    onChange: this.onChangeTextarea,
                    text: this.props.rawCardsList
                }}
                button={{
                    onClick: this.onClickButton,
                    label: 'Submit'
                }} 
            />
        );
    }

    private onClickButton(e: any) {
        this.props.updateFetchingInitialDeckList(true);

        axios.get("https://api.magicthegathering.io/v1/cards")
            .then((resp: AxiosResponse) => {
                this.props.updateInitialCardList(resp.data.cards);

                this.props.updateFetchingInitialDeckList(false);
            });
    }

    private onChangeTextarea(e: any) {
        let text: string = e.currentTarget.value;

        this.props.updateRawCardList(text);
    }
}

const mapStateToProps = function(state: any) {
    return {...state.pages.create};
};

const mapDispatchToProps = function(dispatch: any) {
    return { 
        updateRawCardList: (rawCardsList: string) => {
            return dispatch(updateRawCardList(rawCardsList));
        }, 
        updateFetchingInitialDeckList: (fetchingInitialDeckList: boolean) => {
            return dispatch(updateFetchingInitialDeckList(fetchingInitialDeckList));
        },
        updateInitialCardList: (initialDeckList: Array<Card>) => {
            return dispatch(updateInitialCardList(initialDeckList));
        } 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);