
const filter_list = ( [list] ) => {
    if ( typeof list === "object" ){
        return list.filter( item => typeof item === "number" );
    } else {
        return 'Wrong input';
    }
}

console.log('Available functions names:')
console.log('task 1: filter_list( list )')
