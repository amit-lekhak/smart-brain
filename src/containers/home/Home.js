import React, { useState } from "react";
import Logo from "../../components/logo/Logo";
import "./Home.styles.css";
import Facebox from "../../components/facebox/Facebox";

const Home = ({ user: { name, entries: count, id } }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [error, setError] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [entries, setEntries] = useState(count);
  const [imageSize,setImageSize] = useState({
      height:0,width:0
  })

  const detectImage = (imageUrl) => {
    if (!imageUrl) return;

    setShowImage(false);
    setError("");

    fetch("/detectface", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return setError(data.error);
        }

        setShowImage(true);
        setError("");
        setBoxes(data.data);

        fetch("/profile", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              return setError(data.error);
            }

            setError("");
            setEntries(data.entries);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const imageLoaded = (e) => {
      setImageSize({height:e.target.height,width:e.target.width})
  }

  return (
    <div>
      <Logo />

      <div className="home-container">
        <span className="entry-text1">
          {name}, your current entry count is...
        </span>

        <span className="entry-text2">{entries}</span>

        <span className="desc-text">
          This Magic Brain will detect faces in your pictures. Git it a try.
        </span>

        <div className="face-detect-form">
          <input
            onChange={(e) => {
              showImage && setShowImage(false);
              return setImageUrl(e.target.value);
            }}
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="false"
            value={imageUrl}
          />
          <button onClick={() => detectImage(imageUrl)}>Detect</button>
        </div>

        {error && (
          <p className="desc-text" style={{ color: "red" }}>
            {error}
          </p>
        )}

        {showImage && (
          <div className="detected-image">
            <img
              onLoad={imageLoaded}
              id="image"
              src={imageUrl}
              alt="Detected Faces"
            />
            {boxes && imageSize.height && <Facebox boxes={boxes} imageSize={imageSize} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
