let lengthFirstMainSide = Number(
  prompt("Введите длину первого основания трапеции:")
);
let lengthSecondMainSide = Number(
  prompt("Введите длину второго основания трапеции:")
);
let heightOfConstruction = Number(prompt("Введите высоту трапеции:"));

let total =
  Math.round(
    ((lengthFirstMainSide + lengthSecondMainSide) / 2) *
      heightOfConstruction *
      100
  ) / 100;

alert(`Площадь трапеции будет равна ${total}`);
