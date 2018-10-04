import * as React from 'react';

interface IProps {
    onChange: Function,
    text: string
}

class Textarea extends React.Component<IProps> {
    public render() {
        return (
            <textarea onChange={e => this.props.onChange(e)} value={this.props.text}>
            </textarea>
        );
    }
}

export default Textarea;