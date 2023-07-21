import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Stream from "./pages/Stream"
import Notifications from "./pages/Notifications"
import Search from "./pages/Search"
import {Routes , Route } from "react-router-dom" 

function App() {
  return (
    <div className="App">
      <Header />
        <Routes> 
          <Route path="/" element={<Stream />} /> 
          <Route path="/notifications" element={<Notifications /> } /> 
          <Route path="/search" element={ <Search />}/>
        </Routes> 
      <Navbar />
    </div>
  );
}

export default App;
