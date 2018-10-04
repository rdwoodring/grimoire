import * as React from 'react';
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
                <Button  onClick={this.props.button.onClick} label={this.props.button.label} />
            </div>
        );
    }
}

// export  {Create};
export default Create;