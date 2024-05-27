import React from "react";
import "./../../App.css";
function Trading() {
  return (
    <div className="trading">
      <div className="trading__pills">
        <div className="trading__pill trading__pill--active">
          <div className="trading__chart">Chart</div>
        </div>
        <div className="trading__pill">
          <div className="trading__orderbook">Orderbook</div>
        </div>
        <div className="trading__pill">
          <div className="trading__recent">Recent trades</div>
        </div>
      </div>
      <div className="trading__time">
        <div className="trading__time-label">Time</div>
        <div className="trading__period">
          <div className="trading__period-unit">
            <div className="trading__period-text">1H</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">2H</div>
          </div>
          <div className="trading__period-unit ">
            <div className="trading__period-text">4H</div>
          </div>
          <div className="trading__period-unit trading__period-unit--active">
            <div className="trading__period-text">1D</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">1W</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">1M</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">1M</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">1M</div>
          </div>
          <div className="trading__period-unit">
            <div className="trading__period-text">1M</div>
          </div>
        </div>
      </div>
      <div className="trading__spacing">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.15829 10.6583L3.33329 15.4916V14.1666C3.33329 13.9456 3.2455 13.7337 3.08922 13.5774C2.93293 13.4211 2.72097 13.3333 2.49996 13.3333C2.27895 13.3333 2.06698 13.4211 1.9107 13.5774C1.75442 13.7337 1.66663 13.9456 1.66663 14.1666V17.5C1.66794 17.6089 1.69059 17.7164 1.73329 17.8166C1.81786 18.0203 1.97967 18.1821 2.18329 18.2666C2.28348 18.3093 2.39106 18.332 2.49996 18.3333H5.83329C6.05431 18.3333 6.26627 18.2455 6.42255 18.0892C6.57883 17.9329 6.66663 17.721 6.66663 17.5C6.66663 17.2789 6.57883 17.067 6.42255 16.9107C6.26627 16.7544 6.05431 16.6666 5.83329 16.6666H4.50829L9.34163 11.8416C9.49855 11.6847 9.5867 11.4719 9.5867 11.25C9.5867 11.028 9.49855 10.8152 9.34163 10.6583C9.18471 10.5014 8.97188 10.4132 8.74996 10.4132C8.52804 10.4132 8.31521 10.5014 8.15829 10.6583ZM18.2666 2.18329C18.1821 1.97967 18.0203 1.81786 17.8166 1.73329C17.7164 1.69059 17.6089 1.66794 17.5 1.66663H14.1666C13.9456 1.66663 13.7337 1.75442 13.5774 1.9107C13.4211 2.06698 13.3333 2.27895 13.3333 2.49996C13.3333 2.72097 13.4211 2.93293 13.5774 3.08922C13.7337 3.2455 13.9456 3.33329 14.1666 3.33329H15.4916L10.6583 8.15829C10.5802 8.23576 10.5182 8.32793 10.4759 8.42948C10.4336 8.53103 10.4118 8.63995 10.4118 8.74996C10.4118 8.85997 10.4336 8.96889 10.4759 9.07044C10.5182 9.17199 10.5802 9.26416 10.6583 9.34163C10.7358 9.41973 10.8279 9.48173 10.9295 9.52404C11.031 9.56634 11.1399 9.58812 11.25 9.58812C11.36 9.58812 11.4689 9.56634 11.5704 9.52404C11.672 9.48173 11.7642 9.41973 11.8416 9.34163L16.6666 4.50829V5.83329C16.6666 6.05431 16.7544 6.26627 16.9107 6.42255C17.067 6.57883 17.2789 6.66663 17.5 6.66663C17.721 6.66663 17.9329 6.57883 18.0892 6.42255C18.2455 6.26627 18.3333 6.05431 18.3333 5.83329V2.49996C18.332 2.39106 18.3093 2.28348 18.2666 2.18329Z"
            fill="#A7B1BC"
          />
        </svg>
      </div>
      <div className="trading__buttons"></div>
    </div>
  );
}

export default Trading;
