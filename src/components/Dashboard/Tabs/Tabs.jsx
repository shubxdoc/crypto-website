import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./tabs.css";
import Grid from "../Grid/Grid";
import List from "../List/List";

export default function Tabs({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="GRID" value="grid" sx={style} />
          <Tab label="LIST" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => (
              <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list" sx={style}>
          <div className="list-flex">
            {coins.map((coin, i) => (
              <List coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
