import React from "react";
import "./topButton.css";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
function TopButton() {
  // Get the button
  let myButton = document.getElementById("top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      myButton.style.display = "flex";
    } else {
      myButton.style.display = "none";
    }
  }
  return (
    <div
      className="top-btn"
      id="top-btn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <ArrowCircleUpRoundedIcon />
    </div>
  );
}

export default TopButton;
