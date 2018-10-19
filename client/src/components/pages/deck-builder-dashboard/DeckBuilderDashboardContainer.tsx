import * as React from 'react';
import { connect } from 'react-redux';

import DeckBuilderDashboard from './DeckBuilderDashboard';
import IDeck from '../../../types/IDeck'

class DeckBuilderDashboardContainer extends React.Component<IDeck> {
    public render() {
        return <DeckBuilderDashboard {...this.props} />;
    }
}

const mapStateToProps = function (state: any) {
    return {...state.pages.deckBuilderDashboard};
};

export default connect(mapStateToProps, {})(DeckBuilderDashboardContainer);