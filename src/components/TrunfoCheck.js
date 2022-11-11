import React from 'react';
import PropTypes from 'prop-types';

class TrunfoCheck extends React.Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
    return (
      <input
        onInput={ onInputChange }
        type="checkbox"
        name="cardTrunfo"
        data-testid="trunfo-input"
        defaultChecked={ cardTrunfo }
      />
    );
  }
}

TrunfoCheck.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default TrunfoCheck;
