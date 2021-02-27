import './App.css';
import Home from "./pages/home/home";
import Photos from "./pages/photos/photos";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
