import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Page from "./components/Page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Page />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
