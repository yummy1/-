// var CryptoJS = require('../utils/CryptoJS/core.js')
// require('../utils/CryptoJS/mode-ecb.js')
// require('../utils/CryptoJS/tripledes.js')

// /** 
// * 3DES加密，ECB/PKCS5Padding
// */
// function encrypt(input) {
//   var keyHex = CryptoJS.enc.utf8.parse('fTZqeicURs4AFZUIAmGCsCfI');
//   var encrypted = CryptoJS.TripleDES.encrypt(input, keyHex, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   console.log(encrypted);
//   return encrypted.ciphertext.tostring();
// }

// /** 
// * 3DES解密，ECB/PKCS5Padding
// */
// function decrypt(res) {
//   console.log('解密');
//   var keyhex = CryptoJS.enc.utf8.parse('fTZqeicURs4AFZUIAmGCsCfI');
//   var decrypted = CryptoJS.des.decrypt({
//     ciphertext: CryptoJS.enc.hex.parse(res)
//   }, keyhex, {
//       mode: CryptoJS.mode.ecb,
//       padding: CryptoJS.pad.pkcs7
//     });
//   var result_value = decrypted.tostring(cryptojs.enc.utf8);
//   return result_value;
// }

// module.exports = {
//   encrypt: encrypt,
//   decrypt: decrypt
// }
