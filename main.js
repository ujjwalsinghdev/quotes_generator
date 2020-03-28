import { quotes } from "./quotesdatabase.js";

const quoteBtn = document.querySelector("#quoteBtn");

const quoteAuthor = document.querySelector("#quoteAuthor");

const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);

  // console.log(number);

  quoteAuthor.innerHTML = quotes[number].author;
  quote.innerHTML = quotes[number].text;
}
