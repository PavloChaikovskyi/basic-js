const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const LATIN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (LATIN_ALPHABET.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const offset = LATIN_ALPHABET.indexOf(char) + LATIN_ALPHABET.indexOf(keyChar);
        const encodedChar = LATIN_ALPHABET[offset % LATIN_ALPHABET.length];
        result += encodedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (LATIN_ALPHABET.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const offset = LATIN_ALPHABET.indexOf(char) - LATIN_ALPHABET.indexOf(keyChar);
        const decodedChar = LATIN_ALPHABET[(offset + LATIN_ALPHABET.length) % LATIN_ALPHABET.length];
        result += decodedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
