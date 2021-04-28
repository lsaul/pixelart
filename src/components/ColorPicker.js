import React from 'react'
import Pixel from './Pixel'

import Colors from './Colors'

export default props => {
    return (
        <div className="colorpicker">
            
            {
            
            Colors.map((color, index) => {
                console.log(color)
                return <Pixel 
                
                key={index} 
                background={color} 
                className={color} 
                current={Colors[props.currentColor] === color}
                onClick={e => props.setColor(index)}
                
                />

                } 
            )} 
        </div>
    )
}