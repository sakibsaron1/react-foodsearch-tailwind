import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
