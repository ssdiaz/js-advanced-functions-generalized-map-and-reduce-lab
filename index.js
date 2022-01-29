// generalized map
const map = function(array, callback){
    let newArray = []
    for( let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}
// Solution:
    // function map(src, callback) {
    //     const r = [];
    
    //     for (let i = 0; i < src.length; i++) {
    //       const theElement = src[i];
    //       r.push(callback(theElement));
    //     }
    
    //     return r;
    //  }


// generalized reduce
function reduce(array, callback, startingValue) {
    
    if (startingValue) {
        let total = startingValue
        for (let i = 0; i < array.length; i++) {
            total = callback(array[i], total)
        }
        return total 
    } 
    else {
        let value = array[0] //to set it as a value, not array
        for (let i = 1; i < array.length; i++) {
            value = callback(array[i], value)
        }
        return value
    }
}
// Solution: 
    // function reduce(array, callback, startingValue) {
    //     let total;
    //     if (startingValue) {
    //       total = startingValue;
    //       for (let i = 0; i < array.length; i++) {
    //         total = callback(array[i], total);
    //       }
    //       return total;
    //     } else {
    //       total = array[0];
    //       for (let i = 1; i < array.length; i++) {
    //         total = callback(array[i], total);
    //       }
    //       return total;
    //     }
    //   }



