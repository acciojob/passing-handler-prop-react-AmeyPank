
import React from 'react'

export default function Selection(props) {
  return (
    <div>
       <div style={props.applyColor} className="fix-box">{props.key}</div>
    </div>
  )
}