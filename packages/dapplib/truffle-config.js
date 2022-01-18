require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strong riot sister collect hunt fork swear gasp'; 
let testAccounts = [
"0xb3ba16d99167de8025f58487ef1739e24bcc1ec3d31bb639fac3e3e7ba0a9f50",
"0x475acebd3c3538e5e24e2b98967219a912a09e9e443c7245b1ba240eac4a9973",
"0xf08240323a859f9ced54fb98d19f73930f46df39c6a4cd256d6310704c4acb98",
"0xecea1b37f0c53bc6d90c35e5dd0b3e52c632001df244e76aae18606e74f304f0",
"0x1b9cc7bbef6fef824e20302aaf96ad1e3bd224af14be8b13c11e712f79ad1616",
"0xa981894e5924f0d2d57d79a43829eafbeaba18248fbcf9cb5632a649e5b713be",
"0x7ee1b215733afd2522090e2a78b3db77aaa2f562a37c40210566dc3eb1eea051",
"0x0df87dd6064e49bf430190284c5d6dc46b1bf5d87e4c7715243bd02272ff1ec0",
"0xb16f5d1f8c5718ca51d815dc02686eaaf68a15d042a2b2b13c67470977511626",
"0xb48b59cce236c70a23e1a082a122ca5efea4a6ad7f31b7e1dfcf9e582c93c98e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


