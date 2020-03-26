import React from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "./terminalError.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function ErrorAnimation() {
  return (
    <div>
      <Lottie
        width="100px"
        height="100px"
        style={{ margin: "0 auto", marginTop: "10px" }}
        config={{
          animationData: animationData,
          loop: true,
          autoplay: true
        }}
      />
    </div>
  );
}
