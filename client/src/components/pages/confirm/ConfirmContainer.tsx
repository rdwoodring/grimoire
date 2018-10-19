import * as React from 'react';
import {connect} from 'react-redux';

import Confirm from './Confirm';
import IConfirmPage from '../../../types/IConfirmPage';

import ICard from '../../../types/ICard';

import updateCardList from '../../../actions/action-creators/updateDeckList';

interface IProps {
    updateCardList: Function;
    updateCardQuantities: Function;
}

class ConfirmContainer extends React.Component<IConfirmPage & IProps> {
    public constructor(props: IConfirmPage & IProps) {
        super(props);

        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    }
    
    public render() {
        return <Confirm {...this.props} handleSubmitButtonClick={this.handleSubmitButtonClick} />;
    }

    private handleSubmitButtonClick() {
        this.props.updateCardList(this.props.cards);
    }
}

const mapStateToProps = function(state: any) {
    return {...state.pages.confirm};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCardList: (deckList: Map<string, ICard>) => {
            return dispatch(updateCardList(deckList));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmContainer);