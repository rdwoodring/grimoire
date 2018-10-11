import * as React from 'react';

import IConfirmPage from '../../../types/IConfirmPage';

import Button from '../../form-elements/buttons/Button';
import { Link } from 'react-router-dom';

class Confirm extends React.Component<IConfirmPage> {
  public render() {
    let bodyMarkup;

    if (this.props.fetchingInitialCardList) {
        bodyMarkup = <div>Fetching</div>;
    } else {
        bodyMarkup =
            <Link to="/deckbuilder">
                <Button label="Confirm"  onClick={() => {}} />
            </Link>
        ;
    }

    return (
      <div>
        <div>Confirm</div>
        {bodyMarkup}
      </div>
    );
  }
}

export default Confirm