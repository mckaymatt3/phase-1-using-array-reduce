const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function reducer (array) {
    return array.reduce(function checkTotal (previousValue,currentValue) {
        return currentValue + previousValue
    },0) 
} 

const totalBatteries = reducer(batteryBatches);
