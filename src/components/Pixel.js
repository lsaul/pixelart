import React from 'react'
import '../style/styles.css'

export default props  => {
    let classes = 'pixel ' + props.background
    // classes = classes + `${props.background} pixel ${
    //     props.current ? 'current-color' : ''
    //   }`

    return <div 
    className={`${props.background} pixel ${
            props.current ? 'current-color' : ''
           }`} 
      background={props.background} 
      onClick={props.onClick}
      />
}

 