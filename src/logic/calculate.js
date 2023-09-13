export default function calculate(prevInput, currentInput, operation) {
  const prevNum = parseFloat(prevInput);
  const currentNum = parseFloat(currentInput);

  if (Number.isNaN(prevNum) || Number.isNaN(currentNum)) {
    return 'Error';
  }

  switch (operation) {
    case '+':
      return (prevNum + currentNum).toString();
    case '-':
      return (prevNum - currentNum).toString();
    case 'x':
      return (prevNum * currentNum).toString();
    case '÷':
      if (currentNum === 0) {
        return 'Error';
      }
      return (prevNum / currentNum).toString();
    default:
      return 'Error';
  }
}
