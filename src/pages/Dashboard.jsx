import { useContext, useState } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import { CoinContext } from "../context/CoinContext";
import Search from "../components/Dashboard/Search/Search";
import PaginationComp from "../components/Dashboard/PaginationComp/PaginationComp";
import { Loader, TopButton } from "../components/Common";

const Dashboard = () => {
  const { coins, loading, error, page, handlePageChange, paginatedCoins } =
    useContext(CoinContext);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredCoins = coins.filter((currCoin) =>
    currCoin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error)
    return (
      <h1 style={{ textAlign: "center", height: "80vh", paddingTop: "150px" }}>
        Sorry, Couldn't find the coin you're looking for 😞
      </h1>
    );

  console.log(coins);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />
          <TopButton />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComp page={page} handlePageChange={handlePageChange} />
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
