import About from "./components/about/About";
import Artwork from "./components/community/Artwork";
import Broadcasts from "./components/community/Broadcasts";
import Community from "./components/community/Community";
import ScreenShots from "./components/community/Screenshots";
import Videos from "./components/community/Videos";
import Game from "./components/game/Game";
import Homecarousle from "./components/homecarousle/Homecarousle";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import "./components/homepage/home.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="community" element={<Community />} />
          <Route path="/Homecarousle" element={<Homecarousle />} />
          <Route path="/About" element={<About />} />
          <Route path="/Screenshot" element={<ScreenShots />} />
          <Route path="/Artwork" element={<Artwork />} />
          <Route path="/Broadcasts" element={<Broadcasts />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
