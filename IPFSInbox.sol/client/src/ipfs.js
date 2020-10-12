const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', 
    port: 7545,protocol: 'https' });export default ipfs;
