import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Communitynav from "./Communitynav";

const Broadcasts = () => {
  return (
    <>
      <Navbar />
      <Communitynav />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#1b2838" }}
      ></div>
      <Footer />
    </>
  );
};
export default Broadcasts;
