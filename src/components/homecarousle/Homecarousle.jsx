const data = {
  status: 200,
  message: "success",
  data: {
    similar_games: [
      {
        id: "359550",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/header_292x136.jpg?t=1742315874",
        price: "$19.99",
      },
      {
        id: "578080",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/676eaac7f05ea6cb79266c42cfe2a10791cc9a02/header_292x136.jpg?t=1743471348",
        price: "Free To Play",
      },
      {
        id: "2073850",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2073850/05c094dc480f5002adfb7c9076789260bf86faee/header_292x136.jpg?t=1743523996",
        price: "Free To Play",
      },
      {
        id: "107410",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/107410/header_292x136.jpg?t=1743497752",
        price: "$29.99",
      },
      {
        id: "240",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/240/header_292x136.jpg?t=1729702412",
        price: "$9.99",
      },
      {
        id: "2406770",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2406770/9100175e3c279f604e3b32e9b4979c1226d837c4/header_292x136.jpg?t=1742002213",
        price: "$33.32",
      },
      {
        id: "393380",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393380/header_292x136.jpg?t=1734053306",
        price: "$49.99",
      },
      {
        id: "440",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/440/header_292x136.jpg?t=1739985926",
        price: "Free To Play",
      },
      {
        id: "444200",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/444200/header_292x136.jpg?t=1743497340",
        price: "Free To Play",
      },
      {
        id: "714010",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/714010/header_292x136.jpg?t=1740778136",
        price: "Free",
      },
      {
        id: "1548850",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1548850/6fda8341b3559754cf71ca839e69460c3e54479e/header_292x136.jpg?t=1743120241",
        price: "$39.99",
      },
      {
        id: "581320",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/581320/header_292x136.jpg?t=1740561743",
        price: "$29.99",
      },
      {
        id: "202970",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/202970/header_292x136.jpg?t=1654830020",
        price: "$59.99",
      },
      {
        id: "753650",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/753650/header_292x136.jpg?t=1741487722",
        price: "$9.99",
      },
      {
        id: "1874880",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1874880/header_292x136.jpg?t=1743091169",
        price: "$39.99",
      },
      {
        id: "2767030",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/header_292x136.jpg?t=1741923063",
        price: "Free To Play",
      },
      {
        id: "594650",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/594650/14176d752c7b3ced4097757d81216ba1b8a05575/header_292x136_alt_assets_21.jpg?t=1743412689",
        price: "comming soon",
      },
      {
        id: "2933620",
        image:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933620/header_292x136.jpg?t=1740790590",
        price: "comming soon",
      },
    ],
    total: 18,
  },
};
// console.log(data);
// console.log(data.data.similar_games[0].image);
const Homecarousle = () => {
  return (
    <div className="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide m-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={data.data.similar_games[0].image}
              className="d-block w-100 object-cover "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={data.data.similar_games[1].image}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item d-flex flex-wrap">
            <img
              src={data.data.similar_games[2].image}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Homecarousle;
