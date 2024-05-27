import React from "react";
import "./../../App.css";
function OpenOrder() {
  return (
    <div className="tabs">
      <div className="tabs__container">
        <div className="tabs__tabs-container">
          <div className="tabs__tab tabs__tab--active">
            <div className="tabs__inner-divider">Open Orders</div>
          </div>
          <div className="tabs__tab">
            <div className="tabs__inner-divider">Positions</div>
          </div>
          <div className="tabs__tab">
            <div className="tabs__inner-divider">Order History</div>
          </div>
        </div>
        <div className="tabs__text-container">
          <h2 className="tabs__header">No Open Orders</h2>
          <p className="tabs__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
            nullam sit imperdiet pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenOrder;
