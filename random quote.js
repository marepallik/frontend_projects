const API_URL = "5c7dc2b162d7a221d9d830ef2449a4e6";

const quoteContainer = document.querySelector(".quote-container");

const quote = document.querySelector(".quote");

const newQuoteBtn = document.querySelector("#new-quote-btn");

newQuoteBtn.addEventListener("click", function() {

    fetch(API_URL)

        .then(response => response.json())

        .then(data => {

            quote.innerHTML = data[0].text;

        });

});
