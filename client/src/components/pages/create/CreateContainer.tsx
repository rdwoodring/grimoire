import * as React from 'react';
import {connect} from 'react-redux';

import updateRawCardList from '../../../actions/action-creators/updateRawCardList';

import Create from './Create';

interface IProps {
    onChangeTextarea: Function,
    rawCardsList: string    
};

class CreateContainer extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
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
                    onClick: this.onButtonClick,
                    label: 'Submit'
                }} 
            />
        );
    }

    private onButtonClick(e: any) {
        console.warn('hi');
    }

    private onChangeTextarea(e: any) {
        let text: string = e.currentTarget.value;

        this.props.onChangeTextarea(text);
    }
}

const mapStateToProps = function(state: any) {
    return {...state.pages.create};
};

const mapDispatchToProps = function(dispatch: any) {
    return {
        onChangeTextarea: (rawCardsList: string) => {
            return dispatch(updateRawCardList(rawCardsList));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);