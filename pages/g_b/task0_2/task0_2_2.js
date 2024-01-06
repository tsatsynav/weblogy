let rublesPerEuro = 101.3;
let rublesPerDollar = 90.1;

let userValueOfMoney = Number(
  prompt("Введите общий объем рублей, который хотите потратить на валюту:")
);

let valueOfEuros = Math.round((userValueOfMoney / rublesPerEuro) * 100) / 100;
let valueOfDollars =
  Math.round((userValueOfMoney / rublesPerDollar) * 100) / 100;

alert(`Вы можете купить ${valueOfEuros} евро или ${valueOfDollars} долларов.`);
