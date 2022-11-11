import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  setBackgroud = () => {
    const { cardRare } = this.props;
    if (!cardRare) return 'master-card';
    if (cardRare === 'Normal') return 'normal';
    if (cardRare === 'Rare') return 'raro';
    if (cardRare === 'Very Rare') return 'mraro';
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, stored, remove } = this.props;
    return (
      <div
        className={ this.setBackgroud() }
      >
        <div className="cardTitle">
          <span data-testid="name-card">
            { cardName }
          </span>
        </div>
        <div className="cardImage">
          <img
            name="image-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ !cardName ? cardName : '' }
          />
          <div className="rare">
            <span data-testid="rare-card">
              {cardRare}

            </span>
            <div className="trunfoCard">
              {cardTrunfo === true ? <span data-testid="trunfo-card">Super Trunfo</span>
                : <p />}
            </div>
          </div>
        </div>
        <div className="container-cardDescription">
          <div className="cardDescription" data-testid="description-card">
            {cardDescription}
          </div>
        </div>
        <div className="Attributes">
          <span>Strength</span>
          <span
            className="attrName"
            name="attr1-card"
            data-testid="attr1-card"
          >
            { cardAttr1 }
          </span>
        </div>
        <div className="Attributes">
          <span>Speed</span>
          <span
            className="attrName"
            name="attr2-card"
            data-testid="attr2-card"
          >
            { cardAttr2 }
          </span>
        </div>
        <div className="Attributes">
          <span>Defense</span>
          <span
            className="attrName"
            name="attr3-card"
            data-testid="attr3-card"
          >
            { cardAttr3 }
          </span>
        </div>
        <div className="removebutton">
          {stored === true ? <input
            data-testid="delete-button"
            className="btn btn-warning btn-sm removeutton"
            type="submit"
            name={ cardName }
            onClick={ remove }
            value="Remove"
          />
            : <p />}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  stored: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Card;
