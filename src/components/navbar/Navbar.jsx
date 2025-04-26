import { FaSteam } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Community from "../community/Community";
const Navbar = () => {
  return (
    <div
      className="container-fluid d-flex bg-dark text-white "
      //   justify-content-center
      //   align-items-center
      style={{ height: "15vh" }}
    >
      <FaSteam
        className="fs-1 position-relative"
        style={{ left: "200px", top: "30px" }}
      />
      <h1 className="m-4 position-relative " style={{ left: "190px" }}>
        Steam
      </h1>
      <ul
        className="d-flex gap-5 position-relative  m-4 fs-4"
        style={{ left: "200px", top: "10px" }}
      >
        <Link className="text-white text-decoration-none" to="/">
          Store{" "}
        </Link>
        <Link className="text-white text-decoration-none" to="/community">
          Community
        </Link>
        <Link className="text-white text-decoration-none" to="/About">
          About{" "}
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};
export default Navbar;
