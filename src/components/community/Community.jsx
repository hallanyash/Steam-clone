import { auto } from "@popperjs/core";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import bgImage from "../../assets/communitybg.jpg";
import { useState, useEffect } from "react";
import Communitynav from "./Communitynav";
import Footer from "../Footer/Footer";
const Community = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    const url =
      "https://games-details.p.rapidapi.com/news/announcements/3240220?limit=10&offset=0";
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
        <div className="container-fluid ">
          <Communitynav />
          <h1 className="text-white text-center m-4">Top News</h1>
          {data.data.news.map((news) => (
            <div
              className="card m-3 p-2 border border-black text-white"
              style={{ backgroundColor: " #1b2838" }}
            >
              <h4>{news.news_title}</h4>
              <p>{news.date}</p>
              <p>{news.content}</p>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
};
export default Community;
