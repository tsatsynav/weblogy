const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeTitle= prompt("Поиск кофе по названию:").toLowerCase().trim();
let normalizedCoffeeTitle = coffeeTitle[0].toLocaleUpperCase() + coffeeTitle.slice(1);

function getIndexOfCoffee(arg) {
  let foundCoffee = coffees.findIndex((item) => {
    return item === arg;
  });
  
  let normalizedCoffeePosition = foundCoffee + 1;
  
  if (normalizedCoffeePosition) {
    alert(`Держите ваш любимый кофе ${normalizedCoffeeTitle}. Он ${normalizedCoffeePosition}-й по популярности в нашей кофейне.`);
  } else {
    alert(`К сожалению, такого вида кофе нет в наличии.`);
  }
}

getIndexOfCoffee(normalizedCoffeeTitle);

