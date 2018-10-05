import * as React from 'react';

interface IProps {
    fetchingInitialCardList: boolean
};

class Confirm extends React.Component<IProps> {
    public render() {
        let fetchingMarkup;

        if (this.props.fetchingInitialCardList) {
            fetchingMarkup = <div>Fetching</div>
        }
        return (
            <div>
                <div>
                    Confirm
                </div>
                {fetchingMarkup}
            </div>
        );
    }
}

export default Confirm