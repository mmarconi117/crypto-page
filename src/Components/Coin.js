import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Coin.css";

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/CoinPage/${id}`);
  };

  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={icon} alt={coinName} className="coinIcon" />
            <h1 className="coinName">{coinName}</h1>
            <p className="coinSymbol">{coinSymbol}</p>
            <p className="coinPrice">$ {price.toFixed(2)}</p>
            <p className={priceChange < 0 ? "priceChange red" : "priceChange green"}>
              {priceChange.toFixed(2)}%
            </p>
            <p className="coinVolume">$ {marketCap.toLocaleString()}</p>
            <button className="moreInfoButton" onClick={handleMoreInfo}>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
