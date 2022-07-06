const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const msg = 'WR';
const arrayMsg = msg.split('');
console.log(arrayMsg);
console.log(alphabet.indexOf('Z')); 

/*
for (let c = 1; c <= 50; c++) {
    for (let i = 0; i < arrayMsg.length; i++) {
        let index = alphabet.indexOf(arrayMsg[i]);
        console.log(alphabet[index+c]);
    }
}
*/

for (let c = 1; c <= 50; c++) {
    let index = [];
    for (let i = 0; i < arrayMsg.length; i++) {
        index.push(alphabet[alphabet.indexOf(arrayMsg[i])+c]);
    }
    let msgDec = index.toString();
    console.log(msgDec);
    
}

