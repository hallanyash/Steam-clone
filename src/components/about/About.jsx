import Navbar from "../navbar/Navbar";
import video from "../about/video.mp4";
import { FaChrome, FaSteam } from "react-icons/fa";
import img1 from "../../assets/hero_community_pt2.png";
import Footer from "../Footer/Footer";
import img2 from "../about/cta_hero_community_pt3.png";
import img3 from "../about/cta_hero_hardware_pt1.png";
import { FaWindows } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
// import { FaSteam } from "react-icons/fa";

// import img4 from "../../assets/cta_hero_community_pt2.png";
// console.log(video);
const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="container-fluid w-100 d-flex"
        style={{ backgroundColor: "#1d2024", height: "100vh" }}
      >
        <div className="container left w-50">
          <h1
            className="text-white position-relative"
            style={{ left: "270px", top: "150px" }}
          >
            {" "}
            <FaSteam className="fs-1" /> STEAM
          </h1>
          <h3
            className="text-white fs-3 position-relative"
            style={{ fontWeight: "300", left: "270px", top: "180px" }}
          >
            Steam is the ultimate destination for <br />
            playing, discussing, and creating games.
          </h3>
          <button
            className="fs-5 text-white position-relative"
            style={{
              height: "7vh",
              width: "250px",
              top: "220px",
              left: "280px",
              backgroundColor: "#06bfff",
            }}
          >
            INSTALL STEAM
            <FaWindows className="text-black" />
          </button>
        </div>
        <div className="container right w-50">
          <video
            className="position-relative "
            style={{ left: "50px", height: "550px", width: "600px" }}
            src={video}
            controls
            alt=""
            autoPlay=" "
          />
        </div>
      </div>
      <div
        className="conatiner text-light text-center d-flex flex-column"
        style={{ backgroundColor: "#1d2024", height: "100vh" }}
      >
        <div className="position-relative" style={{ top: "270px" }}>
          <h1 className="position-relative">Access Games Instantly</h1>
          <h3>
            With nearly 30,000 games from AAA to indie and <br /> everthing in
            between. Enjoy exclusive deals, <br />
            automatic game updates, and other great perks.
          </h3>
        </div>
      </div>
      <div
        className="container-fluid w-100"
        style={{ backgroundColor: "#17191C", height: "100vh" }}
      >
        <div className="top d-flex w-100">
          <div
            className="position-relative"
            style={{ left: "300px", top: "100px" }}
          >
            <h1 className=" text-white">
              Join the <br /> Community
            </h1>
            <p className="text-white fs-4 " style={{ lineHeight: "1.2" }}>
              Meet new people, join groups, from <br />
              clans, chat in game and more! With <br />
              over 100 million potential friends <br /> the fun never stops.
            </p>
            <p className="fs-4" style={{ color: "#2ebfff" }}>
              Visit the Community <FaArrowRight />
            </p>
          </div>
          <img
            src={img1}
            className="position-relative"
            alt=""
            style={{ height: "35vh", left: "350px" }}
          />
          <img
            src={img2}
            alt=""
            className="position-absolute"
            style={{ height: "40vh", left: "750px", top: "1600px" }}
          />
        </div>
        <div className="middle d-flex">
          <img
            src={img3}
            style={{ height: "45vh", top: "150px", left: "300px" }}
            className="position-relative"
            alt=""
          />
          {/* <img src={img4} alt="" /> */}
          <div
            className="position-relative text-white"
            style={{ left: "500px", top: "190px" }}
          >
            <h1>
              Experience <br />
              Steam Hardware
            </h1>
            <h3>
              We created the Steam Deck and the <br />
              Value Index handset to make gaming on <br /> the PC even better.
            </h3>
            <p className="fs-4" style={{ color: "#2ebfff" }}>
              Experience Steam Hardware <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white d-flex"
        style={{ height: "50vh", backgroundColor: "#17191C" }}
      >
        <div
          className="position-relative"
          style={{ left: "300px", top: "100px" }}
        >
          <h1>And so much more...</h1>
          <h5>
            Earn achievement, read reviews, explore <br />
            custom Recommendations, and more.
          </h5>
        </div>
        <div
          className="position-relative d-flex flex-column"
          style={{ top: "100px", left: "500px" }}
        >
          <button
            className="fs-5 text-white"
            style={{
              height: "7vh",
              width: "250px",
              backgroundColor: "#06bfff",
            }}
          >
            INSTALL STEAM <FaWindows className="text-black" />
          </button>
          <p className="">
            Also available on : <FaApple /> <FaSteam /> <FaChrome />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
