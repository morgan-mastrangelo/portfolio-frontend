import React, { useState, useEffect } from "react";
import ImageLoader from "./ImageLoader";

const imageCache = new Map();

function SkillImage(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(imageCache.has(props.src)) {
      setLoaded(true);
    } else {
      const img = new Image();
      img.src = props.src;
      img.onload = () => {
        imageCache.set(props.src, true);
        setLoaded(true);
      };
    }
  }, [props.src]);

  return !loaded ? <ImageLoader /> : (
    <img alt={props.alt ? props.alt : 'image'} src={props.src} />
  );
}

export default SkillImage;