
const first_non_repeating_letter = (string) => {
    if ( typeof string !== 'string'){
        return 'Wrong input';
    }

    let repeating_array = [],  letter_array = string.split(''), unique_index = -1;

    for ( let i = 0; i < letter_array.length; i++ ){
        if ( repeating_array.includes( letter_array[i] ) ){
            continue;
        }
        unique_index = i;
        for ( let k = i+1; k < letter_array.length; k++ ){
            if ( letter_array[i].toUpperCase() === letter_array[k].toUpperCase() ){
                repeating_array.push(letter_array[i]);
                unique_index = -1;
                break;
            }
        }

        if ( unique_index === i ){
            return letter_array[i];
        }
    }

    return '';
}

console.log('task 2: first_non_repeating_letter( string )')
