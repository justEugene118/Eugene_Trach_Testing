const make_ip = ( num ) => {
    if ( typeof num !== 'number'){
        return 'Wrong input';
    }

    return `${num >>> 24 & 0xFF}.${num >>> 16 & 0xFF}.${num >>> 8 & 0xFF}.${num & 0xFF}`
}

console.log('additional task 2: make_ip( number )')