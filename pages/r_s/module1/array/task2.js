function getSumOfSequence(num) {
  let array = [];
  for(let i = num; i > 0; i -= 1) {
    array.unshift(i);
    //console.log(array);
  }

  return array[0] + array[array.length - 1];

}

console.log(getSumOfSequence(10));