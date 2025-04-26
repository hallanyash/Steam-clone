import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState("");
  const getData = async () => {
    const url = `https://games-details.p.rapidapi.com/gameinfo/single_game/${id}`;
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
      setGame(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (game)
    return (
      <>
        <Navbar />
        <div
          className="container-fluid position-relative top-0 border border-black"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundColor: "#1b2838",
            color: "#acb2b8",
          }}
        >
          <h1 className="m-3 text-center">Game Name: {game.data.name}</h1>
          <img
            src={game.data.media.screenshot[18]}
            className="card-img-top w-75 position-relative "
            style={{ height: "70vh", left: "180px" }}
            alt=""
          />
          <h2 className="m-3 text-center">
            Price: {game.data.pricing[0].price}
          </h2>
          <h3 className="m-3">Release Date: {game.data.release_date}</h3>
          <h4 className="m-3 text-center">About Game</h4>
          <p className="fs-5 m-5">{game.data.about_game}</p>
          <p className="fs-5 m-3">{game.data.desc}</p>
          <p>{game.data.lang}</p>
          {game.data.dev_details.developer_name.map((developer_name) => {
            <p>{developer_name}</p>;
          })}
          <h3 className="text-center">System Requirement For Game</h3>
          <div className="d-flex gap-5 border border-white">
            <div className="w-50 m-4">
              <h4>Minimum System Requirement </h4>
              {game.data.sys_req.linux &&
                game.data.sys_req.linux.min.map((min) => <p>{min}</p>)}
              {game.data.sys_req.window &&
                game.data.sys_req.window.min.map((min) => <p>{min}</p>)}
            </div>
            <div className="w-50 m-4">
              <h4>Recommended System Requirement</h4>
              {game.data.sys_req.window &&
                game.data.sys_req.window.recomm.map((recomm) => (
                  <p>{recomm}</p>
                ))}
            </div>
          </div>
          <h4 className="m-3">Game ScreenShots</h4>
          <div className="d-flex  gap-3 flex-wrap row">
            {game.data.media.screenshot.map((screenshot) => (
              <img
                src={screenshot}
                className="card-img-top w-25 p-4 col"
                alt=""
              />
            ))}
          </div>
        </div>

        <Footer />
      </>
    );
};
export default Game;
