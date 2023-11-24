let clientsEstimations = [];

function askClientToGiveEstimation() {
  let clientAnswer = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));

  if(clientAnswer >= 1 && clientAnswer <= 10) {
      return clientsEstimations.push(clientAnswer);
    }
};

for(let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((item) => {
  return item > 5;
});

const notGoodEstimations = clientsEstimations.filter((item) => {
  return item <= 5;
});

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}.`);