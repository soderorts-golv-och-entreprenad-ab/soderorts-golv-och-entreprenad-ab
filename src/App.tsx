import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./views/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
