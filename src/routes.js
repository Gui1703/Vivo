import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Consortium from "./views/Consortium";
import Auto from "./views/Auto";
import Bail from "./views/Bail";
import Life from "./views/Life";
import Pet from "./views/Pet";
import Residential from "./views/Residential";
import Tavel from "./views/Tavel";

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Consortium />} />
        <Route path="/register" element={<Auto />} />
        <Route path="/register" element={<Bail />} />
        <Route path="/register" element={<Life />} />
        <Route path="/register" element={<Pet />} />
        <Route path="/register" element={<Residential />} />
        <Route path="/register" element={<Tavel />} />
      </Routes>
    </Router>
  );
}
