const quotes = {
  1: "Believe in yourself.",
  2: "You are stronger than you think.",
  3: "Make today count.",
  4: "Dream big and dare bigger.",
  5: "Success starts with self-discipline.",
  6: "Stay positive, work hard, make it happen.",
  7: "Push yourself because no one else will.",
  8: "Every day is a second chance.",
  9: "Be the energy you want to attract.",
  10: "Doubt kills more dreams than failure ever will.",
  11: "Small steps every day lead to big results.",
  12: "Make your future self proud.",
  13: "You don’t have to be perfect to be amazing.",
  14: "Discipline is choosing between what you want now and what you want most.",
  15: "The best way out is always through.",
  16: "The harder you work, the luckier you get.",
  17: "Turn your wounds into wisdom.",
  18: "Don't stop until you're proud.",
  19: "You are capable of amazing things.",
  20: "Keep going. Everything you need will come to you.",
  21: "Be fearless in the pursuit of what sets your soul on fire.",
  22: "Mistakes are proof you're trying.",
  23: "Your only limit is your mind.",
  24: "Make each day your masterpiece.",
  25: "Strive for progress, not perfection.",
  26: "Act like it’s impossible to fail.",
  27: "You got this!",
  28: "Grow through what you go through.",
  29: "Work hard in silence, let your success be your noise.",
  30: "Progress is better than perfection.",
  31: "Great things never come from comfort zones.",
};
let quote = document.querySelector(".quote");
const datetime = document.querySelector(".date");
quote.innerHTML = quotes[new Date().getDate()];

const getdatetime = () => {
  const date = new Date();
  datetime.innerHTML = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
};
setInterval(getdatetime, 1000);
