import * as React from 'react';
import {connect} from 'react-redux';
import axios, {AxiosResponse} from 'axios';

import updateRawCardList from '../../../actions/action-creators/updateRawCardList';
import updateFetchingInitialDeckList from '../../../actions/action-creators/updateFetchingInitialDeckList';

import Create from './Create';

interface IProps {
    updateRawCardList: Function,
    updateFetchingInitialDeckList: Function,
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

        // setTimeout(() => {
        //     this.props.updateFetchingInitialDeckList(false);
        // }, 1000);
        axios.get("https://api.magicthegathering.io/v1/cards")
            .then((resp: AxiosResponse) => {
                debugger;

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
        } 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);