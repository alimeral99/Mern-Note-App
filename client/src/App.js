import "./App.css";
import Header from "./Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h1>hello world</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
