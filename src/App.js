import React from 'react';
import data from './components/data';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      stored: false,
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      fullfil: false,
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
      cards: data,
    };
  }

  componentDidUpdate() {
    this.formValidator();
    this.trunfoValidator();
  }

  onInputChange = (e) => {
    this.setState(({
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked : e.target.value
    }));
  }

  remove = (e) => {
    const { cards } = this.state;
    const filter = cards
      .filter((ele) => ele.cardName === e.target.name);

    this.setState({
      cards: cards
        .filter((ele) => ele.cardName !== e.target.name)
    });

    if (filter.some((ele) => ele.cardTrunfo === true)) {
      this.setState({ hasTrunfo: false });
    }
  }

  checkAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttr = 90;
    const maxAttrSum = 210;
    const AttrSum = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);
    if (AttrSum <= maxAttrSum
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= maxAttr
      && cardAttr2 <= maxAttr
      && cardAttr3 <= maxAttr) return true;
    return false;
  }

  addCard = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, stored } = this.state;
    this.setState((prevState) => ({
      cards: [...prevState.cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        stored,
      }],
    }));
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState({ stored: true });
    this.addCard();
    this.trunfoValidator();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
    });
  }

  trunfoValidator = () => {
    const { cards, hasTrunfo } = this.state;
    if (hasTrunfo !== true) {
      if (cards.some((ele) => ele.cardTrunfo === true) && hasTrunfo === false) {
        this.setState({ hasTrunfo: true });
      }
      if (cards.some((ele) => ele.cardTrunfo === false) && hasTrunfo !== false) {
        this.setState({ hasTrunfo: false });
      }
    }
  }

  formValidator = () => {
    const { isSaveButtonDisabled, fullfil, cardName,
      cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const array = [cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare];
    if (array.some((ele) => ele === '') === false && fullfil !== true
    ) {
      this.setState({ fullfil: true });
    }
    if (array.some((ele) => ele === '') === true && fullfil !== false) {
      this.setState({ fullfil: false });
    }
    if (fullfil === true
      && isSaveButtonDisabled !== false && this.checkAttr() === true) {
      this.setState({ isSaveButtonDisabled: false });
    }
    if (fullfil === false && isSaveButtonDisabled !== true) {
      this.setState({ isSaveButtonDisabled: true });
    }
    if (this.checkAttr() !== true
      && isSaveButtonDisabled === false) this.setState({ fullfil: false });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, fullfil, cards, filterName, filterRare,
      filterTrunfo } = this.state;
    return (
      <>
        <header>
          <h1>Guild Wars</h1>
        </header>
        <section className="container">
          <Form
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
            hasTrunfo={hasTrunfo}
            onInputChange={this.onInputChange}
            isSaveButtonDisabled={isSaveButtonDisabled}
            onSaveButtonClick={this.onSaveButtonClick}
          />
          <Card
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
            fullfil={fullfil}
          />
        </section>
        <section className="filters">
          <div>
            <input
              type="text"
              data-testid="name-filter"
              name="filterName"
              placeholder="Serach by card name"
              onChange={this.onInputChange}
              disabled={filterTrunfo}
            />
          </div>
          <div>
            <select
              onChange={this.onInputChange}
              name="filterRare"
              data-testid="rare-filter"
              placeholder="Search by rarity"
              disabled={filterTrunfo}
            >
              <option disabled selected value> -- select a rarity -- </option>
              <option value="" onChange={this.onInputChange}>All</option>
              <option value="Normal" onChange={this.onInputChange}>Normal</option>
              <option value="Rare" onChange={this.onInputChange}>Rare</option>
              <option
                value="Very Rare"
                onChange={this.onInputChange}
              >
                Very Rare
              </option>
            </select>
          </div>
          <div className="supertrunfo tdecked" htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              onChange={this.onInputChange}
              type="checkbox"
              name="filterTrunfo"
              data-testid="trunfo-filter"
              checked={filterTrunfo}
            />
          </div>
        </section>
        <section className="container-deck">
          <div className="card-deck">
            {cards.filter((card) => card.cardName.toLocaleLowerCase()
              .includes(filterName.toLocaleLowerCase()))
              .filter((rare) => (filterRare === ''
                ? rare : rare.cardRare === filterRare))
              .filter((trunfo) => (!filterTrunfo
                ? trunfo : trunfo.cardTrunfo === true))
              .map((ele) => (
                <Card
                  key={ele.cardName}
                  cardName={ele.cardName}
                  cardDescription={ele.cardDescription}
                  cardAttr1={ele.cardAttr1}
                  cardAttr2={ele.cardAttr2}
                  cardAttr3={ele.cardAttr3}
                  cardImage={ele.cardImage}
                  cardRare={ele.cardRare}
                  cardTrunfo={ele.cardTrunfo}
                  fullfil={ele.fullfil}
                  stored
                  remove={this.remove}
                />
              ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;
