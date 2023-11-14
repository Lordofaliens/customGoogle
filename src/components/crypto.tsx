import React, { useEffect, useState } from 'react';
import { ICryptoProps } from '../Interfaces/IProps';
import Citation from './citation';
import ICrypto from "../Interfaces/ICrypto";

export let cryptoDataShare: string[] = [];
const Crypto: React.FC<ICryptoProps> = ({handleOverlayVisibility,purpose}) => {
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const symbolToRenderString = localStorage.getItem("crypto");
        const symbolToRenderStringParsed: string[] = symbolToRenderString ? JSON.parse(symbolToRenderString) : [];
        cryptoDataShare = symbolToRenderStringParsed;
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.binance.com/api/v3/ticker/price');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                // Filter the data based on symbols present in symbolToRenderStringParsed
                const filteredData: { name: string, price: string }[] = [];
                for (const item of data) {
                    if (cryptoDataShare.includes(item.symbol)) { // Assuming 'symbol' is the property to check
                        const formattedPrice = typeof item.price === 'string' ? parseFloat(item.price).toFixed(2) : item.price;
                        console.log(item.symbol)
                        filteredData.push({ name: item.symbol, price: formattedPrice });
                    }
                }


                console.log(filteredData)
                setCryptoData(filteredData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRemoveCrypto = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); // Stop event propagation
        const updatedCrypto = cryptoData.filter((_, idx) => idx !== index);
        console.log(updatedCrypto)
        setCryptoData(updatedCrypto);
        cryptoDataShare = updatedCrypto.map((item : ICrypto) => item.name);
        localStorage.setItem('crypto', JSON.stringify(updatedCrypto.map((item : ICrypto) => item.name)));
    };

    return (
        <div className="MainLeft">
            <Citation text={'Crypto Hub'} />
            {!error ? (
                <div className="cryptoContainer">
                    {loading && <p>Loading...</p>}
                    {!loading && cryptoData.length > 0 ? (
                        cryptoData.map((coin: any, index: number) => (
                            <div key={index} className="cryptoDiv cryptoNotAdd">
                                <span>{coin.name}</span>
                                <span>{coin.price}<button className="removeBtn" onClick={(e) => handleRemoveCrypto(index, e)}>✖</button></span>
                            </div>
                        ))
                    ) : (
                        !loading && <p>No crypto data available.</p>
                    )}
                    <div className="cryptoDiv cryptoDivAdd" key="addCryptoDivAddBtn" onClick={()=>{handleOverlayVisibility(true); purpose("crypto")}}>
                        <button className="addCryptoBtn">
                            <img src='./icons/icons8-add-100.png' alt={"addCryptoBtn"}/>
                        </button>
                    </div>
                </div>
            ) : (
                <p>Error fetching crypto data.</p>
            )}
        </div>
    );
};

export default Crypto;

