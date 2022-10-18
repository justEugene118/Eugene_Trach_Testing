
const digital_root = (n) => {
    if ( typeof n !== 'number'){
        return 'Wrong input';
    }

    let len = n.toString().length;
    let result = 0;

    for ( let i = 0; i < len; i++ ){
        result += Number( n.toString()[i] );
    }

    if ( result >= 10 ){
        console.log(result)
        result = digital_root(result);
    }

    return result;
}

console.log("task 3: digital_root( number )")