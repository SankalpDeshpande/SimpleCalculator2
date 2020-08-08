export default function operate(numberOne, numberTwo, operation) {
  if (operation === "+") {
    return Number(numberOne) + Number(numberTwo);
  }
  if (operation === "-") {
    return Number(numberOne) - Number(numberTwo);
  }
  if (operation === "X") {
    return Number(numberOne) * Number(numberTwo);
  }
  if (operation === "/") {
    if (numberTwo === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return Number(numberOne) / Number(numberTwo);
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
