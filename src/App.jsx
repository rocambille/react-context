import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { MyContextProvider } from "./contexts/myContext";
import { MyToggleContextProvider } from "./contexts/myToggleContext";

function App() {
  return (
    <MyToggleContextProvider>
      <MyContextProvider>
        <div className="App">
          <Home />
          <About />
        </div>
      </MyContextProvider>
    </MyToggleContextProvider>
  );
}

export default App;
