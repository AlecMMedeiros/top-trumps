import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    const maxAttr = 90;
    const minAttr = 0;
    const RenderTrunfo = (param, param2, param3) => {
      if (param === false) {
        return (
          <label className="supertrunfo" htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              onChange={ param2 }
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ param3 }
            />
          </label>);
      }
      if (param === true) {
        return (
          <p
            className="supertrunfo"
            data-testid="trunfo-input"
          >
            Você já tem um Super Trunfo em seu baralho
          </p>);
      }
    };
    return (
      <form className="master-form">
        <div className="cardTitle">
          <input
            className="name-input"
            type="text"
            data-testid="name-input"
            name="cardName"
            placeholder="Card name"
            value={ cardName }
            onInput={ onInputChange }
          />
        </div>
        <div className="cardImage">
          <input
            className="cardDescription"
            type="text"
            name="cardImage"
            placeholder="Card Image Url"
            data-testid="image-input"
            value={ cardImage }
            onInput={ onInputChange }
          />
        </div>
        <div className="rare">
          Rarity
          <select
            onChange={ onInputChange }
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
          >
            <option selected value="">Choose...</option>
            <option value="Normal" onChange={ onInputChange }>Normal</option>
            <option value="Rare" onChange={ onInputChange }>Rare</option>
            <option value="Very Rare" onChange={ onInputChange }>Very Rare</option>
          </select>
        </div>
        <div className="container-cardDescription">
          <label htmlFor="cardDescription">
            <input
              className="cardDescription"
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              maxLength="200"
              placeholder="Card description"
              value={ cardDescription }
              onInput={ onInputChange }
            />
          </label>
        </div>
        <div className="Attributes">
          <span>Strength</span>
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onInput={ onInputChange }
            max={ maxAttr }
            min={ minAttr }
          />
        </div>
        <div className="Attributes">
          <span>Speed</span>
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onInput={ onInputChange }
            max={ maxAttr }
            min={ minAttr }
          />
        </div>
        <div className="Attributes">
          <span>Defense</span>
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max={ maxAttr }
            min={ minAttr }
          />
        </div>
        {RenderTrunfo(hasTrunfo, onInputChange, cardTrunfo)}

        <button
          className="btn btn-outline-warning"
          type="button"
          name="save-button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Save
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
