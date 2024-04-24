/**
 *
 * take in 2 numbers
 * and return the result
 * 3+4=7
 */

function addNumbers(num1, num2) {
  // const result = num1 + num2;
  // return result;
  return num1 + num2;
}

addNumbers(1, 3); //4

/**
 *
 * take in 2 numbers but also an operation
 * and return an operation result
 * 3,4,'ADD' = 7
 * 3,4,'MULTIPLY' = 12
 * if we give invalidarguments we will get null
 */

function calculate(num1, num2, operationStr) {
  if (isAValidNumber(num1) && isAValidNumber(num2)) {
    // I want to allow ONLY ADD or MULTIPLY
    if (operationStr === "ADD") {
      return num1 + num2;
    } else if (operationStr === "MULTIPLY") {
      return num1 * num2;
    }
    return null;
  }
}

function isAValidNumber(x) {
  if (isNaN(x)) {
    return false;
  }
  return true;
}

function calculate2(num1, num2, operationStr) {
  const OPERATIONS = {
    ADD: "ADD",
    MULTIPLY: "MULTIPLY",
  };

//   if (operationStr !== OPERATIONS.ADD && operationStr !== OPERATIONS.MULTIPLY)
//     return null;

  if (!sAValidNumber(num1) || !isAValidNumber(num2)) return null;

  // if (operationStr===OPERATIONS.ADD){
  //   return num1+num2;
  //     }
  // else if (operationStr)===OPERATIONS.MULTIPLY{
  //    return num1*num2;
  //     }

  switch (operationStr) {
  case OPERATIONS.ADD:
      return num1 + num2;
      break;
    case OPERATIONS.MULTIPLY:
      return num1 * num2;
    default:
      return null;
  }
}
