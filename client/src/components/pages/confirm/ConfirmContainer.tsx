import * as React from 'react';
import {connect} from 'react-redux';

import Confirm from './Confirm';

interface IProps {
    fetchingInitialCardList: boolean
};

class ConfirmContainer extends React.Component<IProps> {
    public render() {
        return <Confirm fetchingInitialCardList={this.props.fetchingInitialCardList} />
    }
}

const mapStateToProps = function(state: any) {
    return {...state.pages.confirm};
};

export default connect(mapStateToProps, {})(ConfirmContainer);