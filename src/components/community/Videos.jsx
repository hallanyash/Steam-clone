import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Communitynav from "./Communitynav";
import Footer from "../Footer/Footer";

const Videos = () => {
  const [video, setVideo] = useState("");
  const getData = async () => {
    const url =
      "https://games-details.p.rapidapi.com/media/videos/730?limit=30&offset=0";
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
      setVideo(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (video)
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <Communitynav />
          <h1>Videos</h1>
          {/* {video.data.videos.map((videos) => ( */}
          {/* // <iframe */}
          {/* //   src={videos}
            //   frameborder="0"
            //   width="100%"
            //   height="500"
            //   // src="https://www.youtube.com/embed/mRD0-GxqHVo"
            //   title="YouTube video player"
            //   frameBorder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowFullScreen
            // /> */}

          {/* ))} */}
          <iframe
            src="https://www.youtube.com/watch?v=2ENqv4ofkE4"
            frameborder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="500"
          ></iframe>
        </div>
        <Footer />
      </>
    );
};
export default Videos;
