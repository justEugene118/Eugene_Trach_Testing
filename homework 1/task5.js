let string = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

const sort = (string) => {
    if ( typeof string !== 'string'){
        return 'Wrong input';
    }

    let array = string.split(';'), guest_array = [];

    array.forEach( guest => {
        let container = {
            first_name: guest.split(':')[0],
            last_name: guest.split(':')[1],
        };
        guest_array.push( container );
    })

    let compare_function = (a, b) => {
        if ( a.last_name > b.last_name ){ return 1 }
        if ( a.last_name < b.last_name ){ return -1 }
        if ( a.last_name === b.last_name ){
            if ( a.first_name > b.first_name ){ return 1 }
            if ( a.first_name < b.first_name ){ return -1 }

            else return 0;
        }
    }
    guest_array.sort( compare_function );

    let return_string = ``
    guest_array.forEach( guest =>
        return_string += `(${guest.last_name.toUpperCase()}, ${guest.first_name.toUpperCase()}) `
    )

    return( return_string )
}

console.log('task 5: sort( string )')