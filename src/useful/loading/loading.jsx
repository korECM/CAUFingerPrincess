import React from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "./2012-custom-load.json";
export default function LoadingAnimation({ width, height }) {
  if (!width) width = 100;
  if (!height) height = 100;
  return (
    <div>
      <Lottie
        width={`${width}px`}
        height={`${height}px`}
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
