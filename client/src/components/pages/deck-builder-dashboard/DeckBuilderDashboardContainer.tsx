import * as React from 'react';
import { connect } from 'react-redux';

import DeckBuilderDashboard from './DeckBuilderDashboard';

class DeckBuilderDashboardContainer extends React.Component<Object> {
    public render() {
        return <DeckBuilderDashboard />;
    }
}

const mapStateToProps = function (state: any) {
    return { };
};

export default connect(mapStateToProps, {})(DeckBuilderDashboardContainer);