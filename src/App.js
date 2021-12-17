import "./App.css";
import React, { useState } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/index";

// const calculateFaceLocation=(data)=>{
//  const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
//  console.log(clarifaiFace);
//   const image=document.getElementById('inputImage')
//   const width=Number(image.width);
//   const height=Number(image.height);
//   // console.log(width, height);
//   return{
//     leftCol:clarifaiFace.left_col * width,
//     topRow:clarifaiFace.top_row * height,
//     rightCol:width -(clarifaiFace.right_col*width),
//     bottomRow:height -(clarifaiFace.bottom_row * height)

//   }
// }
const particleOptions = {
  particles: {
    number: {
      value: 190,
      density: {
        enable: true,
        value_area: 800,
        color: "#3CA9D1",
      },
    },
  },
};
// const app=new Clarifai.App({
//   apiKey:'3e0537a0ccfe4bc994f39ab0fc756037'
// });
export default function App() {
  // const [input, setInput] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [box, setBox] = useState("");
  // const onInputchange = (event) => {
  //   //  console.log("helllo");
  //   // console.log(event.target.value);
  //   setInput(event.target.value);
  // };
  // const displayFaceBox=(box)=>{
  //   console.log(box);
  //   setBox(box);
  //   }
  // const onButtonSubmit = () => {
  //   setImageUrl(input);
  //   console.log("click");
  //   app.models.predict(
  //     Clarifai.FACE_DETECT_MODEL,
  //       input).then(response=>displayFaceBox(calculateFaceLocation(response))).catch(err=>console.log(err)
  //       );
  //     }

  return (
    <Router>
      <div className="App">
        <Particles className="particles" params={particleOptions} />
         <Navigation />
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/main" exact component={Main} />
         </Switch>
      </div>
    </Router>
  );
}
