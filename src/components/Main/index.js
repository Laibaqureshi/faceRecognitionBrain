// import "./App.css";
import React, { useState } from "react";
import Clarifai from "clarifai";
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import Rank from "../Rank/Rank";
import Particles from "react-particles-js";

  const Main = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState("");

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const app = new Clarifai.App({
    apiKey: "3e0537a0ccfe4bc994f39ab0fc756037",
  });

  const onInputchange = (event) => {
    setInput(event.target.value);
  };
  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <div >
     
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputchange={onInputchange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
}
export default Main;
