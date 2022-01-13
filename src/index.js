module.exports = function toReadable (number) {
    const numberToWordMap = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    };
  
    const unit = number % 10;
    const ten = (number - unit) % 100;
    const hundred = number - unit - ten;
    
    switch (String(number).length) {
        case 3:
            if (String(number)[1] === '1') {
                return `${numberToWordMap[hundred / 100]} hundred ${numberToWordMap[ten + unit]}`;
            } else {
                return `${numberToWordMap[hundred / 100]} hundred${(ten === 0) ? '' : ' ' + numberToWordMap[ten]}${(unit === 0) ? '' : ' ' + numberToWordMap[unit]}`;
            }
        case 2:
            if (String(number)[0] === '1') {
                return `${numberToWordMap[ten + unit]}`;
            } else {
                return `${numberToWordMap[ten]}${(unit === 0) ? '' : ' ' + numberToWordMap[unit]}`;
            }
        case 1:
            return numberToWordMap[unit];
    }
}
