const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(people) {
  for (let i = 0; i < people.length; i++) {
    console.log("before", i, people[i]);
    let getPack = people.shift();
    console.log("after", i, getPack);
  }
}

giveParcel(peopleWaiting);