import * as React from 'react';
import {connect} from 'react-redux';

import Confirm from './Confirm';

class ConfirmContainer extends React.Component {
    public render() {
        return <Confirm />
    }
}

const mapStateToProps = function(state: any) {
    return {};
};

export default connect(mapStateToProps, {})(ConfirmContainer);