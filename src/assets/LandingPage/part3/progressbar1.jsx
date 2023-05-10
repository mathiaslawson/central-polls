import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import Changes from "./changes"
import './parts.css'

export default function progressbar1() {

  const score = [60, 0, 10, 20, 60, 60 , 60 , 60 , 60 ]
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
        pathColor: "#FF6060",
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