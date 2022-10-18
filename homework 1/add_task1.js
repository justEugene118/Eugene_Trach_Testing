
const next_bigger = ( num ) => {
    if ( typeof num !== 'number'){
        return 'Wrong input';
    }

    let num_array = num.toString().split(''), buff_array = [];

    if( num < 11 ){
        return -1;
    }

    const swap_and_push = (a, b) => {
        let num_copy = [...num_array], cont = num_copy[a];

        num_copy[a] = num_copy[b];
        num_copy[b] = cont;
        buff_array.push(Number(num_copy.join('')));
    }

    for ( let i = num_array.length-1; num_array.indexOf(num_array[i]) !== -1; i-- ){
        for( let k = i-1; num_array.indexOf(num_array[k]) !== -1; k-- ) {
            if ( Number(num_array[i]) > Number(num_array[k]) ) {
                swap_and_push(i, k);
            }
        }
    }

    Array.prototype.min = function() {
        return Math.min.apply(null, this);
    };

    if (buff_array.length > 0) {
        return buff_array.min();
    } else {
        return -1;
    }
}

console.log('additional task 1: next_bigger( number )')