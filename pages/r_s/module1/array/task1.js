const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel (name) {
  let servedClientName = peopleWaiting.shift();
  alert(`${servedClientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

console.log(peopleWaiting.length);

function leaveQueueWithoutParcel() {
  do {
    let unservedClientName = peopleWaiting.pop();
    alert(`${unservedClientName} не получил(а) посылку и ушел(ла) из очереди`);
  } while (peopleWaiting.length > 0);
}

leaveQueueWithoutParcel()

console.log(peopleWaiting.length);