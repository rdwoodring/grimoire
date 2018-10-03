import * as React from 'react';
import {connect} from 'react-redux';

import {Create} from './Create';

class CreateContainer extends React.Component {
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <Create />
        );
    }
}

const mapStateToProps = function(state: any) {
    return {...state.deck};
};



export default connect(mapStateToProps, {})(CreateContainer);