import * as React from 'react';
import {connect} from 'react-redux';

import Create from './Create';

class CreateContainer extends React.Component {
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <Create 
                textarea={{
                    onChange: this.onChangeTextarea,
                    text: ''
                }}
                button={{
                    onClick: this.onButtonClick,
                    label: 'Submit'
                }} 
            />
        );
    }

    private onButtonClick(e: any) {
        // debugger;
        console.warn('hi');
    }

    private onChangeTextarea(e: any) {
        debugger;
    }
}

const mapStateToProps = function(state: any) {
    return {...state.deck};
};



export default connect(mapStateToProps, {})(CreateContainer);