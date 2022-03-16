import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Consortium from "./views/Consortium";
import Auto from "./views/Auto";
import Bail from "./views/Bail";
import Life from "./views/Life";
import Pet from "./views/Pet";
import Residential from "./views/Residential";
import Travel from "./views/Travel";

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Consortium />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/bail" element={<Bail />} />
        <Route path="/life" element={<Life />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </Router>
  );
}
