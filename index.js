const quote = document.querySelector(".quote");
const author = document.querySelector(".quote-author");
const btn = document.querySelector(".btn");
// array of quotes
const quotes = [
  {
    quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
    author: "— Franklin D. Roosevelt",
  },
  {
    quote: `"In the middle of every difficulty lies opportunity."`,
    author: "— Albert Einstein",
  },
  {
    quote: ` "Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    author: "— Winston Churchill",
  },
  {
    quote: `"Believe you can and you're halfway there."`,
    author: "— Theodore Roosevelt",
  },
  {
    quote: ` "Happiness is not something ready made. It comes from your own actions."`,
    author: "— Dalai Lama",
  },
  {
    quote: `"Do not watch the clock. Do what it does. Keep going."`,
    author: "— Sam Levenson",
  },
  {
    quote: `"Act as if what you do makes a difference. It does."`,
    author: "— William James",
  },
  {
    quote: ` "Start where you are. Use what you have. Do what you can."`,
    author: "— Arthur Ashe",
  },
  {
    quote: `"Dream big and dare to fail."`,
    author: "— Norman Vaughan",
  },
  {
    quote: `"Keep your face always toward the sunshine—and shadows will fall behind you."`,
    author: "— Walt Whitman",
  },
];
// Event listener for button click to generate a random quote
btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomIndex].quote;
  author.innerText = quotes[randomIndex].author;
});
