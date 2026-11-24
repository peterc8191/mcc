import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import ProjectsListing from "./pages/projects-listing";
import NotFound from "./pages/not-found";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<ProjectsListing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
