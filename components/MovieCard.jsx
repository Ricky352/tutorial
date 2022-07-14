import { useEffect, useState } from "react";

export function MovieCard(props) {
  const [reactiveTitle, setReactiveTitle] = useState("Lord of the Rings");
  const [reactiveDuration, setReactiveDuration] = useState(179);
  const [reactiveGenre, setReactiveGenre] = useState("ACTION");

  const [isActive, setActive] = useState("false");
  const toggle = () => {
    setActive(!isActive);
  };

  const [active, setToggle] = useState("false");
  const activate = () => {
    setToggle(!active);
  };

  useEffect(
    function () {
      if (reactiveDuration % 2 != 0) {
        console.log(reactiveDuration);
      };
    },
    [reactiveDuration]
  );

  return (
    <>
      <div className="main-container">
        <div
          className="card"
          onClick={function () {
            setReactiveTitle("Surprise");
            setReactiveDuration(reactiveDuration - 10);
            setReactiveGenre("FANTASY");
          }}
        >
          <img src={props.src} />
          <div className="infoBar">
            <div className="info">
              <h2>{reactiveTitle}</h2>
              <p>{`${reactiveDuration} | ${reactiveGenre}`}</p>
            </div>
            <div className="heart" onClick={toggle}>
              ❤
            </div>
          </div>
        </div>

        <div className="card">
          <img
            onClick={activate}
            src={`${active ? "/lotr.jpeg" : "/matrix.jpg"}`}
          />
          <div className="infoBar">
            <div className="info">
              <h2>{`${active ? "Lord of the Rings" : "Matrix"}`}</h2>
              <p>
                {`${active ? "179 MIN" : "120 MIN"}`} |{" "}
                {`${active ? "FANTASY" : "ACTION"}`}
              </p>
            </div>
            <div className="heart" onClick={toggle}>
              ❤
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-around;
        }
        .card {
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 100%;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px 0px 16px 0px;
          color: white;
        }
        .infoBar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: #0a0a0a;
        }
        .heart {
          color: ${isActive ? "white" : "red"};
          padding: 16px 0px 16px 0px;
          margin-right: 12px;
          font-size: 24px;
        }
      `}</style>
    </>
  );
}
