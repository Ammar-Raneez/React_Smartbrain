import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const {
    topRow: top,
    rightCol: right,
    bottomRow: bottom,
    leftCol: left,
  } = box;

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <div
          className="bounding-box"
          style={{ top, right, bottom, left }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
