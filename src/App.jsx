import { Pages } from "./components/pages/Pages";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
