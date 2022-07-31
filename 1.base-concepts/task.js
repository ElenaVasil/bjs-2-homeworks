"use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = (b**2 - 4*a*c);
  let sqr1;
  let sqr2;
  if (d > 0) { 
    sqr1 = (-b + Math.sqrt(d)) / (2 * a);
    sqr2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [sqr1, sqr2];
  } else if (d === 0) {
    sqr1 = -b/(2*a);
    arr = [sqr1];
  } else {
    arr = [];
  }
  return arr; // array
};
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
  let bodyCredit = amount - contribution;
  function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
  let period = monthDiff(new Date(), date);
  let payment; 
  let P = percent/100/12;
  payment = bodyCredit * (P + (P / ((1 + P)**period - 1)));
  totalAmount = parseFloat((payment*period).toFixed(2));
  return totalAmount;
  console.log(totalAmount);
}
