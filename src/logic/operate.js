export default function operate(n1, n2, operation) {
  let one, two;
  one = Number(n1);
  two = Number(n2)
  if (operation === '÷') {
    two = Number(n2) || 1;
    return (one / two);
  }
  if (operation === 'x') {
    two = Number(n2) || 0;
    return one * two;
  }
  if (operation === '+') {
    return one + two;
  }
  if (operation === '-') {
    return one - two;
  }

}