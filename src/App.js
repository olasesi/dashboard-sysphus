import react from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Box from "./components/atoms/box/Box";

import DashBoard from "./views/DashBoard";

function App() {
  return (
    <>
      <div class="container">
      
        {/* <div className="content0">
        <div className="content1">
          <div className="content2">
            <div className="__trading">
              <Trading />
            </div>
            <div className="__order">
              <Order />
            </div>
          </div>
          <div>
            <BG />
          </div>
        </div>
        <div className="__buyandsell">
          <BuyAndSell />
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/auth" element={<Auth />} key="auth" />
      </Routes>
      </div>

    </>
  );
}

export default App;
