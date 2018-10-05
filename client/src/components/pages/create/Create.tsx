import * as React from 'react';
import {Link} from 'react-router-dom';
import Textarea from '../../form-elements/textareas/Textarea';
import Button from '../../form-elements/buttons/Button';

interface IProps {
    textarea: {
        onChange: Function,
        text: string
    },
    button: {
        onClick: Function,
        label: string
    }
}

class Create extends React.Component<IProps> {
    public render() {
        return (
            <div>
                <div>Create</div>
                <Textarea onChange={this.props.textarea.onChange} text={this.props.textarea.text} />
                <Link to={'/confirm'}>
                    <Button  onClick={this.props.button.onClick} label={this.props.button.label} />
                </Link>
            </div>
        );
    }
}

// export  {Create};
export default Create;