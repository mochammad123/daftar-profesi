import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfessionList from "./components/ProfessionList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfessionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
