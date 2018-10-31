// one-liner function that auto-detects whether an input string is in RGB or HEX color format and converts to the other accordingly
// examples of valid input for str is 'fe0877' for hex and '243, 0, 127' for RGB
const rgbHexConverterPro = (str) => str.includes(',') ? str.split(', ').map(byte => (~~(parseInt(byte)/16)).toString(16) + (parseInt(byte) - 16 * ~~(parseInt(byte)/16)).toString(16)).join('') : str.match(/.{2}/g).map(byte => Array.from(byte).reduce((acc, char, index) => acc += (index === 0) ? 16 * parseInt(char, 16) : 1 * parseInt(char, 16), 0));
