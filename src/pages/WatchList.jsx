import { useContext, useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import { Button } from "../components/Common";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

function WatchList() {
  const [watchlistCoins, setWatchlistCoins] = useState([]);
  const { coins } = useContext(CoinContext);

  const fetchWatchlistCoins = () => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      if (watchlist.length > 0) {
        const filteredCoins = coins.filter((coin) =>
          watchlist.includes(coin.id)
        );
        setWatchlistCoins(filteredCoins);
      } else {
        setWatchlistCoins([]);
      }
    } catch (err) {
      console.error("Error processing watchlist:", err);
    }
  };

  useEffect(() => {
    if (coins.length > 0) {
      fetchWatchlistCoins();
    }
  }, [coins, watchlistCoins]);

  return (
    <div>
      {watchlistCoins?.length > 0 ? (
        <Tabs coins={watchlistCoins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The WatchList.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to="/dashboard">
              <Button text="Dashboard" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchList;
