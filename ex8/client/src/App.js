// CSS and other resources
import logo from "./logo.svg";
import "./App.css";

// Components

import Header from "./Header";
import Footer from "./Footer"
import SiderbarContent from "./SidebarContent";
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <SiderbarContent />
    </div>
  );
}


export default App;

