import * as React from 'react';
import {connect} from 'react-redux';

import Confirm from './Confirm';
import IConfirmPage from '../../../types/IConfirmPage';

class ConfirmContainer extends React.Component<IConfirmPage> {
  public render() {
    return <Confirm {...this.props} />;
  }
}

const mapStateToProps = function(state: any) {
    return {...state.pages.confirm};
};

export default connect(mapStateToProps, {})(ConfirmContainer);