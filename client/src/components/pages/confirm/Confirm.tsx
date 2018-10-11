import * as React from 'react';

import IConfirmPage from '../../../types/IConfirmPage';


class Confirm extends React.Component<IConfirmPage> {
  public render() {
    let fetchingMarkup;

    if (this.props.fetchingInitialCardList) {
      fetchingMarkup = <div>Fetching</div>;
    }
    
    return (
      <div>
        <div>Confirm</div>
        {fetchingMarkup}
      </div>
    );
  }
}

export default Confirm