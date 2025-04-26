import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Communitynav = () => {
  return (
    <>
      <nav className="text-center text-white">
        <h3 className="fs-1 m-3">Community Activity</h3>
        <p className="fs-5">
          Community and offical content for all games and software on Steam.
        </p>
        <div className="d-flex gap-5 justify-content-center ">
          <Link to="/Screenshot" className="text-white text-decoration-none">
            ScreenShots
          </Link>
          <Link to="/Artwork" className="text-white text-decoration-none">
            Artwork
          </Link>
          {/* <Link to="/Broadcasts" className="text-white text-decoration-none">
            Broadcasts
          </Link>
          <Link to="/Videos" className="text-white text-decoration-none">
            Videos
          </Link> */}
        </div>
      </nav>
    </>
  );
};
export default Communitynav;
