const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5");

if ( elements ) {
    elements.forEach(( elm ) => {
        elm.innerText = encode(elm.textContent);
        elm.style.wordBreak = 'break-all';
    })
}

function encode( text ) {
    let result = [];
    let charArray = text.split('');

    charArray.map( ( character ) => {
        if ( character === ' ' ) {
            result.push( character );
        } else {
            const binaryArray = encodeToBinary( character ).split('');
            result.push( binaryArray.map(( str ) => str === '1' ? 'e' : 'E' ).join(''));
        }
    });

    return result.join('');
}

function encodeToBinary( char, padding = 16 ) {
    return char.charCodeAt(0).toString(2).padStart( padding, '0');
}
