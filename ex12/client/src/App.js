import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Header from "./Header";
import Sidebar from "./Sidebar.js";
import LandingView from "./Main.js";
import SecondDataView from "./SecondDataView.js";
import ThirdDataView from "./ThirdDataView.js";
import Footer from "./Footer";

// Data

import { MAIN_DATA } from "./data.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="SecondDataView" element={<SecondDataView />}></Route>
          <Route path="ThirdDataView" element={<ThirdDataView />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;