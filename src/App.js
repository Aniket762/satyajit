import './App.css';
import Home from "./pages/home/home";
import Photos from "./pages/photos/photos";
import NavBar from "./components/NavBar/navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
