import { useEffect, useState } from "react";
import Homecarousle from "../homecarousle/Homecarousle";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const [results, setResult] = useState("");
  const getdata = async () => {
    const url = "https://games-details.p.rapidapi.com/page/1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ef77aca890msh78a67cb59eb66e6p1d323ajsnde7482a5b426",
        "x-rapidapi-host": "games-details.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setResult(result);
      // console.log(results.json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  if (results)
    return (
      <>
        <div>
          <Navbar />
          <div
            className="container-fluid d-flex flex-wrap p-3 gap-2"
            style={{ backgroundColor: "#1b2838" }}
          >
            <Homecarousle />
            <div className="row row-cols-3 gx-5 gy-5">
              {results.data.pages.map((pages) => (
                <Link to={`/game/${pages.id}`} className="col">
                  <div className="card border border-dark">
                    <img src={pages.img} alt="" className="card-img-top p-1" />
                    <div className="card-body">
                      <p className="card-title">{pages.name}</p>
                      <p className="card-text">{pages.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};
export default Homepage;
