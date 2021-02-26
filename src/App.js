import "./App.css";

// rotes
import Routes from "src/routes";

// components
import MenuBar from "src/components/Menu";

function App() {
  return (
    <div className="App">
        <MenuBar />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
