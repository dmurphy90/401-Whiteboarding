'use strict';

module.exports = new class {
  fibo(int) {
    if(!int || typeof int !== 'number') return null;
    let val = 0, total = 0, temp;

    while (int >= 0) {
      temp = val;
      val = val + total;
      total = temp;
      if(total === 0) {
        val = 1;
      }
      int--;
    }
    return total;
  }
};