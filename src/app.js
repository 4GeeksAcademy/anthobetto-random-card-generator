/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let getRandomNumber = () => {
    let cardsNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let getCardsNumbers = Math.floor(Math.random() * cardsNumbers.length);
    return cardsNumbers[getCardsNumbers];
  };
  let getRandomSymbol = () => {
    let cardSymbols = [
      '<span style= "color: red;">♦</span>',
      '<span style= "color: red;">♥</span>',
      '<span style= "color: black;">♠</span>',
      '<span style= "color: black;">♣</span>'
    ];
    let getCardsSymbols = Math.floor(Math.random() * cardSymbols.length);
    return cardSymbols[getCardsSymbols];
  };
  let generateRandomCard = () => {
    let randomSymbol = getRandomSymbol();
    document.querySelector(".top-suit").innerHTML = randomSymbol;
    document.querySelector(".bottom-suit").innerHTML = randomSymbol;
    document.querySelector(".number-suit").innerHTML = getRandomNumber();
  };
  document.querySelector(".new-card").onclick = generateRandomCard;
};
