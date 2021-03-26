import React, { useEffect } from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw, props.width, props.height);

  return <canvas id="canvas1" ref={canvasRef} {...rest} />;
};

export default Canvas;
