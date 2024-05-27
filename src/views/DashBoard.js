import React from "react";
import TopBar from "./../components/organism/TopBar";
import TopInfo from "./../components/organism/TopInfo";
import Trading from "./../components/organism/Trading";
import Order from "./../components/organism/Order";
import OpenOrder from "./../components/organism/OpenOrder";
import BuyAndSell from "./../components/organism/BuyAndSell";

function DashBoard() {
  return (
    <>
      <TopBar />
      <TopInfo />
      <Trading />

      <OpenOrder />
    </>
  );
}

export default DashBoard;
