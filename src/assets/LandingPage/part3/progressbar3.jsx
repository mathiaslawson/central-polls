import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import Changes from "./changes"
import './parts.css'

export default function progressbar3() {

    const score = [2, 10, 10, 20, 60, 80 , 60 , 50 , 63 ]
    return (
    <Changes values={score}>
    {value => (
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        circleRatio={0.75}
        strokeWidth= {14}
        styles={buildStyles({
          rotation: 1/2 + 1 / 8,
          pathColor: "#1062c2",
          strokeLinecap: "butt",
          trailColor: "gray",
          textColor:"black",
          textSize:"1rem",
        })}
      />
    )}
  </Changes>
    )
  }