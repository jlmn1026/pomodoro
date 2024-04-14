import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import MainLayout from "./components/layouts/MainLayout";
import RecordPage from "./pages/RecordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<RecordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
