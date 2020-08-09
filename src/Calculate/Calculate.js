/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
import operate from "../logic/operate";

function isNumber(value){
  const number = Number(value);
  return typeof number === 'number' && number === number && number !== Infinity && number !== -Infinity;
}

export const calculate = (state, buttonName) =>{
    if (buttonName === "AC") {
        return {
          total: null,
          next: null,
          operation: null
        };
      }

      if (buttonName === ".") {
        if (state.next) {
          // ignore a . if the next number already has one
          if (state.next.includes(".")) {
            return {};
          }
          return { next: state.next + "." };
        }
        return { next: "0." };
      }

      if (isNumber(buttonName)) {
        if (buttonName === "0" && state.next === "0") {
          return {};
        }
        // If there is an operation, update next
        if (state.operation) {
          if (state.next) {
            return { next: state.next + buttonName };
          }
          return { next: buttonName };
        }
        // If there is no operation, update next and clear the value
        if (state.next) {
          const next = state.next === "0" ? buttonName : state.next + buttonName;
          return {
            next,
            total: null,
          };
        }
        return {
          next: buttonName,
          total: null,
        };
      }

      if (buttonName === "=") {
        if (state.next && state.operation) {
          return {
            total: operate(state.total, state.next, state.operation),
            next: null,
            operation: null,
          };
        } else {
          // '=' with no operation, nothing to do
          return {};
        }
      }
      if (state.operation) {
        return {
          total: operate(state.total, state.next, state.operation),
          next: null,
          operation: buttonName,
        };
      }
      return {
        total: state.next,
        next: null,
        operation: buttonName,
      };
};