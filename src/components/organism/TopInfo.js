import React, { useState } from "react";
import "./../../App.css";
import GroupImage from "./../../assets/images/group237550.png";
import SelectBTCItem from "../molecules/SelectBTCItem";

function TopInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("BTC/USDT");

  const items = [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="topinfo">
      <div className="topinfo__upper-section">
        <SelectBTCItem
          isOpen={isOpen}
          selectedItem={selectedItem}
          items={items}
          toggleDropdown={toggleDropdown}
          handleItemClick={handleItemClick}
        />

        <div className="topinfo__amount">$20,634</div>
      </div>

      <div className="topinfo__lower-section">
        <div className="topinfo__content">
          <div className="topinfo__outer">
            <div className="topinfo__changes">
              <div className="topinfo__icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00004C13.3333 5.05452 10.9455 2.66671 7.99998 2.66671C5.05446 2.66671 2.66665 5.05452 2.66665 8.00004C2.66665 10.9456 5.05446 13.3334 7.99998 13.3334ZM7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
                    fill="#A7B1BC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 4C8.36817 4 8.66665 4.29848 8.66665 4.66667V7.72386L10.1381 9.19526C10.3984 9.45561 10.3984 9.87772 10.1381 10.1381C9.8777 10.3984 9.45559 10.3984 9.19524 10.1381L7.52858 8.4714C7.40355 8.34638 7.33331 8.17681 7.33331 8V4.66667C7.33331 4.29848 7.63179 4 7.99998 4Z"
                    fill="#A7B1BC"
                  />
                </svg>
              </div>
              <div className="topinfo__value">24h change</div>
            </div>
            <div className="topinfo__value-rate topinfo__value-rate--success">
              520.80 +1.25%
            </div>
          </div>
        </div>

        <div className="topinfo__content">
          <div className="topinfo__outer">
            <div className="topinfo__changes">
              <div className="topinfo__icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.1565 6.606C11.4062 6.33545 11.3894 5.91368 11.1188 5.66394L8.78553 3.51009C8.53015 3.27436 8.13653 3.27436 7.88115 3.51009L5.54779 5.66394C5.27724 5.91367 5.26037 6.33544 5.51011 6.60599C5.75984 6.87654 6.18161 6.89341 6.45216 6.64368L7.66667 5.5226L7.66667 12C7.66667 12.3681 7.96515 12.6666 8.33333 12.6666C8.70152 12.6666 9 12.3681 9 12L9 5.52263L10.2145 6.64367C10.485 6.89341 10.9068 6.87654 11.1565 6.606Z"
                    fill="#A7B1BC"
                  />
                </svg>
              </div>
              <div className="topinfo__value">24h high</div>
            </div>
            <div className="topinfo__value-rate">520.80 +1.25%</div>
          </div>
        </div>

        <div className="topinfo__content">
          <div className="topinfo__outer">
            <div className="topinfo__changes">
              <div className="topinfo__icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4899 9.394C10.7396 9.66455 10.7228 10.0863 10.4522 10.3361L8.1189 12.4899C7.86353 12.7256 7.4699 12.7256 7.21453 12.4899L4.88117 10.3361C4.61062 10.0863 4.59374 9.66456 4.84348 9.39401C5.09321 9.12346 5.51499 9.10659 5.78553 9.35632L7.00004 10.4774L7.00004 4.00004C7.00004 3.63185 7.29852 3.33337 7.66671 3.33337C8.0349 3.33337 8.33338 3.63185 8.33338 4.00004L8.33338 10.4774L9.54783 9.35633C9.81837 9.10659 10.2401 9.12346 10.4899 9.394Z"
                    fill="#A7B1BC"
                  />
                </svg>
              </div>
              <div className="topinfo__value">24h low</div>
            </div>
            <div className="topinfo__value-rate">520.80 +1.25%</div>
          </div>
        </div>

        <div className="topinfo__content">
          <div className="topinfo__outer">
            <div className="topinfo__changes">
              <div className="topinfo__icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4899 9.394C10.7396 9.66455 10.7228 10.0863 10.4522 10.3361L8.1189 12.4899C7.86353 12.7256 7.4699 12.7256 7.21453 12.4899L4.88117 10.3361C4.61062 10.0863 4.59374 9.66456 4.84348 9.39401C5.09321 9.12346 5.51499 9.10659 5.78553 9.35632L7.00004 10.4774L7.00004 4.00004C7.00004 3.63185 7.29852 3.33337 7.66671 3.33337C8.0349 3.33337 8.33338 3.63185 8.33338 4.00004L8.33338 10.4774L9.54783 9.35633C9.81837 9.10659 10.2401 9.12346 10.4899 9.394Z"
                    fill="#A7B1BC"
                  />
                </svg>
              </div>
              <div className="topinfo__value">24h low</div>
            </div>
            <div className="topinfo__value-rate">520.80 +1.25%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopInfo;
