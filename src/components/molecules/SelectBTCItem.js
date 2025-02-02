import React from "react";
import "./../../App.css";
import GroupImage from "./../../assets/images/group237550.png";

function SelectBTCItem({
  isOpen,
  selectedItem,
  items,
  toggleDropdown,
  handleItemClick,
}) {
  return (
    <>
      <div className="topinfo__dropdown">
        <div className="topinfo__label" onClick={toggleDropdown}>
          <div className="topinfo__icon-text">
            <div className="topinfo__icon-container">
              <img src={GroupImage} alt="btc-icon" />
            </div>
            <div className="topinfo__text">{selectedItem}</div>
          </div>
          <div className="topinfo__caret">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51885 11.079C7.01371 9.93624 5.50514 8.79729 4 7.65455C4.01029 6.74339 4.02399 5.83224 4.03428 4.92108L8.69081 8.4682L12.9931 4.93248C12.9931 5.39565 12.9931 5.85503 12.9966 6.3182C12.9966 6.78137 12.9966 7.24073 13 7.7039C11.5017 8.82766 10.0103 9.95142 8.51885 11.079Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="topinfo__menu">
          {items.map((item) => (
            <div
              key={item}
              className="topinfo__menu-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectBTCItem;
