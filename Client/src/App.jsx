import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Pages/Dashboard";
import Problems from "./Pages/Problems";
import TopicProblems from "./Pages/TopicProblems";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:topicName" element={<TopicProblems />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
