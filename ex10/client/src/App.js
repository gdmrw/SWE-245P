import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Header from "./Header";
import Sidebar from "./Sidebar.js";
import LandingView from "./Main.js";
import ExampleDataView from "./SecondDataView.js"
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
          <Route path="exampledataview" element={<ExampleDataView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;