import {cryptoDataShare} from "../components/crypto";

function addCryptoButtonHandler(name : string) {
    cryptoDataShare.push(name.toUpperCase());
    console.log(cryptoDataShare)
    localStorage.setItem('crypto',JSON.stringify(cryptoDataShare));
    window.location.reload();
}

export {addCryptoButtonHandler};