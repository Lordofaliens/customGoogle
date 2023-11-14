import ICrypto from "../Interfaces/ICrypto";
import axios from 'axios';
import {cryptoDataShare} from "../components/crypto";

// const apiKey = '9FF109E0-43B9-4AE8-A602-DA6B15973484';
// const apiKey = '4BE120B7-D2FB-40A5-A5C6-C018DD683DA4';
// const apiKey = '8A4B11DA-AA49-4409-9C83-77C4EFE9E6AA';
// async function getCoinData( coinName : string) {
//     try {
//         const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${coinName.toUpperCase()}/USD`, {
//             headers: {
//                 'X-CoinAPI-Key': apiKey,
//             },
//         });
//
//         const price : number = parseFloat(response.data.rate.toFixed(2));
//         const parsedObject : ICrypto = {name: coinName, price: price};
//         return parsedObject;
//     } catch (error) {
//         console.error('Error fetching coin data.');
//     }
// }

function addCryptoButtonHandler(name : string) {
    cryptoDataShare.push(name.toUpperCase());
    console.log(cryptoDataShare)
    localStorage.setItem('crypto',JSON.stringify(cryptoDataShare));
    window.location.reload();
}

export {addCryptoButtonHandler};