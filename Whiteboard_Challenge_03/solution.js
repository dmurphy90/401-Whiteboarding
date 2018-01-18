'use strict';

exports.headCount = function count(obj) {
  if(!obj || typeof obj !== 'object') return null
  let car = obj;
  let total = 0;
  while(car.next){
    if(typeof car.passengers !== 'number') {
      car.passengers = 0;
    }
    total += car.passengers;
    car = car.next;
    count(car);
  }
  if(typeof car.passengers !== 'number') {
    car.passengers = 0;
  } 
  total += car.passengers;
  return total;  
};