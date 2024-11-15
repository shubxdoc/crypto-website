import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Common";
import { Home, Dashboard, CoinPage, WatchList } from "./pages";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <>
      <div className="App">
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/coin/:id" element={<CoinPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
