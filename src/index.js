const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseCode = [];
    let result = [];
    for (let i = 0; i < expr.length; i+=10) {
        if (expr.slice(i, 10+i).includes('**********')) {
            morseCode.push(' ')
        } else {
            for (j = 0; j < 10; j+=2) {
                if (expr.slice(i, 10+i).substring(j, j+2) === '10') {
                    morseCode.push('.')
                } else if (expr.slice(i, 10+i).substring(j, j+2) === '11') {
                    morseCode.push('-')
                }
            }
        }
        (MORSE_TABLE[morseCode.join('')] === undefined ? result.push(' ') : result.push(MORSE_TABLE[morseCode.join('')]))
        morseCode = [];
    }
    return result.join('');
}

module.exports = {
    decode
}