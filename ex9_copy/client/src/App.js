// CSS and other resources
import "./App.css";

// Components

import Header from "./Header";
import Main from "./Main"
import Siderbar from "./Sidebar";
import Footer from "./Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Siderbar />
      <Footer />
    </div>
  );
}


export default App;

