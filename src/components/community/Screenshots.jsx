import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Communitynav from "./Communitynav";
import Footer from "../Footer/Footer";

const ScreenShots = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    const url =
      "https://games-details.p.rapidapi.com/media/screenshots/730?limit=20&offset=0";
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
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (data)
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <Communitynav />
          <h1 className="text-white text-center mt-5">Games ScreenShots</h1>
          <div className=" row row-cols-3 d-flex flex-wrap justify-content-center border border-black p-3 m-3">
            {data.data.screenshot.map((screenshot) => (
              <div className=" w-50">
                <img
                  src={screenshot}
                  alt=""
                  className="card-img-top w-75 mb-5"
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
};
export default ScreenShots;
