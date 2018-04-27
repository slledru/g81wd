const number = {
  numberA: 50,
  numberB: 40,
  multiply: function(){
    // self is a common name for a reference to `this`
    const self = this;

    function calculate(){
      return self.numberA * self.numberB
    }

    return calculate();
  }
}

console.log(number.multiply())
