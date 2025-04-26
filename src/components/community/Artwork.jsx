import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Communitynav from "./Communitynav";

const Artwork = () => {
  const [artwork, setartwork] = useState("");
  const getData = async () => {
    const url =
      "https://games-details.p.rapidapi.com/media/artworks/730?limit=30&offset=0";
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
      setartwork(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(artwork.data.artworks[1]);
  if (artwork)
    return (
      <>
        <Navbar />
        <Communitynav />
        <div className="container-fluid ">
          <h1 className="text-white text-center mt-5">Artworks</h1>
          <div className="d-flex flex-wrap row row-cols-3 gx-5 gy-5 mb-4 mt-4  border border-black">
            {artwork.data.artworks.map((artworks) => (
              <img src={artworks} alt="" className="w-25" />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
};
export default Artwork;
