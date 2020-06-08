import operate from './operate'
export default function (obj, buttonName) {
  if (buttonName === "AC") {
    return {
      prevNumber: null,
      nextNumber: null,
      operation: null
    }
  }

  if (!isNaN(buttonName)) {
    if (obj.operation) {
      if (obj.nextNumber) {
        return { nextNumber: obj.nextNumber + buttonName }
      }
      return { nextNumber: buttonName }
    }
    // no operation

    if (obj.nextNumber) {
      const nextNumber = obj.nextNumber === "0" ? buttonName : obj.nextNumber + buttonName
      return {
        nextNumber,
        prevNumber: null
      }
    }
    return {
      nextNumber: buttonName,
      prevNumber: null
    }
  }

  if (buttonName === '.') {
    if (obj.nextNumber) {
      return {
        nextNumber: obj.nextNumber + "."
      }
    }
    return {
      nextNumber: "0."
    }
  }

  if (buttonName === '%') {
    if (obj.operation && obj.nextNumber) {
      return {
        nextNumber: null,
        prevNumber: operate(obj.nextNumber, obj.prevNumber, obj.operation) / 100
      }
    }
    if (obj.nextNumber) {
      return { nextNumber: obj.nextNumber / 100 }
    }
    if (obj.prevNumber) {
      return { prevNumber: obj.prevNumber / 100 }
    }
    return {}
  }

  if (buttonName === "+/-") {
    if (obj.nextNumber) {
      return { nextNumber: obj.nextNumber * -1 }
    }
    if (obj.prevNumber) {
      return { prevNumber: obj.prevNumber * -1 }
    }

  }
  if (buttonName === "=") {
    if (obj.nextNumber && obj.operation) {
      return {
        prevNumber: operate(obj.nextNumber, obj.prevNumber, obj.operation),
        nextNumber: null,
        operation: null
      }
    }
  }

  if (obj.operation) {
    return {
      prevNumber: operate(obj.nextNumber, obj.prevNumber, obj.operation),
      nextNumber: null,
      operation: buttonName,
    };
  }

  // if (!obj.prevNumber) {
  //   return { operation: buttonName };
  // }

  return {
    prevNumber: obj.nextNumber,
    nextNumber: null,
    operation: buttonName,
  };
}