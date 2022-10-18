
const count_pairs = (arr, target) => {
    if ( typeof arr !== 'object' || typeof target !== 'number'){
        return 'Wrong input';
    }
    let counter = 0

    for ( let i = 0; i < arr.length-1; i++ ){
        for ( let k = i+1; k < arr.length; k++ ){
            if (arr[i] + arr[k] === target) {
                counter++;
            }
        }
    }

    return counter;
}

console.log("task 4: count_pairs( array, target )")