export default function operate(currentInput, operation) {
  const currentNum = parseFloat(currentInput);

  if (Number.isNaN(currentNum)) {
    return 'Error';
  }

  switch (operation) {
    case '+/-':
      return (-currentNum).toString();
    case '%':
      return (currentNum / 100).toString();
    default:
      return 'Error';
  }
}
