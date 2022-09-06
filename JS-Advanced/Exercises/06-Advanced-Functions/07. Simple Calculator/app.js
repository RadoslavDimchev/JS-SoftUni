function calculator() {
  let fieldOne = null;
  let fieldTwo = null;
  let result = null;

  return {
    init(selector1, selector2, resultSelector) {
      fieldOne = document.querySelector(selector1);
      fieldTwo = document.querySelector(selector2);
      result = document.querySelector(resultSelector);
    },
    add() {
      result.value = Number(fieldOne.value) + Number(fieldTwo.value);
    },
    subtract() {
      result.value = Number(fieldOne.value) - Number(fieldTwo.value);
    }
  };
}


// second solution

/* function calculator() {
  function init(selector1, selector2, resultSelector) {
    this.fieldOne = document.querySelector(selector1);
    this.fieldTwo = document.querySelector(selector2);
    this.result = document.querySelector(resultSelector);
  }

  function add() {
    this.result.value = Number(this.fieldOne.value) + Number(this.fieldTwo.value);
  }

  function subtract() {
    this.result.value = Number(this.fieldOne.value) - Number(this.fieldTwo.value);
  }

  const result = {};
  result.init = init.bind(result);
  result.add = add.bind(result);
  result.subtract = subtract.bind(result);

  return result;
} */

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');