import valuelogo from "../Footer/footerLogo_valve_new.png";
import steam from "../../assets/steamlogo.jpg";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid w-100 d-flex  "
        style={{ backgroundColor: "#171a21", height: "25vh" }}
      >
        <div>
          <img
            src={valuelogo}
            alt=""
            className="position-relative"
            style={{ height: "5vh", top: "40px", left: "170px" }}
          />
        </div>
        <div
          className="d-flex flex-column position-relative"
          style={{
            color: "#8F98A0",
            top: "40px",
            left: "170px",
            lineHeight: "0.5",
          }}
        >
          <p>
            2025 Valve Corporation. All rights reserved. All trademarks are
            property of their owners in the US and other countries.
          </p>
          <p>
            VAT included in all prices where applicable. Privacy Policy | Legal
            | Steam Subscriber Agreement | Refund | Cookies
          </p>
        </div>
        <div>
          <img
            src={steam}
            alt=""
            className="position-relative"
            style={{ top: "40px", left: "180px", height: "5vh" }}
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
