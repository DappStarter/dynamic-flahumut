require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note often method half problem front truth'; 
let testAccounts = [
"0x65a63995e1007c096331427e8775ed3742cce7fc2695faf4be1f21a2f91146f0",
"0xf89c1f2cc35d13f42bea4a6585e665c08201b82398ed8dc901d62aa2418d1336",
"0xeba06c591fd99710c59163ce3367abe03da509f9f9790c26049d5f7b4dd58086",
"0x0cf0af0039caaad0e3cabceda0317084454c4d26560136d5142b07b39ec6a7f2",
"0x55233fa299e0d1d70f9dd4d1783fb3f40c9bca85e9a32d5d809997684e0b90ac",
"0xb43cdf664ea2b9f82875c3074a1c1fb1ab6c7e6dcd1ae5866d65746b301e84fc",
"0xf949b73b7216a3fd306ef46b5f8fdf4464fc7120ce560b932e1a217dfe7291c1",
"0xab503dd9895cacba8eedb4c9782e2265a22deed41d2cb6a365e579d71d881b0e",
"0xb38b934748b2d71aa2567e0e9d21a6299cc497e7f0f38c95273304a24fba4307",
"0x414bcca1af53597293919f929913accac445164e9fe3a2b2295b97782c093d2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
