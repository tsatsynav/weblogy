const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((item) => {
  return item + 0.5;
});

coffees.forEach((item) => {
  for(let i = 0; i < coffees.length && i < updatedPrices.length; i += 1) {
    console.log(`Кофе ${item} сейчас стоит ${updatedPrices} евро`);
  }
}); 

