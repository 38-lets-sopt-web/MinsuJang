function solution(num_list) {
  let num1 = '';
  let num2 = '';

  num_list.forEach((value) => {
    if (value % 2 === 0) {
      num1 += value.toString();
    } else {
      num2 += value.toString();
    }
  });

  return Number(num1) + Number(num2);
}