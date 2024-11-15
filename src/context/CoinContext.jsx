import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const fetchMarketData = async () => {
    try {
      const response = await axios.get(
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      setError("Error fetching market data");
      setLoading(false);
      console.error("Error fetching market data:", error);
    }
  };

  const handlePageChange = (event, value) => {
    // putting event here cause MUI gives error if not here
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  const getCoinData = (id, setError) => {
    const coin = axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((e) => {
        console.log(e.message);
        if (setError) {
          setError(true);
        }
      });

    return coin;
  };

  const getPrices = (id, days, priceType, setError) => {
    const prices = axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
      .then((response) => {
        if (response.data) {
          console.log("Prices>>>", response.data);
          if (priceType == "market_caps") {
            return response.data.market_caps;
          } else if (priceType == "total_volumes") {
            return response.data.total_volumes;
          } else {
            return response.data.prices;
          }
        }
      })
      .catch((e) => {
        console.log(e.message);
        if (setError) {
          setError(true);
        }
      });

    return prices;
  };

  return (
    <CoinContext.Provider
      value={{
        fetchMarketData,
        coins,
        loading,
        error,
        handlePageChange,
        page,
        paginatedCoins,
        getCoinData,
        getPrices,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
