import { useState } from "react";

export function MovieCard({ title, duration, genre, src }) {
  const [reactiveTitle, setReactiveTitle] = useState("Lord of the Rings");
  const [reactiveDuration, setReactiveDuration] = useState(179);
  const [reactiveGenre, setReactiveGenre] = useState("ACTION");
  return (
    <>
      <div
        className="card"
        onClick={function () {
          setReactiveTitle("Surprise");
          setReactiveDuration(reactiveDuration + 1);
          setReactiveGenre("FANTASY");
        }}
      >
        <img src={src} />
        <div className="info">
          <h2>{reactiveTitle}</h2>
          <p>{`${reactiveDuration} | ${reactiveGenre}`}</p>
        </div>
      </div>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          width: 400px;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px 0px 16px 0px;
          background-color: #0a0a0a;
          color: white;
        }
      `}</style>

      {/* TODO // remove this code later */}
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0px;
        }
      `}</style>
    </>
  );
}
