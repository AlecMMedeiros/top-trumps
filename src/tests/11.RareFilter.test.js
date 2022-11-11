import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("11 - Crie o filtro por raridade da carta", () => {
  it("Será validado se o campo de filtro por Raridade renderiza na tela", () => {
    render(<App />);
    const filterNameInput = screen.getByTestId(/rare-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });

  it("Será validado se somente as cartas com raridade `Normal` são exibidas após o filtro", () => {
    render(<App />);

    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Very Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Carro do ovo');
    userEvent.type(descInput, 'Muito comum em cidades menores. Em alguns casos, a dúzia sai por dez reais');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Van de transporte');
    userEvent.type(descInput, 'Veículo pilotado por apreciadores da sétima arte');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Normal");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterRareInput = screen.getByTestId(/rare-filter/i);
    userEvent.selectOptions(filterRareInput, "Normal");
    expect(screen.getByText("Carta 3 - Van de transporte")).toBeInTheDocument();

    expect(screen.queryByText("Carta 1 - Uno de Escada")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 2 - Carro do ovo")).not.toBeInTheDocument();
  });

  it("Será validado se somente as cartas com raridade `Rare` são exibidas após o filtro", () => {
    render(<App />);

    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Very Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Carro do ovo');
    userEvent.type(descInput, 'Muito comum em cidades menores. Em alguns casos, a dúzia sai por dez reais');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(saveBtn);

    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Van de transporte');
    userEvent.type(descInput, 'Veículo pilotado por apreciadores da sétima arte');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Normal");
    userEvent.click(saveBtn);

    const filterRareInput = screen.getByTestId(/rare-filter/i);
    userEvent.selectOptions(filterRareInput, "Rare");
    expect(screen.getByText("Carta 2 - Carro do ovo")).toBeInTheDocument();

    expect(screen.queryByText("Carta 1 - Uno de Escada")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 3 - Van de transporte")).not.toBeInTheDocument();
  });

  it("Será validado se somente as cartas com raridade `muito Rare` são exibidas após o filtro", () => {
    render(<App />);

    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Very Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Carro do ovo');
    userEvent.type(descInput, 'Muito comum em cidades menores. Em alguns casos, a dúzia sai por dez reais');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Van de transporte');
    userEvent.type(descInput, 'Veículo pilotado por apreciadores da sétima arte');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Normal");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterRareInput = screen.getByTestId(/rare-filter/i);
    userEvent.selectOptions(filterRareInput, "Very Rare");
    expect(screen.getByText("Carta 1 - Uno de Escada")).toBeInTheDocument();

    expect(screen.queryByText("Carta 2 - Carro do ovo")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 3 - Van de transporte")).not.toBeInTheDocument();
  });

  it("Será validado se todas cartas são exibidas quando o filtro de raridade está com a opção `todas` selecionada", () => {
    render(<App />);

    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Carro do ovo');
    userEvent.type(descInput, 'Muito comum em cidades menores. Em alguns casos, a dúzia sai por dez reais');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Van de transporte');
    userEvent.type(descInput, 'Veículo pilotado por apreciadores da sétima arte');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Normal");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterRareInput = screen.getByTestId(/rare-filter/i);
    userEvent.selectOptions(filterRareInput, "All");
    

    expect(screen.getByText("Carta 1 - Uno de Escada")).toBeInTheDocument();
    expect(screen.getByText("Carta 2 - Carro do ovo")).toBeInTheDocument();
    expect(screen.getByText("Carta 3 - Van de transporte")).toBeInTheDocument();
  });

  it("Será validado se não renderiza nenhuma carta se não houver raridade correspondente", () => {
    render(<App />);

    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Carro do ovo');
    userEvent.type(descInput, 'Muito comum em cidades menores. Em alguns casos, a dúzia sai por dez reais');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Rare");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Van de transporte');
    userEvent.type(descInput, 'Veículo pilotado por apreciadores da sétima arte');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "Normal");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterRareInput = screen.getByTestId(/rare-filter/i);
    userEvent.selectOptions(filterRareInput, "Very Rare");
    

    expect(screen.queryByText("Carta 1 - Uno de Escada")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 2 - Carro do ovo")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 3 - Van de transporte")).not.toBeInTheDocument();
  });
});
