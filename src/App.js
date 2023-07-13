import './App.css';
import Navbar from "./components/Navbar"
import Stream from "./components/Stream"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Stream />
      <Navbar />
    </div>
  );
}

export default App;
